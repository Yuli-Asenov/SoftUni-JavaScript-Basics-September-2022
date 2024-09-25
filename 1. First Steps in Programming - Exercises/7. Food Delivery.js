function foodDelivery(input) {
  let chicken = Number(input[0]);
  let fish = Number(input[1]);
  let vegan = Number(input[2]);

  let finalChicken = chicken * 10.35;
  let finalFish = fish * 12.4;
  let finalVegan = vegan * 8.15;
  let allMenuPrice = finalChicken + finalFish + finalVegan;
  let desertPrice = allMenuPrice * 0.2;
  let finalPrice = desertPrice + allMenuPrice + 2.5;

  console.log(finalPrice);
}
foodDelivery(["2", "4", "3"]);
