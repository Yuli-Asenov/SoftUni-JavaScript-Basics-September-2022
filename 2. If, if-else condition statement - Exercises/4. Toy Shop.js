function toyShop(input) {
  let vacation = Number(input[0]);
  let puzzle = Number(input[1]);
  let talkingDoll = Number(input[2]);
  let plushBear = Number(input[3]);
  let minion = Number(input[4]);
  let truck = Number(input[5]);

  let toys = puzzle + talkingDoll + plushBear + minion + truck;
  let money =
    puzzle * 2.6 + talkingDoll * 3 + plushBear * 4.1 + minion * 8.2 + truck * 2;

  if (toys >= 50) {
    discount = money * 0.25;
  } else if (toys <= 50) {
    discount = 0;
  }
  finalPrice = money - discount;
  rent = finalPrice * 0.1;
  profit = finalPrice - rent;
  bonus = profit - vacation;
  toys = puzzle + plushBear + talkingDoll + minion + truck;
  let diff = Math.abs(profit - vacation);

  if (profit >= vacation) {
    console.log(`Yes! ${bonus.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
  }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
