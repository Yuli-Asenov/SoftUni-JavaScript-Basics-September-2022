function vacation(input) {
  let moneyForVacation = Number(input[0]);
  let availableMoney = Number(input[1]);
  let spendDays = 0;
  let days = 0;

  for (let index = 2; index < input.length; index++) {
    let currentInput = input[index];
    index++;
    let money = Number(input[index]);

    days++;
    if (currentInput === "spend") {
      spendDays++;
      if (spendDays === 5) {
        console.log(`You can't save the money.`);
        console.log(`${days}`);
        break;
      }
      availableMoney = availableMoney - money;

      if (availableMoney < 0) {
        availableMoney = 0;
      }
    } else if (currentInput === "save") {
      spendDays = 0;
      availableMoney = availableMoney + money;
    }
  }
  if (availableMoney >= moneyForVacation) {
    console.log(`You saved the money for ${days} days.`);
  }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
