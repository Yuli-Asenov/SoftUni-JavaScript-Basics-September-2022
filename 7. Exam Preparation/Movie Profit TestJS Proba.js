function pregovor(input) {
  let movie = input[0];
  let days = Number(input[1]);
  let tickets = Number(input[2]);
  let priceForTicket = Number(input[3]);
  let cinemaCut = Number(input[4]);

  let incomeForDay = tickets * priceForTicket;
  let totalIncome = incomeForDay * days;
  let cinemaCutProcent = cinemaCut / 100;
  let finalCinemaCut = totalIncome * cinemaCutProcent;
  let finalTotalIncome = totalIncome - finalCinemaCut;
  console.log(
    `The profit from the movie ${movie} is ${finalTotalIncome.toFixed(2)} lv.`
  );
}
pregovor(["The Programmer", "20", "500", "7.50", "7"]);
