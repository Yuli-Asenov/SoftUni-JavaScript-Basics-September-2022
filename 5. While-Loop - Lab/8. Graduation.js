function graduation(input) {
  let student = input[0];
  let total = 0;
  let excluded = false;
  let index = 1;
  let grades = 0;
  let grade = 0;

  while (index < input.length) {
    let grades = Number(input[index]);
    index++;
    grade++;
    if (grades < 4) {
      excluded = true;
      break;
    } else if (grades >= 4) {
      total += grades;
    }
  }
  if (excluded === true) {
    console.log(`${student} has been excluded at ${grade} grade`);
  } else {
    console.log(`${student} graduated. Average grade: ${(total / 12).toFixed(2)}`);
  }
}
graduation([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
