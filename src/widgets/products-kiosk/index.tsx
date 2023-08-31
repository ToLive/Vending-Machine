import { FC, useEffect } from 'react';
import Product from '@features/product';
import classes from './kiosk.module.scss';
import { useAppDispatch, useAppSelector } from '../../entities/store/lib/hooks';
import {
  SET_PRODUCTS,
  getInsertedMoney,
  getProducts,
} from '../../entities/store/slices/products';

const ProductsKiosk: FC = () => {
  const dispatch = useAppDispatch();
  const insertedMoney = useAppSelector(getInsertedMoney);
  const products = Object.values(useAppSelector(getProducts));

  useEffect(() => {
    dispatch(SET_PRODUCTS([]));
  }, []);

  useEffect(() => {
    const newProducts = products.map((item) =>
      item.price <= insertedMoney ? { ...item, isActive: true } : item
    );

    dispatch(SET_PRODUCTS(newProducts));
  }, [insertedMoney]);

  return (
    <section id="kiosk" className={classes.kiosk}>
      {products &&
        products.map((product, idx) => {
          return (
            <Product key={`${product.name}${idx}`} {...product} idx={idx + 1} />
          );
        })}
    </section>
  );
};

export default ProductsKiosk;
