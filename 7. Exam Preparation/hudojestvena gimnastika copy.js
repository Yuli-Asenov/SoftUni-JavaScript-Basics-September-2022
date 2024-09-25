function gimnastika(input) {
  let nationality = input[0];
  let sport = input[1];
  let difficulty = 0;
  let execution = 0;

  switch (nationality) {
    case "Bulgaria":
      if (sport === "ribbon") {
        difficulty = 9.6;
        execution = 9.4;
      } else if (sport === "hoop") {
        difficulty = 9.55;
        execution = 9.75;
      } else if (sport === "rope") {
        difficulty = 9.5;
        execution = 9.4;
      }
      break;
    case "Russia":
      if (sport === "ribbon") {
        difficulty = 9.1;
        execution = 9.4;
      } else if (sport === "hoop") {
        difficulty = 9.3;
        execution = 9.8;
      } else if (sport === "rope") {
        difficulty = 9.6;
        execution = 9.0;
      }
      break;
    case "Italy":
      if (sport === "ribbon") {
        difficulty = 9.2;
        execution = 9.5;
      } else if (sport === "hoop") {
        difficulty = 9.45;
        execution = 9.35;
      } else if (sport === "rope") {
        difficulty = 9.7;
        execution = 9.15;
      }
      break;
  }
  let score = difficulty + execution;
  let almostFinalScore = score - 20;
  let finalScore = Math.abs(almostFinalScore / 20) * 100;
  console.log(`The team of ${nationality} get ${score.toFixed(3)} on ${sport}.`);
  console.log(`${finalScore.toFixed(2)}%`);
}
gimnastika(["Bulgaria", "ribbon"]);
