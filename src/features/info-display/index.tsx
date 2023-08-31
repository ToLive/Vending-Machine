import { IInfoDisplayProps } from './types';
import classes from './infodisplay.module.scss';
import { FC, PropsWithChildren } from 'react';

const InfoDisplay: FC<IInfoDisplayProps & PropsWithChildren> = ({
  text,
  additionalClasses,
  onClick,
  children,
}) => {
  return (
    <div className={classes.display} onClick={onClick}>
      {children ? (
        children
      ) : (
        <span
          className={`${classes.text} ${additionalClasses}`}
          dangerouslySetInnerHTML={{ __html: text || '' }}
        ></span>
      )}
    </div>
  );
};

export default InfoDisplay;
