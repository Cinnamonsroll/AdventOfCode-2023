const { readFile, every } = require("./utils.js");

const lines = readFile("./input.txt");
let sumOfPowers = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let colors = {
        red: 0,
        blue: 0,
        green: 0,
    };

    let [id, rounds] = line.split(":");
    id = parseInt(id.split(" ")[1]);

    let maxSet = {
        red: 0,
        blue: 0,
        green: 0,
    };

    for (const round of rounds.split(";")) {
        const data = every(round.split(","), (x) => x.trim());
        for (const type of data) {
            const [val, color] = type.split(" ");
            const num = parseInt(val);
            if(num > colors[color]) colors[color] = num
        }

        maxSet.red = Math.max(maxSet.red, colors.red);
        maxSet.green = Math.max(maxSet.green, colors.green);
        maxSet.blue = Math.max(maxSet.blue, colors.blue);
    }

    const power = maxSet.red * maxSet.green * maxSet.blue;
    sumOfPowers += power;
}

console.log("Sum of Powers:", sumOfPowers);
