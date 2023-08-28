import { FC } from 'react';
import { IProductProps } from '@features/product/types';
import Product from '@features/product';

const ProductsKiosk: FC<IProductProps[]> = (products) => {
  return (
    <div>
      {products &&
        Object.values(products).map((product, idx) => {
          return <Product key={`${product.name}${idx}`} {...product} />;
        })}
    </div>
  );
};

export default ProductsKiosk;
