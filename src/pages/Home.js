import React from 'react'
import useFetch from '../hooks/useFetch'
import SliderMovies from '../componets/SliderMovies/SliderMovies'
import { URL_API, API } from '../utils/constanst'
import MovieList from '../componets/MovieList/MovieList'
import { Row, Col } from 'antd'
import Footer from '../componets/Footer/Footer'

export default function Home() {
    const new_movies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`)
    const popular_movies = useFetch(`${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`)
    const top_rated_movies = useFetch(`${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`)
    return (
        <React.Fragment>
            <SliderMovies new_movies={new_movies} />
            <Row>
                <Col span={12}>
                    <MovieList title='Peliculas Populares' movies={popular_movies} />
                </Col>
                <Col span={12}>
                    <MovieList title='Peliculas Más Votadas' movies={top_rated_movies} />
                </Col>
            </Row>
            <Footer />
        </React.Fragment>
    )
}
