import { FormEvent, useEffect, useState } from 'react';
import InfoDisplay from '../../features/info-display/index';
import UserInput from '../../features/user-input';
import classes from './panel.module.scss';
import { useAppDispatch, useAppSelector } from '../../entities/store/lib/hooks';
import {
  REVERT_ALL,
  SET_MONEY,
  SET_PRODUCTS,
  SET_SELECTED_PRODUCT,
  getInsertedMoney,
  getProducts,
} from '../../entities/store/slices/products';
import { store } from '../../entities/store';
import { calcChange } from './lib/helpers';
import { IProductProps } from '../../entities/store/lib/types';
import Product from '../../features/product';
import { IChangeType } from './types';

const defaultTexts = {
  moneyInfo: 'Insert money',
  productInfo: '/',
};

const acceptedBanknotes = [50, 100, 200, 500];
const DISPLAY_TIMEOUT = 2000;

const ControlPanel = () => {
  const dispatch = useAppDispatch();
  const insertedMoney = useAppSelector(getInsertedMoney);
  const products = Object.values(useAppSelector(getProducts));
  const [selectedProduct, setSelectedProduct] = useState<IProductProps>();
  const [change, setChange] = useState<IChangeType>({});

  const [moneyInfo, setMoneyInfo] = useState(defaultTexts.moneyInfo);
  const [productInfo, setProductInfo] = useState(defaultTexts.productInfo);

  useEffect(() => {
    if (insertedMoney === 0) {
      dispatch(SET_PRODUCTS([]));
      dispatch(SET_SELECTED_PRODUCT(0));

      setMoneyInfo(defaultTexts.moneyInfo);
      setProductInfo(defaultTexts.productInfo);
      setSelectedProduct(undefined);
      setChange({});
    }
  }, [insertedMoney]);

  const changeToText = () => {
    return Object.entries(change)
      .reverse()
      .reduce((acc, [key, value]) => {
        if (value > 0) {
          acc += `${key} ₽: ${value} ${value === 1 ? 'coin' : 'coins'}<br/>`;
        }

        return acc;
      }, '');
  };

  const handleMoneyInsert = (e: FormEvent) => {
    e.preventDefault();

    const money = Number((e.target as HTMLFormElement).money.value);

    const checkInput = (sum: number) => acceptedBanknotes.includes(sum);

    if (!checkInput(money)) {
      setMoneyInfo('Money not accepted');

      setTimeout(
        () =>
          setMoneyInfo(
            insertedMoney > 0
              ? `Inserted money: ${insertedMoney}`
              : defaultTexts.moneyInfo
          ),
        DISPLAY_TIMEOUT
      );

      return;
    }

    dispatch(SET_MONEY(money));

    const currentMoney = getInsertedMoney(store.getState());

    setMoneyInfo(
      currentMoney > 0
        ? `Inserted money: ${currentMoney}`
        : defaultTexts.moneyInfo
    );

    setProductInfo('Choose product');
  };

  const handleProductSelect = (e: FormEvent) => {
    e.preventDefault();

    const productNum = Number((e.target as HTMLFormElement).product.value);

    const checkInput = (num: number) => num > 0 && num <= products.length;

    if (!checkInput(productNum)) {
      setProductInfo('Enter correct product!');

      setTimeout(
        () => setProductInfo(defaultTexts.productInfo),
        DISPLAY_TIMEOUT
      );

      return;
    }

    const currentMoney = getInsertedMoney(store.getState());
    const product = products[productNum - 1];

    if (product) {
      const productPrice = product.price;

      if (productPrice <= currentMoney) {
        dispatch(SET_SELECTED_PRODUCT(productNum - 1));
        setSelectedProduct({ ...product, isSelected: true });

        setProductInfo('Success');

        setChange(calcChange(currentMoney, productPrice));
      }
    }
  };

  return (
    <section id="control-panel" className={classes.panel}>
      <InfoDisplay text={moneyInfo} />
      <UserInput
        type="input"
        name="money"
        disabled={selectedProduct ? true : false}
        placeholder="..."
        handler={handleMoneyInsert}
      />
      <span className={classes.money_helper}>
        Available banknotes: 50, 100, 200 or 500 ₽. The machine gives change in
        1, 2, 5 and 10 ₽ coins.
      </span>
      <InfoDisplay text={productInfo} />
      <UserInput
        type="input"
        name="product"
        placeholder="..."
        disabled={selectedProduct ? true : false}
        handler={handleProductSelect}
      />
      <div className={classes.footer}>
        <InfoDisplay text={change ? changeToText() : ''} />
        <InfoDisplay onClick={() => dispatch(REVERT_ALL())}>
          {selectedProduct && <Product {...selectedProduct} />}
        </InfoDisplay>
      </div>
    </section>
  );
};

export default ControlPanel;
