const first = prompt("Введите слово для проверки");
const str = "civic";
const strReverse = str.split("").reverse().join("");
if (str === strReverse) {
  alert(`Слово ${first} является палиндромом`);
} else {
 alert(`Слово ${first}  не является палиндромом`);
}
console.log(str);  