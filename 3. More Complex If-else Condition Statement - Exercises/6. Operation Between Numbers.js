function operationBetweenNumbers(input) {
  let N1 = Number(input[0]);
  let N2 = Number(input[1]);
  let operator = input[2];

  if (operator == "+") {
    let sum = N1 + N2;
    if (sum % 2 == 0) {
      console.log(`${N1} ${operator} ${N2} = ${sum} - even`);
    } else {
      console.log(`${N1} ${operator} ${N2} = ${sum} - odd`);
    }
  } else if (operator == "-") {
    let sum = N1 - N2;
    if (sum % 2 == 0) {
      console.log(`${N1} ${operator} ${N2} = ${sum} - even`);
    } else {
      console.log(`${N1} ${operator} ${N2} = ${sum} - odd`);
    }
  } else if (operator == "*") {
    let sum = N1 * N2;
    if (sum % 2 == 0) {
      console.log(`${N1} ${operator} ${N2} = ${sum} - even`);
    } else {
      console.log(`${N1} ${operator} ${N2} = ${sum} - odd`);
    }
  } else if (operator == "/") {
    let sum = N1 / N2;
    if (N2 === 0) {
      console.log(`Cannot divide ${N1} by zero`);
    } else {
      console.log(`${N1} ${operator} ${N2} = ${sum.toFixed(2)}`);
    }
  } else if (operator == "%") {
    let sum = N1 % N2;
    if (N2 === 0) {
      console.log(`Cannot divide ${N1} by zero`);
    } else {
      console.log(`${N1} ${operator} ${N2} = ${sum}`);
    }
  }
}
operationBetweenNumbers(["7", "3", "*"]);
