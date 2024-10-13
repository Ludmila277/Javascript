const first = +prompt("Какое число вы хотите указать?");
const newArray = [];
for (let i = 0; i <= `${first}`; i += 1) {
  newArray.push(i);
}
console.log(newArray);
