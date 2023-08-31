import ProductsKiosk from '@widgets/products-kiosk';
import ControlPanel from '@widgets/control-panel';
import classes from './main.module.scss';

const MainPage = () => {
  return (
    <div className={classes.vending}>
      <ProductsKiosk />
      <ControlPanel />
    </div>
  );
};

export default MainPage;
