import React from 'react'
// importing props 
import propTypes from 'prop-types';
import { Link } from "react-router-dom";

// proptypes 
Navbar.prototypes = {
    tittle: propTypes.string.isRequired,
    about: propTypes.string.isRequired
}

Navbar.defaultProps = {
    tittle : "hello world!",
    about : "About"

}

// rfc: react function base component 
function Navbar(props) {

  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.tittle}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-Link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-Link" to="/about">{props.about}</Link>
                </li>
            </ul>
                <div className={`form-check form-switch text-${props.mode==='light' ? 'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label">Dark mode</label>
                </div>
            </div>
        </div>
        </nav>
        )
}
export default Navbar
