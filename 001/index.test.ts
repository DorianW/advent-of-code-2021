import { fileToArrayNumber } from "../utils/fileReader";
import path from "path";
import { getIncreasedMeasurement } from "./index";

test("fake test", () => {
  const myPath = path.join(__dirname, "./input.txt");
  const inputArray = fileToArrayNumber(myPath);
  const result = getIncreasedMeasurement(inputArray);
  expect(result).toBe(1559);
});
