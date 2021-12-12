import fs from "fs";

export const fileToArrayNumber = (path: string): Array<number> => {
  const fileCntent = fs.readFileSync(path).toString();
  return fileCntent.split(/\n/).map((x) => parseInt(x));
};

export const fileToArrayString = (path: string): Array<string> => {
  const fileCntent = fs.readFileSync(path).toString();
  return fileCntent.split(/\n/).map((x) => x);
};
