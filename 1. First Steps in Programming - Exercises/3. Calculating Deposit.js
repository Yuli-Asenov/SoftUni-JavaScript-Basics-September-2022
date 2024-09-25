function calculator(input) {
  let depositSum = Number(input[0]);
  let depositPeriod = Number(input[1]);
  let anualInterestRate = Number(input[2]);
  let finalSum =
    depositSum + depositPeriod * ((depositSum * anualInterestRate) / 100 / 12);
  console.log(finalSum);
}
calculator(["200", "3", "5.7"]);
