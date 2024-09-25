function cake(input) {
  let cakeLength = Number(input[0]);
  let cakeWidth = Number(input[1]);
  let index = 2;
  let cakePieces = cakeLength * cakeWidth;
  let piecesServed = 0;

  while (true) {
    let pieceCounter = input[index];
    if (pieceCounter !== "STOP") {
      let currentPieces = Number(input[index]);
      index++;
      let pieces = currentPieces * 1;
      piecesServed += pieces;
      if (piecesServed >= cakePieces) {
        let piecesLeft = piecesServed - cakePieces;
        console.log(`No more cake left! You need ${piecesLeft} pieces more.`);
        break;
      }
    }
    if (pieceCounter === "STOP") {
      if (piecesServed < cakePieces) {
        let piecesLeft = cakePieces - piecesServed;
        if (piecesServed < cakePieces) {
          console.log(`${piecesLeft} pieces are left.`);
          break;
        }
      }
    }
  }
}
cake(["10", "2", "2", "4", "6", "STOP"]);
//(["10","10","20","20","20","20","21"]);
