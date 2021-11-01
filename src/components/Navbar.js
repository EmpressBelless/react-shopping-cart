import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { LoggedInNav } from './LoggedInNav';
import { LoggedOutNav } from './LoggedOutNav';

export default class Navbar extends Component {
  render() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid" >
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li> */}
              {this.props.loggedIn ? <LoggedInNav /> : <LoggedOutNav />}
          </ul>
              <li className="nav-item  ms-auto">
                <Link className="nav-link" to="/Cart">Cart</Link>
              </li>
              { this.props.loggedIn ?
              <ul className="nav-item ms-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/" onClick={this.props.logout}>Logout</Link>
              </li>
              </ul>
              : null}
        </div>
      </div>
    </nav>
    )
  }
}
