let age = +prompt(
  "Добро пожаловать на сайт!\nЧтобы продолжить работу с сайтом, введите свой возраст"
);
if (age >= 18 && age <= 21) {
  alert("Мы можем вам выдать максимум 50000.\nВведите сумму, кратную 1000.");
} else if (age >= 22 && age <= 35) {
  alert("Мы можем вам выдать максимум 400000.\nВведите сумму, кратную 1000.");
} else if (age >= 36 && age <= 65) {
  alert("Мы можем вам выдать максимум 1000000.\nВведите сумму, кратную 1000.");
} else {
  alert("Видимо, вам кредит не нужен, всего доброго!");
}
const agemoney = +prompt("Какую сумму вы хотите взять в кредит?");

if (agemoney % 1000 === 0) {
  alert(`Мы можем выдать вам - ${agemoney}`);
} else {
  alert("Вы ввели значение не кратное 1000. Мы можем выдать 45000.");
}
console.log(age);
