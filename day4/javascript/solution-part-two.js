const { readFile } = require("./utils.js")
const AFTER_CARD_IDENTIFIER = 5;

const input = readFile("./input.txt")
let winningNums = new Set();
let copies = new Map();
let totalScratchcards = 0;

for (let i = 0; i < input.length; i++) {
    const line = input[i];
    const colonIdx = line.indexOf(':');
    let num = 0;
    let matchingNums = 0;
    let separatorFound = false;
    let lexeme = '';

    for (let j = colonIdx + 2; j < line.length; j++) {
        const c = line[j];
        if (/\d/.test(c)) {
            lexeme += c;

            while (j + 1 < line.length && /\d/.test(line[j + 1])) lexeme += line[++j];

            num = parseInt(lexeme);
            lexeme = '';

            if (separatorFound && winningNums.has(num)) matchingNums++;
            else winningNums.add(num);
        } else if (c === '|') separatorFound = true;
    }

    const cardNum = parseInt(line.substr(AFTER_CARD_IDENTIFIER, colonIdx - AFTER_CARD_IDENTIFIER));
    const isNewCard = !copies.has(cardNum);
    const repeat = isNewCard ? 1 : copies.get(cardNum) + 1;

    for (let j = 0; j < matchingNums; j++) {
        const isNew = !copies.has(cardNum + j + 1);
        copies.set(cardNum + j + 1, isNew ? repeat : copies.get(cardNum + j + 1) + repeat);
    }

    matchingNums *= isNewCard ? 1 : copies.get(cardNum) + 1;
    copies.delete(cardNum);

    totalScratchcards += matchingNums + 1;
    winningNums.clear();
}

console.log(totalScratchcards);
