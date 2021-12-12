import { fileToArrayString } from "../utils/fileReader";
import path from "path";
import { getPosition } from "./index";

test("day 2 part 1 test", () => {
  const myPath = path.join(__dirname, "./input.txt");
  const inputArray = fileToArrayString(myPath);
  const result = getPosition(inputArray);
  expect(result).toEqual({"x": 1850, "y": 927});
  expect(result.x * result.y).toBe(1714950);
});