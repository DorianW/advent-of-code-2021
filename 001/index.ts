export const getIncreasedMeasurement = (input: Array<number>): number => {

  return input.filter((element, index, array) => element > array[index - 1])
    .length;
};

export const getIncreasedMeasurementBlocks = (input: Array<number>): number => {
  let counter = 0;
  let match = 0;
  while (counter <= input.length -3) {
    const blockA = input.slice(counter, counter +3).reduce((a,b) => a + b);
    const blockB = input.slice(counter +1, counter +4).reduce((a,b) => a + b);
    if (blockB > blockA ) match++
    counter++;
  }
  return match;
  return input.filter((element, index, array) => index <= array.length - 3 && array.slice(index, index +3).reduce((first, second) => first + second) > array.slice(index + 1, index +4).reduce((first, second) => first + second))
    .length;
};

