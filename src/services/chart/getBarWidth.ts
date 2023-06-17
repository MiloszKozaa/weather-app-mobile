export const getBarWidth = (barsAmount: number) => {
  let barPrecentageWidth = 100 / barsAmount - 2;

  return barPrecentageWidth;
};
