function maxNumber(input) {
  let index = 0;
  let command = input[index];
  let maxNum = command;

  while (command !== "Stop") {
    let value = Number(command);
    maxNum = Number(maxNum);
    if (value > maxNum) {
      maxNum = value;
    }
    index++;
    command = input[index];
  }
  console.log(maxNum);
}
maxNumber(["100", "99", "80", "70", "Stop"]);
