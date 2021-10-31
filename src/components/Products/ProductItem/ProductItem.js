import ProductItemForum from './ProductItemForum';

const ProductItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return( 
  <li>
    <div>
      <h3>{props.name}</h3>
      <div>{props.description}</div>
      <div>{price}</div>
    </div>
    <div>
      <ProductItemForum />
    </div>
  </li>
  );
};

export default ProductItem;