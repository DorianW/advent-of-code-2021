export const getIncreasedMeasurement = (input: Array<number>): number => {
  return input.filter((element, index, array) => element > array[index - 1])
    .length;
};
