function invalidNumber(input) {
  let num = Number(input[0]);
  if (num >= 100 && num <= 200 && num % 2 == 0) {
    console.log();
  } else if ((num != 0 && num < 100) || num > 200) {
    console.log("invalid");
  }
}
invalidNumber(["0"]);
