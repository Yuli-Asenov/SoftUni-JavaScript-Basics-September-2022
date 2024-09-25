function sequence2k(input) {
  let num = Number(input[0]);
  let multiplier = 1;
  let current = 1;
  while (current <= num) {
    console.log(current);
    current = current * 2 + multiplier;
  }
}
sequence2k(["3"]);
