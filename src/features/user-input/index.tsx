import { FC } from 'react';
import { IUserInput } from './types';
import classes from './userinput.module.scss';

const UserInput: FC<IUserInput> = () => {
  return (
    <input type="" className={classes.userinput} placeholder="..."></input>
  );
};

export default UserInput;
