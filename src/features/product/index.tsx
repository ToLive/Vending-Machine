import { FC } from 'react';
import { IProductProps } from './types';
import classes from './product.module.scss';

const Product: FC<IProductProps> = ({ name, type, price, orderNum }) => {
  return (
    <div className={classes.product}>
      <span className={classes.name}>{name}</span>
      <span className={classes.type}>{type}</span>
      <div className={classes.footer}>
        <span className={classes.price}>{price}&#8381;</span>
        <span className={classes.ordernum}>{orderNum}</span>
      </div>
    </div>
  );
};

export default Product;
