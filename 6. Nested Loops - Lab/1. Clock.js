function clock(input) {
  for (let h = 0; h <= 23; h++) {
    for (let m = 0; m <= 59; m++) {
      if (h >= 10 && m >= 10) {
        console.log(`${h}:${m}`);
      } else if (h >= 10 && m < 10) {
        console.log(`${h}:0${m}`);
      } else if (h < 10 && m >= 10) {
        console.log(`0${h}:${m}`);
      } else if (h < 10 && m < 10) {
        console.log(`0${h}:0${m}`);
      }
    }
  }
}
clock();
