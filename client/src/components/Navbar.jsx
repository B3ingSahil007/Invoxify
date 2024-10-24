import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='container'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <h4><a style={{ color: '#a3a3a3', textDecoration: 'none' }} className="navbar-brand custom-shadow" to="/">Invoxify</a></h4>
                        {/* <a style={{ color: '#34495E', textDecoration: 'none' }} className="navbar-brand custom-shadow" href="/">Invoxify</a> */}
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse d-flex justify-content-end navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav">
                                <li className="nav-item mx-1">
                                    <NavLink style={{ color: '#5479f7' }} className="nav-link custom-shadow" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item mx-1">
                                    <a style={{ color: '#5479f7' }} className="nav-link custom-shadow" href="#">About</a>
                                </li>
                                <li className="nav-item mx-1">
                                    <a style={{ color: '#5479f7' }} className="nav-link custom-shadow" href="#">Services</a>
                                </li>
                                <li className="nav-item mx-1">
                                    <NavLink style={{ color: '#5479f7' }} className="nav-link custom-shadow" to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item mx-1">
                                    <NavLink style={{ color: '#5479f7' }} className="nav-link custom-shadow" to="/">Registration</NavLink>
                                </li>
                                <li className="nav-item mx-1">
                                    <NavLink style={{ color: '#5479f7' }} className="nav-link custom-shadow" to="/login">Login</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar
