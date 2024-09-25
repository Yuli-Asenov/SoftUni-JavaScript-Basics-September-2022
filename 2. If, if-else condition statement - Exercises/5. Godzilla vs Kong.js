function Godzilla(input) {
  let budget = Number(input[0]);
  let people = Number(input[1]);
  let dress = Number(input[2]);

  let decor = budget * 0.1;
  let dressIndividual = people * dress;
  let finalPrice = dressIndividual + decor;
  let dressDiscount = dressIndividual * 0.1;
  if (people > 150) {
    finalPrice = finalPrice - dressDiscount;
  }
  let leftOver = Math.abs(budget - finalPrice);
  if (finalPrice <= budget) {
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${leftOver.toFixed(2)} leva left.`);
  } else if (finalPrice >= budget) {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${leftOver.toFixed(2)} leva more.`);
  }
}
Godzilla(["9587.88", "222", "55.68"]);
