function studyMaterials(input) {
  let penPackets = Number(input[0]);
  let markerPackets = Number(input[1]);
  let deskCleaner = Number(input[2]);
  let discount = Number(input[3]);

  let penPacketsFinalPrice = penPackets * 5.8;
  let markerPacketsFinalPrice = markerPackets * 7.2;
  let deskCleanerFinalPrice = deskCleaner * 1.2;
  let finalPrice =
    penPacketsFinalPrice + markerPacketsFinalPrice + deskCleanerFinalPrice;

  let priceAfterDiscount = finalPrice - (finalPrice * discount) / 100;

  //let neededMoney = penPackets * 5.80 + markerPackets * 7.20 +
  //deskCleaner * 1.20; - works aswell.

  console.log(priceAfterDiscount);
}
studyMaterials(["2", "3", "4", "25"]);
