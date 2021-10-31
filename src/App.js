import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Register from './Pages/register';
import Products from './components/Products/Products';
import Cart from './Pages/Cart';
import Home from './Pages/Home';


function App() {
  return (
    <>
   
      <Navbar /> 
      {/* <Products /> */}
      <div className="container">
        <Route path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
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
  };
{/* fetch('https://kekambas-bs.herokuapp.com/api/products');
    .then(res => res.json());
    .then((data) => {;
      console.log(data);    ;
 }) */}
export default App;

