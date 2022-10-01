const numbers = [];

for (let i = 0; i < 101; i++) {
  numbers[i] = i;
}

for (let i = 3; i < 101; i += 3) {
  numbers[i] = "fizz";
}

for (let i = 5; i < 101; i += 5) {
  numbers[i] = "buzz";
}

for (let i = 15; i < 101; i += 15) {
  numbers[i] = "fizzbuzz";
}

console.log(numbers.join(" "));
