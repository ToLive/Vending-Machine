import InfoDisplay from '../../features/info-display/index';
import UserInput from '../../features/user-input';
import classes from './panel.module.scss';

const ControlPanel = () => {
  return (
    <section id="control-panel" className={classes.panel}>
      <InfoDisplay text="Insert money" />
      <UserInput type="input" placeholder="..." />
      <span className={classes.money_helper}>
        Available banknotes: 50, 100, 200 or 500 ₽. The machine gives change in
        1, 2, 5 and 10 ₽ coins.
      </span>
      <InfoDisplay text="/" />
      <UserInput type="input" placeholder="..." />
      <div className={classes.footer}>
        <InfoDisplay />
        <InfoDisplay />
      </div>
    </section>
  );
};

export default ControlPanel;
