interface Position {
  x: number,
  y: number
}

export const getPosition = (input: Array<string>): Position => {
  const forward = input.filter(command => command.indexOf("forward") != -1).map(command => command.split(" ")[1]).map(number => parseInt(number)).reduce((a,b) => a + b);
  const up = input.filter(command => command.indexOf("up") != -1).map(command => command.split(" ")[1]).map(number => parseInt(number)).reduce((a,b) => a + b);
  const down = input.filter(command => command.indexOf("down") != -1).map(command => command.split(" ")[1]).map(number => parseInt(number)).reduce((a,b) => a + b);

  return {x: forward,y: down - up}
};

