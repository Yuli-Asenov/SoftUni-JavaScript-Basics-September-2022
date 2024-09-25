function hotelRoom(input) {
  let month = input[0];
  let nights = Number(input[1]);
  nightsStudio = 0;
  nightsApartment = 0;

  switch (month) {
    case "May":
    case "October":
      nightsStudio = nights * 65;
      nightsApartment = nights * 50;
      if (nights < 14 && nights > 7) {
        nightsStudio = nights * 65 * 0.95;
      } else if (nights > 14) {
        nightsStudio = nights * 50 * 0.7;
        nightsApartment = nights * 65 * 0.9;
      }
      break;
    case "June":
    case "September":
      nightsStudio = nights * 75.2;
      nightsApartment = nights * 68.7;
      if (nights > 14) {
        nightsStudio = nights * 75.2 * 0.8;
        nightsApartment = nights * 68.7 * 0.9;
      }
      break;
    case "July":
    case "August":
      nightsStudio = nights * 76;
      nightsApartment = nights * 77;
      if (nights > 14) {
        nightsApartment = nights * 77 * 0.9;
      }
      break;
    default:
      break;
  }
  console.log(`Apartment: ${nightsApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${nightsStudio.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);
