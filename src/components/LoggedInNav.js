import React from 'react';
import {Link} from 'react-router-dom';

export function LoggedInNav(props){

  return (
      <React.Fragment>
          <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
          </li>
      </React.Fragment>
  )
}