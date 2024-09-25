function cinema(input) {
  let movieType = input[0];
  let rowR = Number(input[1]);
  let columnC = Number(input[2]);

  let income = 0;

  if (movieType == "Premiere") {
    income = rowR * columnC * 12;
  } else if (movieType == "Normal") {
    income = rowR * columnC * 7.5;
  } else if (movieType == "Discount") {
    income = rowR * columnC * 5.0;
  }
  console.log(income.toFixed(2));
}
cinema(["Discount", "12", "30"]);
