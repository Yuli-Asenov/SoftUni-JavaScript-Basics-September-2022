function traveling(input) {
  let destination = input[0];
  let neededBudget = Number(input[1]);
  let money = 0;
  let index = 1;

  while (destination !== "End") {
    index++;

    while (money < neededBudget) {
      money += Number(input[index]);
      index++;
    }
    console.log(`Going to ${destination}!`);
    destination = input[index++];
    neededBudget = Number(input[index]);
    money = 0;
  }
}
traveling([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
