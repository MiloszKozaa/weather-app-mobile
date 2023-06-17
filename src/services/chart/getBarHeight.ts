export const getBarHeight = (
  minValue: number,
  maxValue: number,
  value: number,
) => {

  const minPrecentageHeight = 25

  if (minValue >= value) return minPrecentageHeight;
  if (maxValue <= value) return 100;
  let precentageHeight = 0.0;

  const graphHeight = maxValue - minValue;

  const valueHeight = value - minValue;

  precentageHeight = Math.round((valueHeight / graphHeight) * 100);

  if (precentageHeight <= minPrecentageHeight) return minPrecentageHeight;

  return precentageHeight;
};
