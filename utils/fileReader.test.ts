import { fileToArrayNumber } from "./fileReader";
import path from "path";

test("fake test", () => {
  const myPath = path.join(__dirname, "./input.txt");
  const result = fileToArrayNumber(myPath);
  expect(result.length).toBe(2000);
});
