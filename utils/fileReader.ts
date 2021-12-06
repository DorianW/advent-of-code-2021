import fs from "fs";

export const fileToArrayNumber = (path: string): Array<number> => {
  const fileCntent = fs.readFileSync(path).toString();
  return fileCntent.split(/\n/).map((x) => parseInt(x));
};
