function shopping(input) {
  let budget = Number(input[0]);
  let gpu = Number(input[1]);
  let cpu = Number(input[2]);
  let ram = Number(input[3]);

  let gpuPrice = gpu * 250;
  let cpuPrice = gpuPrice * 0.35 * cpu;
  let ramPrice = gpuPrice * 0.1 * ram;
  let priceNeeded = gpuPrice + cpuPrice + ramPrice;
  let discount = priceNeeded * 0.15;
  let finalPriceNeeded = priceNeeded - discount;
  let diff = Math.abs(budget - finalPriceNeeded);
  if (finalPriceNeeded <= budget) {
    console.log(`You have ${diff.toFixed(2)} leva left!`);
  } else if (finalPriceNeeded > budget) {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
  }
}
shopping(["920.45", "3", "1", "1"]);
