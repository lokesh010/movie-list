import React, { useState } from 'react'
import { textOverflow } from 'helpers';
import { Card } from 'antd';
import Modal from 'components/DirectorModal'

const baseImgUrl = "https://image.tmdb.org/t/p/w500/";
interface MovieProps {
    id: number
    title: string
    poster_path: string
    overview: string
    release_date: string
}
interface PropTypes {
    index: number
    movie: MovieProps,
    addFavourite: Function,
    removeFavourite: Function,
    isFavourite: Function
    isLoading: Boolean
};

export default function MovieCard({ index, movie, addFavourite, removeFavourite, isFavourite, isLoading }: PropTypes) {
    const [toggleModal, setToggleModal] = useState(false);

    return (
        <>
            <Card
                onClick={() => setToggleModal(true)}
                className="mb-4"
                hoverable
                style={{ maxWidth: '400px' }}
                cover={renderMovieImage()}
            >
                <div className="bg-white">
                    <div className="card-body">
                        <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                            <h5 className="card-title text-primary"><b>{movie.title}</b></h5>
                            {renderStarIcons()}
                        </div>
                        <p className="card-text">{textOverflow(movie.overview)}</p>
                        <p className="card-text"><small className="text-muted">Release Date: {movie.release_date}</small></p>
                    </div>
                </div>
            </Card>
            {/* Modal */}
            {/* just to replicate the movie director because director doesnot exist in this api */}
            {toggleModal &&
                <Modal directorID={index + 1} isVisible={toggleModal} closeHandler={() => setToggleModal(false)} />
            }
        </>
    )

    function renderStarIcons() {
        if (isLoading) {
            return (
                <div><i className="fas fa-circle-notch fa-spin fa-lg"></i></div>
            )
        }
        if (isFavourite(movie.id)) {
            return (
                <div><i className="fa fa-star fa-lg" onClick={e => removeFavourite(e, movie.id, index)}></i></div>
            )
        }
        else if (!isFavourite(movie.id)) {
            return (
                <div><i className="far fa-star fa-lg" onClick={e => addFavourite(e, movie.id, index)}></i></div>
            )
        }
    }

    function renderMovieImage() {
        return (
            <div style={{ height: "250px" }}>
                <img alt="movie-card" className="img-cover" src={baseImgUrl + movie.poster_path} />
            </div>
        )
    }
}
