import { FC } from 'react';
import { IInfoDisplayProps } from './types';

const InfoDisplay: FC<IInfoDisplayProps> = ({ text, additionalClasses }) => {
  return (
    <div>
      <span className={additionalClasses}>{text}</span>
    </div>
  );
};

export default InfoDisplay;
