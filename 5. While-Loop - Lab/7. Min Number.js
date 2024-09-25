function minNumber(input) {
  let index = 0;
  let command = input[index];
  let minNum = command;
  Math.max;
  while (command !== "Stop") {
    let value = Number(command);
    minNum = Number(minNum);
    if (value < minNum) {
      minNum = value;
    }
    index++;
    command = input[index];
  }
  console.log(minNum);
}
minNumber(["100", "99", "80", "70", "Stop"]);
