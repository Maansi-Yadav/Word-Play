import React from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
<>
    
    <div>
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    {/* <Link to="/">{props.title}</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.homee}</a>
          {/* <Link to="/home">{props.homee}</Link> */}
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
        {/* <Link to="/about">About</Link> */}
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
    </>
  )
//   Navbar.ReactPropTypes={
//     titleee: ReactPropTypes.string.isRequired,
//     aboutii: ReactPropTypes.string
//   }
// Navbar.defaultProps={
// titleee:"mona",
// aboutii:"girl"

}

