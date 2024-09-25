function newHouse(input) {
  let flowers = input[0];
  let flowersCount = Number(input[1]);
  let budget = Number(input[2]);

  let flowerPrice = 0;

  switch (flowers) {
    case "Roses":
      flowerPrice = flowersCount * 5;
      if (flowersCount > 80) {
        flowerPrice = flowerPrice * 0.9;
      }
      break;
    case "Dahlias":
      flowerPrice = flowersCount * 3.8;
      if (flowersCount > 90) {
        flowerPrice = flowerPrice * 0.85;
      }
      break;
    case "Tulips":
      flowerPrice = flowersCount * 2.8;
      if (flowersCount > 80) {
        flowerPrice = flowerPrice * 0.85;
      }
      break;
    case "Narcissus":
      flowerPrice = flowersCount * 3;
      if (flowersCount < 120) {
        flowerPrice = flowerPrice * 1.15;
      }
      break;
    case "Gladiolus":
      flowerPrice = flowersCount * 2.5;
      if (flowersCount < 80) {
        flowerPrice = flowerPrice * 1.2;
      }
      break;
    default:
      break;
  }
  if (budget >= flowerPrice) {
    console.log(
      `Hey, you have a great garden with ${flowersCount} ${flowers} and ${(
        budget - flowerPrice
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(flowerPrice - budget).toFixed(2)} leva more.`
    );
  }
}
newHouse(["Roses", "55", "250"]);
