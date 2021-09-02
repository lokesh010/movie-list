import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function Topbar() {
    const { location } = useHistory();

    return (
        <header id="header" className="sticky-top">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo"><a href="index.html">Movies</a></h1>
                <nav id="navbar" className="navbar">
                    <ul>
                        <Link to="/" className={`${location.pathname === '/' && 'active'}`}>Home</Link>
                        <Link to="/favourite" className={`${location.pathname === '/favourite' && 'active'}`}>Favourite</Link>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>{/* .navbar */}
            </div>
        </header>
    )
}

export default Topbar
