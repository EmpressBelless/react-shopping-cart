
import ProductItem from './ProductItem/ProductItem';


const DUMMY_ITEMS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Hotdish',
    description: 'A minnesotan catch-all',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
const AvailableProducts = () => {
  const productsList = DUMMY_ITEMS.map((product) => (
  <ProductItem 
  key={product.id}
  name={product.name} 
  description={product.description} 
  price={product.price}
  />
  ));
  
  return ( 
    <section>
        <ul>{productsList}</ul>
    </section>
  );
};
  // Passing a function to map. For every product we want to return a JSX element which represents the product. 

// fetch('https://kekambas-bs.herokuapp.com/')
//     .then(res => res.json())
//     .then((data) => {
//       console.log(data);    
//  });


export default AvailableProducts;