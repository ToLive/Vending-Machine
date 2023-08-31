interface IMoneyChange {
  [key: string | number]: number;
}

export const calcChange = (money: number, price: number): IMoneyChange => {
  const availiableChange = [10, 5, 2, 1];

  const change: IMoneyChange = availiableChange.reduce(
    (acc, val) => ({
      ...acc,
      [val]: Math.floor(acc.rest / val),
      rest: acc.rest % val,
    }),
    { rest: money - price }
  );

  delete change.rest;

  return change;
};
