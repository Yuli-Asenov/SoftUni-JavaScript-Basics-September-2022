function fishtank(input) {
  let lengthcm = input[0];
  let widthcm = input[1];
  let heightcm = input[2];
  let percent = input[3];

  let volume = lengthcm * widthcm * heightcm;

  let liters = volume * 0.001;

  let reservedSpace = liters * (1 - 0.17);

  console.log(reservedSpace);
}
fishtank(["85", "75", "47", "17"]);
