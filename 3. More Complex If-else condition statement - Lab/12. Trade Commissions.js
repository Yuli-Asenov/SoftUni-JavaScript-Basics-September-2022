function tradeCommissions(input) {
  let city = input[0];
  let sales = Number(input[1]);

  if (city == "Sofia") {
    if (0 <= sales && sales <= 500) {
      console.log((sales * 0.05).toFixed(2));
    } else if (500 < sales && sales <= 1000) {
      console.log((sales * 0.07).toFixed(2));
    } else if (1000 < sales && sales <= 10000) {
      console.log((sales * 0.08).toFixed(2));
    } else if (sales > 10000) {
      console.log((sales * 0.12).toFixed(2));
    } else {
      console.log("error");
    }
  } else if (city == "Varna") {
    if (0 <= sales && sales <= 500) {
      console.log((sales * 0.045).toFixed(2));
    } else if (500 < sales && sales <= 1000) {
      console.log((sales * 0.075).toFixed(2));
    } else if (1000 < sales && sales <= 10000) {
      console.log((sales * 0.1).toFixed(2));
    } else if (sales > 10000) {
      console.log((sales * 0.13).toFixed(2));
    } else {
      console.log("error");
    }
  } else if (city == "Plovdiv") {
    if (0 <= sales && sales <= 500) {
      console.log((sales * 0.055).toFixed(2));
    } else if (500 < sales && sales <= 1000) {
      console.log((sales * 0.08).toFixed(2));
    } else if (1000 < sales && sales <= 10000) {
      console.log((sales * 0.12).toFixed(2));
    } else if (sales > 10000) {
      console.log((sales * 0.145).toFixed(2));
    } else {
      console.log("error");
    }
  } else {
    console.log("error");
  }
}
tradeCommissions(["Plovdiv", "499.99"]);
