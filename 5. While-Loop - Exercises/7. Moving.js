function moving(input) {
  let widthOfApartment = Number(input[0]);
  let lengthOfApartment = Number(input[1]);
  let heightOfApartment = Number(input[2]);
  let cubicMeters = widthOfApartment * heightOfApartment * lengthOfApartment;
  let index = 3;
  let totalSpace = 0;

  while (true) {
    let boxCounter = input[index];
    if (boxCounter !== "Done") {
      let currentBox = Number(input[index]);
      index++;
      let box = currentBox * 1;
      totalSpace += box;
      if (totalSpace > cubicMeters) {
        let cubicTotal = totalSpace - cubicMeters;
        console.log(`No more free space! You need ${cubicTotal} Cubic meters more.`);
        break;
      }
    }
    if (boxCounter === "Done") {
      if (totalSpace <= cubicMeters) {
        let cubicTotal = cubicMeters - totalSpace;
        console.log(`${cubicTotal} Cubic meters left.`);
        break;
      }
    }
  }
}
moving(["10", "1", "2", "4", "6", "Done"]);
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
