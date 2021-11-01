import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
       Welcome home
      </div>
    )
  }
}

//     constructor(props){
//       super(props);
//       this.state = {
//           users: []
//       }
//   }

//   componentDidMount(){
//     fetch('https://kekambas-bs.herokuapp.com/kekambas')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             this.setState({
//                 users: data
//             })
//         }
//     )
// }
// render() {
//   return (
//       <div>
//           <h1 className='text-center'>Users</h1>
//           <ul className='list-group'>
//               {this.users((users, idx) => <li key={idx} className='list-group-item'>{users.first_name} + {users.last_name}</li>)}
// //           </ul>
// //       </div>
//   )
// }
// };
//  \fetch('https://kekambas-bs.herokuapp.com/api/products');
//     .then(res => res.json());
//     .then((data) => {;
//       console.log(data);
