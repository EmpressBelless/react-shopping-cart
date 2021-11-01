import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Login } from './Pages/Login';
import Register from './Pages/register';
import Products from './components/Products/Products';
import Cart from './Pages/Cart';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: localStorage.getItem('token'),
    };
  };
logOut = () => {
  localStorage.removeItem('token');
  this.setState({
    loggedIn: null
  })
}
logIn = (e) => {
  e.preventDefault();
  let username = e.target.username.value;
  let password = e.target.password.value;
  let encodedString = btoa(`${username}:${password}`)
  let myHeaders = new Headers();
  myHeaders.append('Authorization', `Basic ${encodedString}`)
  
  fetch('http://localhost:5000/api/token', {
      method: 'POST',
      headers: myHeaders
  }).then(res => res.json())
      .then(data => {
          localStorage.setItem('token', data['token'])
          this.setState({
            loggedIn: data['token'],
          })
      })
      .catch(err => console.error(err))
}
  render() {
    return (
      <>
   <Navbar loggedIn={this.state.loggedIn} logOut={this.logOut}/> 
   <div className="container">
      <Route path="/cart">
      <Cart />
      </Route>
     <Route path="/Home">
       <Products />
     </Route>
     <Route path="/register">
       <Register />
     </Route>
     <Route path="/Login">
       <Login handleSubmit={this.logIn} loggedIn={this.state.loggedIn} />
     </Route>
     </div>
     </>
);
    }
};