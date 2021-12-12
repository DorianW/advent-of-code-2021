import { fileToArrayNumber, fileToArrayString } from "./fileReader";
import path from "path";

test("fileToArrayNumber", () => {
  const myPath = path.join(__dirname, "./input.txt");
  const result = fileToArrayNumber(myPath);
  expect(result.length).toBe(2000);
});


test("fileToArrayString", () => {
  const myPath = path.join(__dirname, "./input.txt");
  const result = fileToArrayString(myPath);
  expect(result.length).toBe(2000);
});
