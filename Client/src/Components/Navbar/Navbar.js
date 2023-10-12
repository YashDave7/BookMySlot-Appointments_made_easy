// import './Navbar.css';
import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <a className="navbar-brand" href="/">BookMySlot</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="professional/register">Join as a Professional</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user/login">Login </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user/signup">Signup </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}