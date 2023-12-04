const { readFile } = require("./utils.js")
const lines = readFile("./input.txt")
let points = 0;
for(let i = 0; i < lines.length; i++){
    const [_winning, _guesses] = lines[i].split(" | ");
    const winning = _winning.split(":")[1].split(" ").filter(Boolean);
    const guesses = _guesses.split(" ").filter(Boolean);
    const answers = guesses.filter(x => winning.includes(x));
    if(answers.length > 0){
        let _points = 1;
        for(let j = 1; j < answers.length; j++) _points += _points;
        points += _points
    }
}
console.log(points)
