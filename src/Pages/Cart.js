const Cart = props => {
  const cartItems = (
  <ul> {[{id:'c1', name: 'Sushi', amount:2, price: 12.99}].map((item) => ( <li>{item.name}</li>))}
  </ul>
  );
  return (
    <div className="bg-dark text-white">
      <title>Cart Page</title>
      <ul>
      {cartItems}
      <div> 
        Total amount
      </div>
      <div>
        35.62
      </div>
      </ul>
    </div>
  )
};

export default Cart;