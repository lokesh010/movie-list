import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <div className="error-container">
            <div className="error-wrapper">
                <div className="man-icon"></div>
                <h3 className="title">404</h3>
                <p className="info">Oh! Page not found</p>
                <button type="button" className="home-btn"><Link to="/">HOME</Link></button>
            </div>
        </div>
    )
}

export default Error404
