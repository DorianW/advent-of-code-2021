import { fileToArrayNumber } from "../utils/fileReader";
import path from "path";
import { getIncreasedMeasurement, getIncreasedMeasurementBlocks } from "./index";

test("day 1 part 1 test", () => {
  const myPath = path.join(__dirname, "./input.txt");
  const inputArray = fileToArrayNumber(myPath);
  const result = getIncreasedMeasurement(inputArray);
  expect(result).toBe(1559);
});

test("day 1 part 2 test", () => {
  const myPath = path.join(__dirname, "./input.txt");
  const inputArray = fileToArrayNumber(myPath);
  const result = getIncreasedMeasurementBlocks(inputArray);
  expect(result).toBe(1600);
});