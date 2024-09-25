function evenOrOdd(input) {
  let num = input[0];
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
evenOrOdd(["2"]);

function evenOrOdd(input) {
  let num = input[0];
  if (num % 2 == 0) {
    console.log("even");
  } else if (num % 2 == 1) {
    console.log("odd");
  }
}
evenOrOdd(["2"]);
