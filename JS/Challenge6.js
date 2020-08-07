let number = 784561;

let max = 0;
let min = number % 10;

while (number > 0) {
  let numX = number % 10;
  max = Math.max(numX, max);
  min = Math.min(numX, min);
  number = Math.floor(number / 10);
}

console.log(max - min);