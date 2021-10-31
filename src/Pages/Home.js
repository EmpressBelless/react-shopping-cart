import React, { Component } from 'react';
import Products from '../components/Products/Products';
import ProductsSummary from '../components/Products/Productsummary';

export default class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
          users: []
      }
  }

  componentDidMount(){
    fetch('https://kekambas-bs.herokuapp.com/kekambas')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                users: data
            })
        }
    )
}
render() {
  return (
      <div>
          <h1 className='text-center'>Users</h1>
          <ul className='list-group'>
              {this.users}
          </ul>
      </div>
  )
}
};

