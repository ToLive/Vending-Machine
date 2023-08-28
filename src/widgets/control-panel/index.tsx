import { FC } from 'react';
import InfoDisplay from '../../features/info-display/index';
import UserInput from '../../features/user-input';

const ControlPanel = () => {
  return (
    <div>
      <InfoDisplay />
      <UserInput type="input" placeholder="Insert money" />
      <InfoDisplay />
      <UserInput type="input" placeholder="/" />
      <InfoDisplay />
      <InfoDisplay />
    </div>
  );
};

export default ControlPanel;
