import { EProductState, IProductProps } from '../../../features/product/types';

enum productTypes {
  CHIPS = 'Chips',
  DRINK = 'Drink',
  RUSKS = 'Rusks',
  PEANUT = 'Peanut',
  COLDDRINK = 'Cold drink',
  CHOCOLATEPASTE = 'Chocolate paste',
}

export const sampleData: IProductProps[] = [
  {
    name: "Lay's",
    type: productTypes.CHIPS,
    price: 75,
    orderNum: 1,
    state: EProductState.UNSELECTED,
  },
  {
    name: "Lay's",
    type: productTypes.CHIPS,
    price: 75,
    orderNum: 2,
    state: EProductState.UNSELECTED,
  },
  {
    name: "Lay's",
    type: productTypes.CHIPS,
    price: 75,
    orderNum: 3,
    state: EProductState.UNSELECTED,
  },
];
