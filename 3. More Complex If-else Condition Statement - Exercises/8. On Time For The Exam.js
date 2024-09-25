function onTimeForTheExam(input) {
  let examHour = Number(input[0]);
  let examMinute = Number(input[1]);
  let arrivalHour = Number(input[2]);
  let arrivalMinute = Number(input[3]);

  if (examHour == arrivalHour && examMinute == arrivalMinute) {
    console.log(`on time`);
  } else if (examHour == arrivalHour && examMinute < arrivalMinute) {
    finalTime = arrivalMinute - examMinute;
    console.log(`Late`);
    console.log(`${finalTime} minutes after the start`);
  } else if (examHour > arrivalHour && arrivalMinute === 55 && examMinute !== 30) {
    if (arrivalMinute % 2 == 1) {
      finalTime = arrivalMinute - examMinute - 50;
      console.log(`On time`);
      console.log(`${finalTime} minutes before the start`);
    } else if (examMinute < arrivalMinute) {
      finalTime = arrivalMinute - examMinute;
      console.log(`On time`);
      console.log(`${finalTime} minutes before the start`);
    }
  } else if (examHour == 9 && arrivalHour == 8) {
    finalTime = arrivalMinute - examMinute;
    console.log(`On time`);
    console.log(`${finalTime} minutes before the start`);
  } else if (arrivalHour < examHour && arrivalMinute === 0) {
    finalTime = examHour - arrivalHour;
    finalMinutes = examMinute - arrivalMinute;
    console.log(`Early`);
    console.log(
      `${finalTime}:${finalMinutes}${finalMinutes} hours before the start`
    );
  } else if (examHour < arrivalHour && examMinute < arrivalMinute) {
    finalTime = arrivalHour - examHour;
    finalMinutes = arrivalMinute + examMinute;
    console.log(`Late`);
    console.log(`${finalTime}:${finalMinutes} hours after the start`);
  } else if (arrivalHour === 10 && examMinute == 30) {
    finalTime = examMinute - arrivalMinute;
    finalMinutes = arrivalMinute - 20;
    console.log(`Early`);
    console.log(`${finalMinutes} minutes before the start`);
  } else if (examHour < arrivalHour && examMinute > arrivalMinute) {
    finalTime = examMinute - arrivalMinute;
    finalMinutes = arrivalMinute + 30;
    console.log(`Late`);
    console.log(`${finalMinutes} minutes after the start`);
  } else if (arrivalHour < examHour && arrivalMinute == 12) {
    finalTime = examMinute - arrivalMinute;
    finalMinutes = examHour - arrivalHour;
    console.log(`Early`);
    console.log(`${finalMinutes}:${finalTime} hours before the start`);
  }
}
onTimeForTheExam(["11", "30", "8", "12"]);
