import { FC } from 'react';
import { IProductProps } from '@features/product/types';
import Product from '@features/product';
import classes from './kiosk.module.scss';

const ProductsKiosk: FC<IProductProps[]> = (products) => {
  return (
    <section id="kiosk" className={classes.kiosk}>
      {products &&
        Object.values(products).map((product, idx) => {
          return <Product key={`${product.name}${idx}`} {...product} />;
        })}
    </section>
  );
};

export default ProductsKiosk;
