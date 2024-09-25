function oscars(input) {
  let actor = input[0];
  let academyPoints = Number(input[1]);
  let votersNum = Number(input[2]);
  let accumulatedPoints = 0;
  for (let i = 3; i < input.length; i++) {
    let votersName = input[i++];
    let votersScore = Number(input[i]);
    let votersNameLength = Number(votersName.length);
    accumulatedPoints = academyPoints + (votersNameLength * votersScore) / 2;
    academyPoints = accumulatedPoints;

    if (accumulatedPoints > 1250.5) {
      break;
    }
  }
  if (accumulatedPoints > 1250.5) {
    console.log(
      `Congratulations, ${actor} got a nominee for leading role with ${accumulatedPoints.toFixed(
        1
      )}!`
    );
  } else {
    console.log(
      `Sorry, ${actor} you need ${(1250.5 - accumulatedPoints).toFixed(1)} more!`
    );
  }
}
oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
