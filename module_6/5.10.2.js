let sense;
const first = "скиДка";
const second = "Скидка";
const third = "СКИДКА";
sense = prompt("Введите промокод");
if (sense == first || sense == second || sense == third) {
  alert("Промокод применён");
} else {
  alert("Промокод не работает");
}
console.log(sense);
