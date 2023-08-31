import { FormEvent, useEffect, useRef, useState } from 'react';
import InfoDisplay from '../../features/info-display/index';
import UserInput from '../../features/user-input';
import classes from './panel.module.scss';
import { useAppDispatch, useAppSelector } from '../../entities/store/lib/hooks';
import {
  SET_MONEY,
  SET_SELECTED_PRODUCT,
  getInsertedMoney,
  getProducts,
} from '../../entities/store/slices/products';
import { store } from '../../entities/store';
import { calcChange } from './lib/helpers';

const ControlPanel = () => {
  const dispatch = useAppDispatch();
  const moneyDisplay = useRef(null);
  const insertedMoney = useAppSelector(getInsertedMoney);
  const products = Object.values(useAppSelector(getProducts));

  const [moneyInfo, setMoneyInfo] = useState('Insert money');

  const acceptedBanknotes = [50, 100, 200, 500];

  const handleMoneyInsert = (e: FormEvent) => {
    e.preventDefault();

    const money = Number(e.target.money.value);

    const checkInput = (sum: number) => acceptedBanknotes.includes(sum);

    if (!money || !checkInput(money)) {
      setMoneyInfo('Money not accepted');

      setTimeout(
        () =>
          setMoneyInfo(
            insertedMoney > 0
              ? `Inserted money: ${insertedMoney}`
              : 'Insert money'
          ),
        2000
      );

      return;
    }

    dispatch(SET_MONEY(money));

    const state = store.getState();
    const currentMoney = getInsertedMoney(state);

    setMoneyInfo(
      currentMoney > 0 ? `Inserted money: ${currentMoney}` : 'Insert money'
    );
  };

  const handleProductSelect = (e: FormEvent) => {
    e.preventDefault();

    const productNum = Number(e.target.product.value);

    console.log(productNum);

    const checkInput = (num: number) => num > 0 && num <= products.length;

    if (!productNum || !checkInput(productNum)) {
      console.log(products);

      return;
    }

    const state = store.getState();
    const currentMoney = getInsertedMoney(state);
    const selectedProduct = products[productNum - 1];

    const productPrice = selectedProduct.price;

    if (productPrice <= currentMoney) {
      dispatch(SET_SELECTED_PRODUCT(productNum));

      const change = calcChange(currentMoney, productPrice);

      console.log(change);
    } else {
      console.log('You do not have enough money for this product');
    }

    ///console.log('product select handler');
  };

  return (
    <section id="control-panel" className={classes.panel}>
      <InfoDisplay ref={moneyDisplay} text={moneyInfo} />
      <UserInput
        type="input"
        name="money"
        placeholder="..."
        handler={handleMoneyInsert}
      />
      <span className={classes.money_helper}>
        Available banknotes: 50, 100, 200 or 500 ₽. The machine gives change in
        1, 2, 5 and 10 ₽ coins.
      </span>
      <InfoDisplay text="/" />
      <UserInput
        type="input"
        name="product"
        placeholder="..."
        handler={handleProductSelect}
      />
      <div className={classes.footer}>
        <InfoDisplay />
        <InfoDisplay />
      </div>
    </section>
  );
};

export default ControlPanel;
