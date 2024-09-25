function accountBalance(input) {
  let money = Number(input[0]);
  let balance = 0;
  let index = 1;
  while (money !== "NoMoreMoney") {
    let amount = Number(money);
    if (amount < 0) {
      console.log("Invalid operation!");
      break;
    }
    balance += amount;
    console.log(`Increase: ${amount.toFixed(2)}`);
    money = input[index];
    index++;
  }
  console.log(`Total: ${balance.toFixed(2)}`);
}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
