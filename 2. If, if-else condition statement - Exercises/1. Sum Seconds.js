function SumSeconds(input) {
  let firstTime = Number(input[0]);
  let secondTime = Number(input[1]);
  let thirdTime = Number(input[2]);

  let totalTimeInSec = firstTime + secondTime + thirdTime;

  let totalTimeInMin = Math.floor(totalTimeInSec / 60);

  let finalTimeInSec = totalTimeInSec % 60;

  if (finalTimeInSec < 10) {
    console.log(`${totalTimeInMin}:0${finalTimeInSec}`);
    //---
    console.log(totalTimeInMin + ":" + "0" + finalTimeInSec);
  } else {
    console.log(`${totalTimeInMin}:${finalTimeInSec}`);
  }
}
SumSeconds(["35", "45", "44"]);
