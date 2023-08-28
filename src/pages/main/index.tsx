import ProductsKiosk from '@widgets/products-kiosk';
import { sampleData } from '@widgets/products-kiosk/config/samples';
import ControlPanel from '@widgets/control-panel';
import * as classes from './main.module.scss';

const MainPage = () => {
  return (
    <div className={classes.vending}>
      <ProductsKiosk {...sampleData} />
      <ControlPanel />
    </div>
  );
};

export default MainPage;
