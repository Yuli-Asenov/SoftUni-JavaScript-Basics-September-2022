function greaterNumber(input) {
  let highNumber = Number(input[0]);
  let lowNumber = Number(input[1]);
  if (highNumber > lowNumber) {
    console.log(highNumber);
  } else {
    console.log(lowNumber);
  }
}
greaterNumber(["5", "3"]);
