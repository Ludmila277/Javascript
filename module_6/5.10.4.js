let userName = prompt("Введите своё имя");
let userYear = +prompt("Введите свой год рождения");
let currentYear = 2023;
let age = currentYear - userYear;
let lastDigit = age % 10;
let lastTwoDigits = age % 100;
let declination;
if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
  declination = "лет";
} else {
  switch (lastDigit) {
    case 1:
      declination = "год";
      break;
    case 2:
    case 3:
    case 4:
      declination = "года";
      break;
    default:
      declination = "лет";
  }
}
alert(`${userName} : ${age} ${declination}`);
