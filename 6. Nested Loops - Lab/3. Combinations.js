function Combinations(input) {
  let validNumber = Number(input[0]);
  let currentCombination = 0;
  let validCombinations = 0;
  for (let x = 0; x <= validNumber; x++) {
    for (let y = 0; y <= validNumber; y++) {
      for (let z = 0; z <= validNumber; z++) {
        let currentCombination = x + y + z;
        if (currentCombination === validNumber) {
          validCombinations++;
        }
      }
    }
  }
  console.log(validCombinations);
}
Combinations(["5"]);
