function trekkingMania(input) {
  let index = 0;
  let groupNum = Number(input[index]);
  index++;

  let musalaGroup = 0;
  let monblanGroup = 0;
  let kilimanjaroGroup = 0;
  let k2Group = 0;
  let everestGroup = 0;
  let totalTourists = 0;

  for (let i = 0; i < groupNum; i++) {
    let tourists = Number(input[index]);
    totalTourists += tourists;
    index++;
    if (tourists <= 5) {
      musalaGroup += tourists;
    } else if (tourists <= 12) {
      monblanGroup += tourists;
    } else if (tourists <= 25) {
      kilimanjaroGroup += tourists;
    } else if (tourists <= 40) {
      k2Group += tourists;
    } else if (tourists >= 41) {
      everestGroup += tourists;
    }
  }
  let p1 = (musalaGroup / totalTourists) * 100;
  let p2 = (monblanGroup / totalTourists) * 100;
  let p3 = (kilimanjaroGroup / totalTourists) * 100;
  let p4 = (k2Group / totalTourists) * 100;
  let p5 = (everestGroup / totalTourists) * 100;
  console.log(p1.toFixed(2) + "%");
  console.log(p2.toFixed(2) + "%");
  console.log(p3.toFixed(2) + "%");
  console.log(p4.toFixed(2) + "%");
  console.log(p5.toFixed(2) + "%");
}
trekkingMania(["5", "25", "41", "31", "250", "6"]);
