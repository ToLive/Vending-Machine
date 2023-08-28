import { FC } from 'react';
import { IProductProps } from './types';

const Product: FC<IProductProps> = ({ name, type, price, orderNum }) => {
  return (
    <div>
      <span>{name}</span>
      <span>{type}</span>
      <span>{price}</span>
      <span>{orderNum}</span>
    </div>
  );
};

export default Product;
