function skiTrip(input) {
  let days = Number(input[0]);
  let roomType = input[1];
  let review = input[2];

  if (roomType == "apartment") {
    if (days < 10) {
      nights = (days - 1) * 25;
      discount = nights * 0.7;
    } else if (days >= 10 && days <= 15) {
      nights = (days - 1) * 25;
      discount = nights * 0.65;
    } else if (days > 15) {
      nights = (days - 1) * 25;
      discount = nights * 0.5;
    }
  } else if (roomType == "president apartment") {
    if (days < 10) {
      nights = (days - 1) * 35;
      discount = nights * 0.9;
    } else if (days <= 15 && days >= 10) {
      nights = (days - 1) * 35;
      discount = nights * 0.85;
    } else if (days > 15) {
      nights = (days - 1) * 35;
      discount = nights * 0.8;
    }
  } else if (roomType == "room for one person") {
    if (days < 10) {
      nights = (days - 1) * 18;
      discount = nights * 1;
    } else if (days >= 10 && days <= 15) {
      nights = (days - 1) * 18;
      discount = nights * 1;
    } else if (days > 15) {
      nights = (days - 1) * 18;
      discount = nights * 1;
    }
  }
  if (review == "positive") {
    discount = discount * 1.25;
    console.log(discount.toFixed(2));
  } else if (review == "negative") {
    discount = discount * 0.9;
    console.log(discount.toFixed(2));
  }
}
skiTrip(["30", "president apartment", "negative"]);
