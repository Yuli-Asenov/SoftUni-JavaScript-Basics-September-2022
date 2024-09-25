function password(input) {
  let username = input[0];
  let password = input[1];
  let data = input[2];
  index = 3;
  while (true) {
    if (data !== password) {
      data = input[index];
      index++;
    }
    console.log(`Welcome ${username}!`);
    break;
  }
}
password(["Nakov", "1234", "Pass", "1324", "1234"]);
