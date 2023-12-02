const {
    readFile,
    every,
    any
} = require("./utils.js");
const lines = readFile("./input.txt");
let sum = 0;
const maxColors = [12, 14, 13]
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let colors = {
        red: 0,
        blue: 0,
        green: 0
    };
    let valid = true;
    let [id, rounds] = line.split(":");
    id = parseInt(id.split(" ")[1])
    for (const round of rounds.split(";")) {
        const data = every(round.split(","), x => x.trim())
        for (const type of data) {
            const [val, color] = type.split(" ");
            colors[color] += parseInt(val);
        }
        if (any(Object.values(colors), (x, i) => x > maxColors[i])) {
            valid = false;
            break;
        }
        colors = {
            red: 0,
            blue: 0,
            green: 0
        };
    }
    if (valid){
         sum += id;
    }
}

console.log(sum)
