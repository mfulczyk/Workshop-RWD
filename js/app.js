let inputQuantity = document.querySelector("input:nth-child(1)");
let inputOrders = document.querySelector("input:nth-child(2)");
let inputPackage = document.querySelector("div.list-left > form > select");
let inputAcc = document.querySelector("label.calc-check"); //sprawdzic czy to na pewno dobrze
let inputRental = document.querySelector("label:nth-child(3) > label"); //sprawdzic czy to na pewno dobrze

let outProductsPrice = document.querySelector(
  "div:nth-child(1) > div.total-green-box"
);
let outOrdersPrice = document.querySelector(
  "div:nth-child(2) > div.total-green-box"
);
let outPackagePrice = document.querySelector(
  "div:nth-child(3) > div.total-green-box"
);
let outAccPrice = document.querySelector(
  "div:nth-child(4) > div.total-green-box"
);
let outRentPrice = document.querySelector(
  "div:nth-child(5) > div.total-green-box"
);

let accBig = document.querySelector("div.list-right > div:nth-child(4)");
let rentBig = document.querySelector("div.list-right > div:nth-child(5)");
let packBig = document.querySelector("div.list-right > div:nth-child(3)");
let orderBig = document.querySelector("div.list-right > div:nth-child(2)");
let prodBig = document.querySelector("div.list-right > div:nth-child(1)");

let prodNumber = document.querySelector(
  "div:nth-child(1) > div.middle-green.box > span"
);
let ordNumber = document.querySelector(
  "div:nth-child(2) > div.middle-green.box > span"
);
let packType = document.querySelector(
  "div:nth-child(3) > div.middle-green.box"
);

let finalPrice = document.querySelector(
  "div.blue-box-total > div.final-price > span"
);

let counter = 0;
let counter1 = 0;

function Podsumuj() {
  let x = parseFloat(outProductsPrice.innerText.replace("$", ""));
  let y = parseFloat(outOrdersPrice.innerText.replace("$", ""));
  let z = parseFloat(outPackagePrice.innerText.replace("$", ""));
  let q = parseFloat(outAccPrice.innerText.replace("$", ""));
  let g = parseFloat(outRentPrice.innerText.replace("$", ""));

  if (outProductsPrice.style.display === "none") {
    x = 0;
  }

  if (outOrdersPrice.style.display === "none") {
    y = 0;
  }

  if (outPackagePrice.style.display === "none") {
    z = 0;
  }

  if (outAccPrice.style.display === "none") {
    q = 0;
  }

  if (outRentPrice.style.display === "none") {
    g = 0;
  }

  finalPrice.innerText = x + y + z + q + g;
}

inputQuantity.addEventListener("change", function () {
  prodNumber.innerText = inputQuantity.value;
  outProductsPrice.innerText = "$" + inputQuantity.value * 0.5;

  prodBig.style.display = "flex";

  Podsumuj();
});

inputOrders.addEventListener("change", function () {
  ordNumber.innerText = inputOrders.value;
  outOrdersPrice.innerText = "$" + inputOrders.value * 0.25;

  orderBig.style.display = "flex";

  Podsumuj();
});

inputPackage.addEventListener("change", function () {
  packType.innerText = inputPackage.value;

  packBig.style.display = "flex";

  if (inputPackage.value === "Premium") {
    outPackagePrice.innerText = "$60";
    Podsumuj();
  }
  if (inputPackage.value === "Professional") {
    outPackagePrice.innerText = "$45";
    Podsumuj();
  }
  if (inputPackage.value === "Basic") {
    outPackagePrice.innerText = "$20";
    Podsumuj();
  }
});

inputAcc.addEventListener("change", function () {
  counter++;

  if (counter % 2 !== 0) {
    accBig.style.display = "flex";
    outAccPrice.innerText = "$35";
    Podsumuj();
  } else {
    accBig.style.display = "none";
    outAccPrice.innerText = "$0";

    finalPrice.innerText =
      parseFloat(finalPrice.innerText.replace("$", "")) - 35;
  }
});

inputRental.addEventListener("change", function () {
  counter1++;

  if (counter1 % 2 !== 0) {
    rentBig.style.display = "flex";
    outRentPrice.innerText = "$5";
    Podsumuj();
  } else {
    rentBig.style.display = "none";
    outRentPrice.innerText = "$0";

    finalPrice.innerText =
      parseFloat(finalPrice.innerText.replace("$", "")) - 5;
  }
});
