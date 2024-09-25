function lunchBreak(input) {
  let movie = input[0];
  let movieLength = Number(input[1]);
  let lunchBreak = Number(input[2]);

  let timeForLunch = (lunchBreak * 1) / 8;
  let timeForRest = (lunchBreak * 1) / 4;
  let timeLeft = lunchBreak - timeForLunch - timeForRest;
  let totalTime = Math.abs(movieLength - timeLeft);
  if (timeLeft >= movieLength) {
    console.log(
      `You have enough time to watch ${movie} and left with ${Math.ceil(
        totalTime
      )} minutes free time.`
    );
  } else if (timeLeft < movieLength) {
    console.log(
      `You don't have enough time to watch ${movie}, you need ${Math.ceil(
        totalTime
      )} more minutes.`
    );
  }
}
lunchBreak(["Game of Thrones", "60", "96"]);
