function uncleStavri(input) {
  let daysCount = Number(input[0]);
  let totalDegrees = 0;
  let totalLiters = 0;
  let totalLitersAndDegrees = 0;
  let finalDegrees = 0;
  let currentLiters = 0;

  for (let index = 1; index < input.length; index++) {
    let currentLiters = Number(input[index]);
    totalLiters += currentLiters;
    index++;
    let currentDegrees = Number(input[index]);
    totalDegrees += currentDegrees;

    let degreesForLiterTotal = currentLiters * currentDegrees;

    totalLitersAndDegrees += degreesForLiterTotal;
    currentLiters = totalLiters + totalLiters;
    finalDegrees = totalLitersAndDegrees / totalLiters;
  }
  if (finalDegrees < 38) {
    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${finalDegrees.toFixed(2)}`);
    console.log(`Not good, you should baking!`);
  } else if (finalDegrees >= 38 && finalDegrees <= 42) {
    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${finalDegrees.toFixed(2)}`);
    console.log(`Super!`);
  } else if (finalDegrees > 42) {
    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${finalDegrees.toFixed(2)}`);
    console.log(`Dilution with distilled water!`);
  }
}
uncleStavri(["3", "100", "45", "50", "55", "150", "36"]);
