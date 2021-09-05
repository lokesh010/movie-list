import React from 'react'
import Footer from './Footer'
import Topbar from './Topbar'
import 'assets/css/style.css';

interface propTypes {
    children: JSX.Element
}

function Main(props: propTypes) {
    return (
        <div className="wrapper-container">
            <Topbar />
            {heroContainer()}
            <div className="container page-container py-3 justify-content-center d-flex" id="list">
                {props.children}
            </div>
            <Footer />
        </div>
    )

    function heroContainer() {
        return (
            <div id="hero-area" className="hero-area-bg" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                            <div className="contents">
                                <h2 className="head-title">Movie List Page</h2>
                                <p>List of all the latest and trending movies</p>
                                <div className="header-button">
                                    <a href="#list" className="btn btn-common">View List</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
