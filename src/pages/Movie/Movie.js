import React, { useState } from 'react'
import { Row, Col, Button } from 'antd'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import useFetch from '../../hooks/useFetch'
import { URL_API, API, IMG_REF } from '../../utils/constanst'
import Loading from '../../componets/Loading/Loading'
import './Movie.scss'
import ModalVideo from '../../componets/ModalVideo/ModalVideo'

export default function Movie() {
    const { id } = useParams()
    const movie_detail = useFetch(`${URL_API}/movie/${id}?api_key=${API}&language=es-ES`)

    if (movie_detail.Loading || !movie_detail.Result) {
        return <Loading />
    }

    return (
        <div>
            <RenderMovie movie_detail={movie_detail.Result} />
        </div>
    )
}

const RenderMovie = (props) => {
    const { movie_detail: { backdrop_path, poster_path } } = props
    const backDropPatch = `${IMG_REF}${backdrop_path}`
    return (
        <div className='movie' style={{ backgroundImage: `url('${backDropPatch}')` }}>
            <div className='movie__dark' />
            <Row >
                <Col span={8} offset={3} className='movie__poster'>
                    <PosterMovie image={poster_path} />
                </Col>
                <Col span={10} className='movie__info' >
                    <MoveInfo movie_detail={props.movie_detail} />
                </Col>
            </Row>
        </div>
    )
}

function PosterMovie(props) {
    const { image } = props
    const posterPath = `${IMG_REF}${image}`
    return (
        <div style={{ backgroundImage: `url('${posterPath}')` }}>

        </div>
    )
}

function MoveInfo(props) {
    const { movie_detail: { id, title, release_date, overview, genres } } = props
    const [isVisibleModal, setIsVisibleModal] = useState(false)
    const videoMovie = useFetch(`${URL_API}/movie/${id}/videos?api_key=${API}&language=es-ES`)
    const openModal = () => setIsVisibleModal(true)
    const closeModal = () => setIsVisibleModal(false)

    const renderVideo = () => {
        if (videoMovie.Result) {
            if (videoMovie.Result.results.length > 0) {
                return (
                    <React.Fragment>
                        <Button icon='play-circle' onClick={openModal}>
                            Ver trailer
                        </Button>
                        <ModalVideo
                            videoPlatform={videoMovie.Result.results[0].site}
                            videoKey={videoMovie.Result.results[0].key}
                            isOpen={isVisibleModal}
                            close={closeModal}
                        />

                    </React.Fragment>
                )
            }
        }
    }
    return (
        <React.Fragment>
            <div className='movie__info-header'>
                <h1>
                    {title}
                    <span>{moment(release_date, 'YYYY-MM-DD').format('YYYY')}</span>
                </h1>
                {renderVideo()}
            </div>
            <div className='movie__info-content' >
                <h3>General</h3>
                <p>{overview}</p>
                <h3>Generos</h3>
                <ul>
                    {genres.map(gender => (
                        <li key={gender.id} >{gender.name}</li>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    )
}