let user;
const userName = prompt("Введите своё имя");
const userYear = +prompt("Введите свой год рождения");
if (!isNaN(userYear) && typeof userYear === "number") {
  alert("Данные введены верно");
  alert(`${userName} : ${2023 - userYear}`);
} else {
  alert("Год должен быть числом!");
}
console.log(user);
