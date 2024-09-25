function sumNumbers(input) {
  let num = Number(input[0]);
  let index = 1;
  let sumNumbers = 0;
  while (sumNumbers < num) {
    let currentNumber = Number(input[index]);
    sumNumbers = currentNumber + sumNumbers;
    index++;
  }
  console.log(sumNumbers);
}
sumNumbers(["100", "10", "20", "30", "40"]);
