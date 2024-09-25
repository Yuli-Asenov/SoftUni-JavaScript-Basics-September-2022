function braceletStand(input) {
  let savedPocketMoney = Number(input[0]);
  let moneyPerDay = Number(input[1]);
  let expenses = Number(input[2]);
  let presentPrice = Number(input[3]);

  let totalPocketMoney = 5 * savedPocketMoney;
  let totalMoneyPerDay = 5 * moneyPerDay;
  let totalSavings = totalMoneyPerDay + totalPocketMoney;
  let total = totalSavings - expenses;

  if (total >= presentPrice) {
    console.log(`Profit: ${total.toFixed(2)} BGN, the gift has been purchased.`);
  } else if (total < presentPrice) {
    let costs = presentPrice - total;
    console.log(`Insufficient money: ${costs.toFixed(2)} BGN.`);
  }
}
braceletStand(["5.12", "32.05", "15", "150"]);
