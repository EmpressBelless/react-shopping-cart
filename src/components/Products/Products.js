
import ProductsSummary from './Productsummary';
import AvailableProducts from './Productsavailable';
import { Fragment } from 'react';

const Products = () => {
  return (
    <Fragment>
    <ProductsSummary />
    <AvailableProducts />
    </Fragment>
  );
};

export default Products;