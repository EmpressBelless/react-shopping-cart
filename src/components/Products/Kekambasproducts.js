import React, { Component } from 'react';

export default class Kekambasproducts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        products : [],
    
      }
    }
    
    componentDidMount(){
      fetch('https://kekambas-bs.herokuapp.com/api/products')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.setState({
            products: data
          })
        }
        )
    }
    render() {
      return (
        <div>
          <h1 className="text-center">Bleh<h1>
            map({this.state.products})</li>
          </ul>
        </div>
      )
    }
  };
