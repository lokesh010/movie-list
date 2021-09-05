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
    vote_count: number
    original_language: string

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
    const [toggleAccordion, setToggleAccordion] = useState(false);
    const toggleAccordionHandler = () => setToggleAccordion(!toggleAccordion);

    return (
        <>
            <div>
                <Card
                    onClick={toggleAccordionHandler}
                    className="mb-4 accordion-trigger"
                    hoverable
                    style={{ maxWidth: '400px', maxHeight: "500px" }}
                    cover={renderMovieImage()}
                >
                    <div className="bg-white">
                        <div className="card-body">
                            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                                <h5 className="card-title text-primary" onClick={e => {
                                    e.stopPropagation();
                                    setToggleModal(true)
                                }}><b>{movie.title}</b></h5>
                                {renderStarIcons()}
                            </div>
                            <p className="card-text">{textOverflow(movie.overview, 150)}</p>
                            <p className="card-text"><small className="text-muted">Release Date: {movie.release_date}</small></p>
                        </div>
                    </div>
                </Card>
                {renderAccordion()}
            </div>

            {/* Modal */}
            {/* passed index just to replicate the movie director because director doesnot exist in this api */}
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
        else if (isFavourite(movie.id)) {
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

    function renderAccordion() {
        return (
            <Card
                className={`mb-4 accordion-child-${toggleAccordion ? "show" : "hide"} roll-out`}
                hoverable
                style={{ maxWidth: '400px' }}
                cover={renderMovieImage()}
            >
                <div className="bg-white">
                    <div className="card-body">
                        <h5 className="card-title text-primary"><b>{movie.title}</b></h5>
                        <p className="card-text">{movie.overview}</p>
                        <div className="d-flex mt-2" style={{ justifyContent: 'space-between' }}>
                            <span className="mr-auto">Language:{" "}<b>{movie.original_language}</b></span>
                            <p className="card-text"><small className="text-muted">Release Date: <b>{movie.release_date}</b></small></p>
                            <i className="fa fa-thumbs-up text-primary fa-md">{" "}{movie.vote_count}</i>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}
