import { forwardRef } from 'react';
import { IInfoDisplayProps } from './types';
import classes from './infodisplay.module.scss';

const InfoDisplay = ({ text, additionalClasses }: IInfoDisplayProps, ref) => {
  return (
    <div ref={ref} className={classes.display}>
      <span className={`${classes.text} ${additionalClasses}`}>{text}</span>
    </div>
  );
};

export default forwardRef(InfoDisplay);
