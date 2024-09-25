function vacation(input) {
  let moneyForVacation = Number(input[0]);
  let availableMoney = Number(input[1]);
  let spendDays = 0;
  let days = 0;
  let index = 2;
  let currentInput = input[index];

  while (availableMoney < moneyForVacation) {
    days++;
    if (currentInput === "spend") {
      spendDays++;
      if (spendDays === 5) {
        console.log(`You can't save the money.`);
        console.log(`${days}`);
        break;
      }
      index++;
      let moneyToSpend = Number(input[index]);
      availableMoney = availableMoney - moneyToSpend;

      if (availableMoney < 0) {
        availableMoney = 0;
      }
    } else if (currentInput === "save") {
      spendDays = 0;
      index++;
      let moneyToSave = Number(input[index]);
      availableMoney = availableMoney + moneyToSave;
    }
    index++;
    currentInput = input[index];
  }
  if (availableMoney >= moneyForVacation) {
    console.log(`You saved the money for ${days} days.`);
  }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
