import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import { API, URL_API } from '../utils/constanst'
import Footer from '../componets/Footer/Footer'
import Loading from '../componets/Loading/Loading'
import MovieCatalog from '../componets/MovieCatolog/MovieCatalog'
import PaginationMovie from '../componets/Pagination/Pagination'

export default function NewMovies() {
    const [movieList, setMovieList] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        (async () => {
            const response = await fetch(`${URL_API}/movie/now_playing?api_key=${API}&lenguage=es-E&page=${page}`)
            const movies = await response.json()
            setMovieList(movies)
        })()
    }, [page])

    const onChangePage = (page) => {
        setPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <Row>
            <Col span={24} style={{ textAlign: 'center', marginTop: 25 }} >
                <h1 style={{ fontSize: 35, fontWeight: 'bold' }} >Ultimos lanzamientos</h1>
            </Col>
            <Col span={24}>
                {
                    movieList.results ? (
                        <>
                            <Col span={24} >
                                <MovieCatalog movies={movieList} />
                            </Col>
                            <Col span={24}>
                                <PaginationMovie
                                    currentPage={movieList.page}
                                    totalItems={movieList.total_results}
                                    onChangePage={onChangePage}
                                />
                            </Col>
                        </>
                    ) : (
                            <Col span={24}>
                                <Loading />
                            </Col>
                        )
                }
            </Col>
            <Col span={24}>
                <Footer />
            </Col>
        </Row>
    )
}
