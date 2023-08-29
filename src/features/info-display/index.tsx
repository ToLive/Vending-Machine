import { FC } from 'react';
import { IInfoDisplayProps } from './types';
import classes from './infodisplay.module.scss';

const InfoDisplay: FC<IInfoDisplayProps> = ({ text, additionalClasses }) => {
  return (
    <div className={classes.display}>
      <span className={`${classes.text} ${additionalClasses}`}>{text}</span>
    </div>
  );
};

export default InfoDisplay;
