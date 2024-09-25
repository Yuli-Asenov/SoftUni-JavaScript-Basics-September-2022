function cinemaTicket(input) {
  let day = input[0];
  let price = 1;

  if (day == "Monday") {
    console.log(price * 12);
  } else if (day == "Tuesday") {
    console.log(price * 12);
  } else if (day == "Wednesday") {
    console.log(price * 14);
  } else if (day == "Thursday") {
    console.log(price * 14);
  } else if (day == "Friday") {
    console.log(price * 12);
  } else if (day == "Saturday") {
    console.log(price * 16);
  } else if (day == "Sunday") {
    console.log(price * 16);
  }
}
cinemaTicket(["Sunday"]);
