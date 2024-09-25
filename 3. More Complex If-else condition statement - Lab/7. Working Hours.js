function workingHours(input) {
  let hours = Number(input[0]);
  let day = input[1];

  if (day == "Monday") {
    if (hours >= 10 && hours <= 18) {
      console.log("open");
    } else if (hours < 10 || hours > 18) {
      console.log("closed");
    }
  } else if (day == "Tuesday") {
    if (hours >= 10 && hours <= 18) {
      console.log("open");
    } else if (hours < 10 || hours > 18) {
      console.log("closed");
    }
  } else if (day == "Wednesday") {
    if (hours >= 10 && hours <= 18) {
      console.log("open");
    } else if (hours < 10 || hours > 18) {
      console.log("closed");
    }
  } else if (day == "Thursday") {
    if (hours >= 10 && hours <= 18) {
      console.log("open");
    } else if (hours < 10 || hours > 18) {
      console.log("closed");
    }
  } else if (day == "Friday") {
    if (hours >= 10 && hours <= 18) {
      console.log("open");
    } else if (hours < 10 || hours > 18) {
      console.log("closed");
    }
  } else if (day == "Saturday") {
    if (hours >= 10 && hours <= 18) {
      console.log("open");
    } else if (hours < 10 || hours > 18) {
      console.log("closed");
    }
  } else if (day == "Sunday") {
    console.log("closed");
  }
}
workingHours(["19", "Saturday"]);
