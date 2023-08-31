import { FormEventHandler } from 'react';

export interface IUserInput {
  type: string;
  placeholder: string;
  handler?: FormEventHandler<HTMLFormElement>;
  name: string;
}
