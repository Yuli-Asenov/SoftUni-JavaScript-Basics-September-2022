function tennisRanklisr(input) {
  let tournamentsCount = Number(input[0]);
  let startingPoints = Number(input[1]);
  let wins = 0;
  let accumulatedPoints = startingPoints;
  for (let index = 2; index < input.length; index++) {
    let currentTournament = input[index];
    switch (currentTournament) {
      case "W":
        accumulatedPoints += 2000;
        wins++;
        break;
      case "F":
        accumulatedPoints += 1200;
        break;
      case "SF":
        accumulatedPoints += 720;
        break;
    }
  }
  let averagePoints = (accumulatedPoints - startingPoints) / tournamentsCount;
  console.log(`Final points: ${accumulatedPoints}`);
  console.log(`Average points: ${Math.floor(averagePoints)}`);
  console.log(`${((wins / tournamentsCount) * 100).toFixed(2)}%`);
}
tennisRanklisr(["5", "1400", "F", "SF", "W", "W", "SF"]);
