import React from 'react'
import { Carousel, Button } from 'antd'
import "./SliderMovies.scss"
import { Link } from 'react-router-dom'
import { IMG_REF } from '../../utils/constanst'
import Loading from '../Loading/Loading'

export default function SliderMovies(props) {
    const { new_movies } = props

    if (new_movies.Loading || !new_movies.Result) {
        return <Loading />
    }

    const { results } = new_movies.Result

    return (
        <Carousel autoplay effect="fade" easing='ease-out' className='slider-movies' >
            {results.slice(0, 10).map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </Carousel>
    )
}

function Movie(props) {
    const { movie: { id, backdrop_path, title, overview } } = props
    const backDropPath = `${IMG_REF}${backdrop_path}`

    return (
        <div className='slider-movies__movie'
            style={{ backgroundImage: `url('${backDropPath}')` }}
        >
            <div className='slider-movies__movie-info'>
                <div>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                    <Link to={`/movie/${id}`}>
                        <Button type='primary'>
                            Ver más
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}