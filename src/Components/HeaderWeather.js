import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
function HeaderWeather(props) {
    return (
        <div>
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>
  <Link className="navbar-brand" to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-link active" to="/">Home</Link>
      <Link className="nav-link" to="/weather">Weather</Link>
      {/* <Link className="nav-link" to="#">Pricing</Link> */}
    </div>
  </div>
  </div>
</nav>
</div>
        
    );
}

export default HeaderWeather;