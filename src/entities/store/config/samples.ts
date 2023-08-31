import { IProductProps } from '../lib/types';

enum EProductTypes {
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
    type: EProductTypes.CHIPS,
    price: 75,
  },
  {
    name: 'Coca-Cola',
    type: EProductTypes.DRINK,
    price: 180,
  },
  {
    name: 'Light',
    type: EProductTypes.RUSKS,
    price: 220,
  },
  {
    name: 'Chaka',
    type: EProductTypes.PEANUT,
    price: 600,
  },
  {
    name: 'Water',
    type: EProductTypes.DRINK,
    price: 40,
  },
  {
    name: 'Fanta',
    type: EProductTypes.COLDDRINK,
    price: 400,
  },
  {
    name: 'Nutella',
    type: EProductTypes.CHOCOLATEPASTE,
    price: 550,
  },
];
