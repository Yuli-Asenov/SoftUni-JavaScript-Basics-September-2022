function evenPowersOfTwo(input) {
  let n = Number(input[0]);
  for (let power = 0; power <= n; power += 2) {
    console.log(Math.pow(2, power));
    //console.log(2 ** 10);
  }
}
evenPowersOfTwo(["7"]);
