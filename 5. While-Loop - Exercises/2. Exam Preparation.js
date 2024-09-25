function examPreparation(input) {
  let allowedLowGrades = Number(input[0]);
  let numGoodGrades = 0;
  let numBadGrades = 0;
  let avgGrade = 0;
  let lastProblemName = "";
  let currentGrade = 0;
  let numProblems = 0;
  let finalGrade = 0;
  let numGrades = 0;

  for (let index = 1; index < input.length; index++) {
    let problemName = input[index];
    index++;
    let grade = Number(input[index]);
    if (problemName !== "Enough") {
      if (grade <= 4) {
        numBadGrades++;
        numProblems++;
        numGrades++;
        lastProblemName = problemName;
        currentGrade = Number(input[index]);
        finalGrade += currentGrade;
        if (numBadGrades >= allowedLowGrades) {
          console.log(`You need a break, ${numBadGrades} poor grades.`);
          break;
        }
      } else if (grade > 4) {
        numGoodGrades++;
        numProblems++;
        numGrades++;
        currentGrade = Number(input[index]);
        finalGrade += currentGrade;
        lastProblemName = problemName;
      }
    } else if (problemName === "Enough") {
      avgGrade = finalGrade / numProblems;
      console.log(`Average score: ${avgGrade.toFixed(2)}`);
      console.log(`Number of problems: ${numProblems}`);
      console.log(`Last problem: ${lastProblemName}`);
    }
  }
}
examPreparation(["4", "Stone Age", "5", "Freedom", "5", "Storage", "3", "Enough"]);
examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
