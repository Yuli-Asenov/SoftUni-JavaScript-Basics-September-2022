function fishingBoat(input) {
  let groupBudget = Number(input[0]);
  let season = input[1];
  let numFishers = Number(input[2]);
  let boatRentPrice = 0;

  switch (season) {
    case "Spring":
      boatRentPrice = 3000;
      break;
    case "Summer":
      boatRentPrice = 4200;
      break;
    case "Autumn":
      boatRentPrice = 4200;
      break;
    case "Winter":
      boatRentPrice = 2600;
      break;
  }
  if (numFishers <= 6) {
    boatRentPrice = boatRentPrice * 0.9;
  } else if (numFishers <= 11) {
    boatRentPrice = boatRentPrice * 0.85;
  } else if (numFishers >= 12) {
    boatRentPrice = boatRentPrice * 0.75;
  }
  if (numFishers % 2 === 0 && season !== "Autumn") {
    boatRentPrice = boatRentPrice * 0.95;
  }
  if (groupBudget >= boatRentPrice) {
    console.log(
      `Yes! You have ${(groupBudget - boatRentPrice).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money! You need ${(boatRentPrice - groupBudget).toFixed(2)} leva.`
    );
  }
}
fishingBoat(["3600", "Autumn", "6"]);
