import React from 'react'
import Footer from './Footer'
import Topbar from './Topbar'
import { Helmet } from "react-helmet";

interface propTypes {
    title: string,
    children: JSX.Element
}

function Main(props: propTypes) {
    return (
        <div className="wrapper-container">
            <Helmet title={`React | ${props.title}`} />
            <Topbar />
            <div className="page-container py-3 container justify-content-center">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Main
