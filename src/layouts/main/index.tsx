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
            <div className="page-container py-3 container justify-content-center">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Main
