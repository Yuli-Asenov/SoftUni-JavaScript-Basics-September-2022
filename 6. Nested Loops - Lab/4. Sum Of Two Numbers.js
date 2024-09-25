function sumOfTwoNumbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNumber = Number(input[2]);
  let cycleTurns = 0;
  let flag = false;

  for (let x = start; x <= end; x++) {
    for (let y = start; y <= end; y++) {
      let product = x + y;
      cycleTurns++;
      if (product == magicNumber) {
        flag = true;
        console.log(`Combination N:${cycleTurns} (${x} + ${y} = ${product})`);
        break;
      }
    }
    if (flag == true) {
      break;
    }
  }
  if (flag == false) {
    console.log(`${cycleTurns} combinations - neither equals ${magicNumber}`);
  }
}
sumOfTwoNumbers(["88", "888", "2000"]);
