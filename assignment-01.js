let num = prompt("Enter a number: ");
let reverse = 0;

while (num > 0) {
  let remainder = num % 10;
  reverse = (reverse * 10) + remainder;
  num = Math.floor(num / 10);
}

console.log("Reverse of the number is: " + reverse);
