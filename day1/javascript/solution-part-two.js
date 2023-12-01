const { readFileSync } = require("fs");
const input = readFileSync("../input.txt", "utf-8");
const nums = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
};

const data = input.split('\n').map(line => {
    const digits = line.split('')
        .map((char, index) => {
            const remainingSubstring = line.slice(index);
            for (const [word, value] of Object.entries(nums)) {
                if (remainingSubstring.startsWith(word)) {
                    return value;
                }
            }
            return parseInt(char);
        })
        .filter(Boolean);

    return Number('' + digits[0] + digits[digits.length - 1]);
}).reduce((acc, c) => acc + c, 0);

console.log(data);
