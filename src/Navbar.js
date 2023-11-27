import React from "react";

const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode === 'dark' ? 'light' : 'dark'} `}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarzNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page">
              Home
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
            <a className="nav-link disabled">Disabled</a>
          </div>
        </div>
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'light' : 'dark'}`}>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.togglebtn}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Dark Mode
        </label>
      </div>
    </nav>
    
  );
};

export default Navbar;
