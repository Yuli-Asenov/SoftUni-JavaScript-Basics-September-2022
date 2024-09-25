function petshop(input) {
  let dogfood = Number(input[0]);
  let catfood = Number(input[1]);

  let dogpackets = dogfood * 2.5;
  let catpackets = catfood * 4;

  let price = dogpackets + catpackets;

  console.log(`${price} lv`);
}
petshop(["5", "4"]);
