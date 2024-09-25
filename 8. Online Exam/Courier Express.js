function courierExpress(input) {
  let kgPacket = Number(input[0]);
  let typeDelivery = input[1];
  let distanceInKilometers = Number(input[2]);
  let pricePerKilometers = 0;
  let pricePerKilometer = 0;
  let price = 0;
  let expressCostage = 0;
  let finalExpressCost = 0;
  let finalExpressCosts = 0;

  if (typeDelivery === "standard") {
    if (kgPacket < 1) {
      pricePerKilometer = distanceInKilometers * 0.03;
    } else if (kgPacket >= 1 && kgPacket <= 10) {
      pricePerKilometer = distanceInKilometers * 0.05;
    } else if (kgPacket > 10 && kgPacket <= 40) {
      pricePerKilometer = distanceInKilometers * 0.1;
    } else if (kgPacket > 40 && kgPacket <= 90) {
      pricePerKilometer = distanceInKilometers * 0.15;
    } else if (kgPacket > 90 && kgPacket <= 150) {
      pricePerKilometer = distanceInKilometers * 0.2;
    }
  } else if (typeDelivery === "express") {
    price = 0.15;
    if (kgPacket < 1) {
      expressCostage = price * 0.8;
      finalExpressCost = expressCostage * kgPacket;
      pricePerKilometers = distanceInKilometers * price;
      finalExpressCosts = distanceInKilometers * finalExpressCost;
      pricePerKilometer = pricePerKilometers + finalExpressCosts;
    } else if (kgPacket >= 1 && kgPacket <= 10) {
      expressCostage = price * 0.4;
      finalExpressCost = expressCostage * kgPacket;
      pricePerKilometers = distanceInKilometers * price;
      finalExpressCosts = distanceInKilometers * finalExpressCost;
      pricePerKilometer = pricePerKilometers + finalExpressCosts;
    } else if (kgPacket > 10 && kgPacket <= 40) {
      expressCostage = price * 0.05;
      finalExpressCost = expressCostage * kgPacket;
      pricePerKilometers = distanceInKilometers * price;
      finalExpressCosts = distanceInKilometers * finalExpressCost;
      pricePerKilometer = pricePerKilometers + finalExpressCosts;
    } else if (kgPacket > 40 && kgPacket <= 90) {
      expressCostage = price * 0.02;
      finalExpressCost = expressCostage * kgPacket;
      pricePerKilometers = distanceInKilometers * price;
      finalExpressCosts = distanceInKilometers * finalExpressCost;
      pricePerKilometer = pricePerKilometers + finalExpressCosts;
    } else if (kgPacket > 90 && kgPacket <= 150) {
      expressCostage = price * 0.01;
      finalExpressCost = expressCostage * kgPacket;
      pricePerKilometers = distanceInKilometers * price;
      finalExpressCosts = distanceInKilometers * finalExpressCost;
      pricePerKilometer = pricePerKilometers + finalExpressCosts;
    }
  }
  console.log(
    `The delivery of your shipment with weight of ${kgPacket.toFixed(
      3
    )} kg. would cost ${pricePerKilometer.toFixed(2)} lv.`
  );
}
courierExpress(["87", "express", "130"]);
//(["1.5","standard","100"]);
//(["87","express","130"]);
