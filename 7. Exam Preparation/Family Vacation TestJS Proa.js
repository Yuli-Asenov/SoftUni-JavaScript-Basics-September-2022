function pregovor(input) {
  let budget = Number(input[0]);
  let numNights = Number(input[1]);
  let priceForNight = Number(input[2]);
  let expensesCosts = Number(input[3]);
  let discount = 0;

  if (numNights > 7) {
    discount = priceForNight * 0.05;
  }
  let discountPrice = priceForNight - discount;

  let priceForAllNights = numNights * discountPrice;
  let finalExpensesCosts = budget * (expensesCosts / 100);
  let total = priceForAllNights + finalExpensesCosts;

  if (budget >= total) {
    let leftOver = budget - total;
    console.log(
      `Ivanovi will be left with ${leftOver.toFixed(2)} leva after vacation.`
    );
  } else {
    let suma = total - budget;
    console.log(`${suma.toFixed(2)} leva needed.`);
  }
}
pregovor(["500", "7", "66", "15"]);
//(["800.50","8","100","2"]);
