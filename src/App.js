import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import { Login } from './components/login';
import { Logout } from './components/logout';
import Register from './components/register';
import Products from './components/Products/Products';
import ProductsSummary from './components/Products/Productsummary';
import Cart from './components/Cart';

function App() {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Products />
        <Cart />
      </main>
    </Fragment>
  );
};


export default App;
