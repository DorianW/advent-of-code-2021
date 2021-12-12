export const getIncreasedMeasurement = (input: Array<number>): number => {

  return input.filter((element, index, array) => element > array[index - 1])
    .length;
};

export const getIncreasedMeasurementBlocks = (input: Array<number>): number => {
  return input.filter((element, index, array) => index <= array.length - 3 && array.slice(index, index +3).reduce((first, second) => first + second) < array.slice(index + 1, index +4).reduce((first, second) => first + second))
    .length;
};

