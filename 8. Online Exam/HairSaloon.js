function hairSalon(input) {
  let targetMoneyForDay = Number(input[0]);
  let index = 1;
  let price = 0;
  let currentMoney = 0;

  while (true) {
    let shop = input[index];
    if (shop !== "closed") {
      let typeOfProcedure = input[index];
      index++;
      let haircutType = input[index];
      if (typeOfProcedure === "haircut") {
        if (haircutType === "ladies") {
          price = 20;
          currentMoney += price;
        } else if (haircutType === "kids") {
          price = 10;
          currentMoney += price;
        } else if (haircutType === "mens") {
          price = 15;
          currentMoney += price;
        }
      } else if (typeOfProcedure === "color") {
        if (haircutType === "touch up") {
          price = 20;
          currentMoney += price;
        } else if (haircutType === "full color") {
          price = 30;
          currentMoney += price;
        }
      }
      index++;
    }
    if (shop === "closed" || currentMoney >= targetMoneyForDay) {
      if (currentMoney >= targetMoneyForDay) {
        let profit = currentMoney - targetMoneyForDay;
        console.log(`You have reached your target for the day!`);
        console.log(`Earned money: ${currentMoney}lv.`);
        break;
      } else if (currentMoney < targetMoneyForDay) {
        let profit = targetMoneyForDay - currentMoney;
        console.log(`Target not reached! You need ${profit}lv. more.`);
        console.log(`Earned money: ${currentMoney}lv.`);
        break;
      }
    }
  }
}
hairSalon([
  "300",
  "haircut",
  "ladies",
  "haircut",
  "kids",
  "color",
  "touch up",
  "closed",
]);
//(["50","color","full color","haircut","ladies"]);
