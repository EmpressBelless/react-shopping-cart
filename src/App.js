import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Login } from './Pages/Login';
import Logout from './Pages/Logout';
import Register from './Pages/register';
import Products from './components/Products/Products';
import Cart from './Pages/Cart';
import Home from './Pages/Home';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: localStorage.getItem('token')
    };
  };

  render() {
    return (
      <>
   <Navbar loggedIn={this.state.loggedIn}/> 
   <div className="container">
      <Route path="/cart">
      <Cart />
      </Route>
     )}
     <Route path="/Home">
       <Products />
     </Route>
     <Route path="/register">
       <Register />
     </Route>
     <Route path="/Login">
       <Login />
     </Route>
    
     <Route path="/Logout">
       <Logout />
     </Route>
     </div>
     </>
);
    }
};