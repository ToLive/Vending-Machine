import { IInfoDisplayProps } from './types';
import classes from './infodisplay.module.scss';

const InfoDisplay = ({ text, additionalClasses }: IInfoDisplayProps) => {
  return (
    <div className={classes.display}>
      <span className={`${classes.text} ${additionalClasses}`}>{text}</span>
    </div>
  );
};

export default InfoDisplay;
