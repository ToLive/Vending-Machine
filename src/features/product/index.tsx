import { FC } from 'react';
import classes from './product.module.scss';
import { IProductProps } from '../../entities/store/lib/types';

const Product: FC<IProductProps> = ({
  name,
  type,
  price,
  idx,
  isActive,
  isSelected,
}) => {
  return (
    <div
      className={`${classes.product} ${isActive ? classes.active : ''} ${
        isSelected ? classes.live : ''
      }`}
    >
      <span className={classes.name}>{name}</span>
      <span className={classes.type}>{type}</span>
      <div className={classes.footer}>
        <span className={classes.price}>{price}&#8381;</span>
        <span className={classes.ordernum}>{idx}</span>
      </div>
    </div>
  );
};

export default Product;
