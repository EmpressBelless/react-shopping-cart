import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logout from './logout';
import login from './login';

export default class Navbar extends Component {
  render() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid" >
        <Link className="navbar-brand" href="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/cart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/logout">Logout</Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  };
};
