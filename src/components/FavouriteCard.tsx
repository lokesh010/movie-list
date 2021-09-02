import React, { useState } from 'react'
import { textOverflow } from 'helpers';

interface MovieProps {
    id: number
    title: string
    poster_path: string
    overview: string
    release_date: string
}
const baseImgUrl = "https://image.tmdb.org/t/p/w500/";

function MovieCard({ movie, removeFav }: { movie: MovieProps, removeFav: Function }) {

    const addFavHandler = (fid: number) => {
        removeFav(fid)
    }

    return (
        <div className="card mb-3 hover-card cursor-pointer" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={baseImgUrl + movie.poster_path} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                            <h5 className="card-title text-primary"><b>{movie.title}</b></h5>
                            <i className="fa fa-star" onClick={() => { }}></i>
                        </div>
                        <p className="card-text">{textOverflow(movie.overview)}</p>
                        <p className="card-text"><small className="text-muted">Release Date: {movie.release_date}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(MovieCard);
