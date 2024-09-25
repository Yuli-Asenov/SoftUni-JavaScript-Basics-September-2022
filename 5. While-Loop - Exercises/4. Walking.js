function walking(input) {
  let targetSteps = 10000;
  let stepsDone = 0;
  let index = 0;

  while (true) {
    let command = input[index];
    if (command !== "Going home") {
      currentSteps = Number(input[index]);
      index++;
      stepsDone += currentSteps;
      if (stepsDone >= targetSteps) {
        difference = stepsDone - targetSteps;
        console.log(`Goal reached! Good job!`);
        console.log(`${difference} steps over the goal!`);
        break;
      }
    }
    if (command === "Going home") {
      let stepsToHome = Number(input[index + 1]);
      stepsDone += stepsToHome;
      if (stepsDone >= targetSteps) {
        difference = stepsDone - targetSteps;
        console.log(`Goal reached! Good job!`);
        console.log(`${difference} steps over the goal!`);
        break;
      } else if (stepsDone < targetSteps) {
        difference = targetSteps - stepsDone;
        console.log(`${difference} more steps to reach goal.`);
        break;
      }
    }
  }
}
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
//(["1000","1500","2000","6500"]);
//(["1500","300","2500","3000","Going home","200"]);
//(["125","250","4000","30","2678","4682"]);
