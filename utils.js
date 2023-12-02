const { readFileSync } = require("fs");

const wordToNumberMapping = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10
};

module.exports = {
    digits: (str) => {
        return str.match(/\d/g);
    },

    sum: (arr) => {
        return arr.reduce((acc, num) => acc + num, 0);
    },

    product: (arr) => {
        return arr.reduce((acc, num) => acc * num, 1);
    },

    gcd: (a, b) => {
        return b === 0 ? a : exports.gcd(b, a % b);
    },

    lcm: (a, b) => {
        return (a * b) / exports.gcd(a, b);
    },

    combinations: (arr, size) => {
        const result = [];

        const combine = (current, start) => {
            if (current.length === size) {
                result.push([...current]);
                return;
            }

            for (let i = start; i < arr.length; i++) {
                current.push(arr[i]);
                combine(current, i + 1);
                current.pop();
            }
        };

        combine([], 0);
        return result;
    },

    permutations: (arr) => {
        const result = [];

        const permute = (current, remaining) => {
            if (remaining.length === 0) {
                result.push([...current]);
                return;
            }

            for (let i = 0; i < remaining.length; i++) {
                const next = remaining.slice(0);
                next.splice(i, 1);
                permute([...current, remaining[i]], next);
            }
        };

        permute([], arr);
        return result;
    },

    convertToNumeric: (str) => {
        return wordToNumberMapping[str.toLowerCase()] || str;
    },

    readFile: (filePath, splitter = "\n") => {
        return readFileSync(filePath, "utf-8").split(splitter);
    },

    every: (arr, func) => {
        return arr.map(func);
    },
    any: (arr, func) => {
        return arr.some(func)
    }
};
