function Literature(input) {
  let numberPages = Number(input[0]);
  let pagesHours = Number(input[1]);
  let numberDays = Number(input[2]);

  let totalTime = numberPages / pagesHours;
  let hoursPerDay = totalTime / numberDays;
  console.log(hoursPerDay);
}
Literature(["212", "20", "2"]);
