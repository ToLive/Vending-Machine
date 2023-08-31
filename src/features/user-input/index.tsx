import { FC } from 'react';
import { IUserInput } from './types';
import classes from './userinput.module.scss';

const UserInput: FC<IUserInput> = (props) => {
  return (
    <form onSubmit={props.handler}>
      <input
        type={props.type}
        name={props.name}
        className={classes.userinput}
        placeholder={props.placeholder}
      ></input>
    </form>
  );
};

export default UserInput;
