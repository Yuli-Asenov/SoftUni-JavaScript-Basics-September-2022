function repainting(input) {
  let nylon = Number(input[0]);
  let paint = Number(input[1]);
  let thinner = Number(input[2]);
  let hours = Number(input[3]);

  let nylonFinalPrice = (nylon + 2) * 1.5;
  let paintFinalPrice = paint * 1.1 * 14.5;
  let thinnerFinalPrice = thinner * 5.0;
  let bags = 0.4;
  let finalPrice = nylonFinalPrice + paintFinalPrice + thinnerFinalPrice + bags;

  let workersCost = finalPrice * 0.3 * hours;
  let finalPriceAllHours = workersCost + finalPrice;

  //let sumPrice = (nylon + 2) * 1.50 + (paint * 1.1) * 14.50 +
  //thinner * 5.00 + 0.40;

  console.log(finalPriceAllHours);
}
repainting(["10", "11", "4", "8"]);
