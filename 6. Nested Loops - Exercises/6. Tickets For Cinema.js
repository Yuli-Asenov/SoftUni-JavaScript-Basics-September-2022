function ticketsForCinema(input) {
  let index = 0;
  let command = input[index];
  let studentCounter = 0;
  let standardCounter = 0;
  let kidCounter = 0;
  let totalTicketsCounter = 0;

  while (command !== "Finish") {
    let name = command;
    index++;
    let freeSeats = Number(input[index]);
    index++;
    let ticketType = input[index];
    let ticketCounter = 0;

    while (ticketType !== "End") {
      ticketCounter++;
      switch (ticketType) {
        case "standard":
          standardCounter++;
          break;
        case "student":
          studentCounter++;
          break;
        case "kid":
          kidCounter++;
          break;
      }
      if (ticketCounter >= freeSeats) {
        break;
      }
      index++;
      ticketType = input[index];
    }
    totalTicketsCounter += ticketCounter;
    let resultSingleMovie = (ticketCounter / freeSeats) * 100;

    console.log(`${name} - ${resultSingleMovie.toFixed(2)}% full.`);
    index++;
    command = input[index];
  }
  console.log(`Total tickets: ${totalTicketsCounter}`);
  console.log(
    `${((studentCounter / totalTicketsCounter) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((standardCounter / totalTicketsCounter) * 100).toFixed(
      2
    )}% standard tickets.`
  );
  console.log(
    `${((kidCounter / totalTicketsCounter) * 100).toFixed(2)}% kids tickets.`
  );
}
ticketsForCinema([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
