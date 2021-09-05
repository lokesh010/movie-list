import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function Topbar() {
    const { location } = useHistory();

    return (
        <header id="header" className="sticky-top">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo"><Link to="/" >Movies</Link></h1>
                <nav id="navbar" className="navbar">
                    <ul>
                        <Link to="/" className={`${location.pathname === '/' && 'active-nav'}`}>Home</Link>
                        <Link to="/favourite" className={`${location.pathname === '/favourite' && 'active-nav'}`}>Favourite</Link>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>
            </div>
        </header>
    )
}

export default Topbar
