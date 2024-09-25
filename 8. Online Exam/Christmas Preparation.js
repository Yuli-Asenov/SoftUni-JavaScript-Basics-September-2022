function christmasPreparation(input) {
  let numPackingPaper = Number(input[0]);
  let numCloth = Number(input[1]);
  let litersGlue = Number(input[2]);
  let procentDiscount = Number(input[3]);

  let packingPaper = 5.8;
  let cloth = 7.2;
  let glue = 1.2;

  let paperTotal = packingPaper * numPackingPaper;
  let clothTotal = cloth * numCloth;
  let glueTotal = glue * litersGlue;
  let discount = procentDiscount / 100;
  let totalCost = paperTotal + clothTotal + glueTotal;
  let totalDiscount = totalCost * discount;
  let totalCostFinal = totalCost - totalDiscount;
  console.log(totalCostFinal.toFixed(3));
}
christmasPreparation(["2", "3", "2.5", "25"]);
