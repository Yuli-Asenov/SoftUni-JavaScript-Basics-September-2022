function getPersonInfoString(input) {
  let firstName = input[0];
  let lastName = input[1];
  let age = input[2];
  let town = input[3];

  let result = [firstName, lastName, age, town];

  console.log(
    `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`
  );
}
getPersonInfoString(["Maria", "Ivanova", 19, "Pleven"]);
