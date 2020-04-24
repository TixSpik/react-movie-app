import React from 'react'
import { Button, Avatar, List } from 'antd'
import Loading from '../Loading/Loading'
import './MovieList.scss'
import { IMG_REF } from '../../utils/constanst'
import { Link } from 'react-router-dom'

export default function MovieList(props) {
    const { movies, title } = props

    if (movies.Loading || !movies.Result) {
        return <Loading />
    }

    return (
        <List
            className='movie-list'
            size='default'
            header={<h2>{title}</h2>}
            bordered
            dataSource={movies.Result.results.slice(0, 10)}
            renderItem={movie => <RenderMovie movie={movie} />}
        />
    )
}

function RenderMovie(props) {
    const { movie: { id, title, poster_path } } = props
    const PosterPath = `${IMG_REF}${poster_path}`
    return (
        <List.Item className='movie-list__movie' >
            <List.Item.Meta
                avatar={<Avatar src={PosterPath} />}
                title={<Link to={`/movie/${id}`}  >{title}</Link>}
            />
            <Link to={`/movie/${id}`} >
                <Button type='primary'
                    shape='round'
                    icon='right'
                >
                </Button>
            </Link>
        </List.Item>
    )
}