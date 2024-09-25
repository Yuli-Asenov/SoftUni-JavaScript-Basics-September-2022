function bonusPoints(input) {
  let Points = Number(input[0]);
  let Bonus = 0.0;
  if (Points <= 100) {
    Bonus = 5;
  } else if (Points > 1000) {
    Bonus = Points * 0.1;
  } else {
    Bonus = Points * 0.2;
  }

  if (Points % 2 === 0) {
    Bonus = Bonus + 1;
  } else if (Points % 10 === 5) {
    Bonus = Bonus + 2;
  }
  console.log(Bonus);
  console.log(Points + Bonus);
}
bonusPoints(["2703"]);
