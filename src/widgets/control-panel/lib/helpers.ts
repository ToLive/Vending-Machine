export const calcChange = (money, price) => {
  const availiableChange = [10, 5, 2, 1];

  const change = availiableChange.reduce(
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
