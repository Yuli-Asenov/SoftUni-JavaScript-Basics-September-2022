function swimRecord(input) {
  let recordSec = Number(input[0]);
  let distanceMeters = Number(input[1]);
  let timeInSec1m = Number(input[2]);

  let sumSec = distanceMeters * timeInSec1m;
  let addUpSec = Math.floor(distanceMeters / 15) * 12.5;
  let finalSec = sumSec + addUpSec;
  let timeNeeded = Math.abs(finalSec - recordSec);
  if (recordSec <= finalSec) {
    console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
  } else if (recordSec >= finalSec) {
    console.log(
      `Yes, he succeeded! The new world record is ${finalSec.toFixed(2)} seconds.`
    );
  }
}
swimRecord(["55555.67", "3017", "5.03"]);
