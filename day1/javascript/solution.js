const { readFileSync } = require("fs");
const input = readFileSync("../input.txt", "utf-8");
const sum = input
    .split('\n')
    .map((line) => {
      const digits = line.match(/\d/g);
      return digits ? parseInt(digits[0] + digits[digits.length - 1]) : 0;
    })
    .reduce((total, value) => total + value, 0);
console.log(sum);
