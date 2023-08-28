export enum EProductState {
  SELECTED,
  UNSELECTED,
  DISABLED,
}

export interface IProductProps {
  name: string;
  type: string;
  price: number;
  orderNum: number;
  state: EProductState;
}
