function hotelRoom(input) {
  let month = input[0];
  let nights = Number(input[1]);
  let nightsStudio = 0;
  let nightsApartment = 0;

  if (month == "May" || month == "October") {
    nightsStudio = nights * 50;
    nightsApartment = nights * 65;
    if (nights > 7 && nights <= 14) {
      nightsStudio = nights * 50 * 0.95;
    } else if (nights > 14) {
      nightsStudio = nights * 50 * 0.7;
      nightsApartment = nights * 65 * 0.9;
    }
  } else if (month == "June" || month == "September") {
    nightsStudio = nights * 75.2;
    nightsApartment = nights * 68.7;
    if (nights > 14) {
      nightsStudio = nights * 75.2 * 0.8;
      nightsApartment = nights * 68.7 * 0.9;
    }
  } else if (month == "July" || month == "August") {
    nightsStudio = nights * 76;
    nightsApartment = nights * 77;
    if (nights > 14) {
      nightsApartment = nights * 77 * 0.9;
    }
  }
  console.log(`Apartment: ${nightsApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${nightsStudio.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);
