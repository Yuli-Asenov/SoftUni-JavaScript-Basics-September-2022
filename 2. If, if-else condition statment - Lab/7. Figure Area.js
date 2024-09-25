function calculateFigureArea(input) {
  let figure = input[0];
  let a = Number(input[1]);
  let b = Number(input[2]);
  if (figure == "square") {
    faceSquare = a * a;
    console.log(faceSquare.toFixed(3));
  } else if (figure == "rectangle") {
    faceRectangle = a * b;
    console.log(faceRectangle.toFixed(3));
  } else if (figure == "circle") {
    faceCircle = Math.PI * a * a;
    console.log(faceCircle.toFixed(3));
  } else if (figure == "triangle") {
    faceTriangle = 0.5 * a * b;
    console.log(faceTriangle.toFixed(3));
  }
}
calculateFigureArea(["triangle", "4.5", "20"]);
