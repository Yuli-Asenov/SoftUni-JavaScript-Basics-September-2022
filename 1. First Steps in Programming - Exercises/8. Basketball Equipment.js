function basketballequip(input) {
  let anualTax = Number(input[0]);
  let shoes = anualTax * 0.6;
  let suit = shoes * 0.8;
  let ball = suit / 4; // or suit * 1/4;
  let accessories = ball / 5; // or ball * 1.5;

  let finalPrice = anualTax + shoes + suit + ball + accessories;

  console.log(finalPrice);
}
basketballequip(["365"]);
