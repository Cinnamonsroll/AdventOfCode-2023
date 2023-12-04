const { readFile } = require("./utils.js")
const lines = readFile("./input.txt")
const G = lines.map(line => line.split(''));
const R = G.length;
const C = G[0].length;
let sum = 0;
const nums = new Map();

for (let r = 0; r < R; r++) {
  const gears = new Set();
  let n = 0;
  let hasPart = false;

  for (let c = 0; c <= C; c++) {w
    if (c < C && /\d/.test(G[r][c])) {
      n = n * 10 + parseInt(G[r][c], 10);

      for (const rr of [-1, 0, 1]) {
        for (const cc of [-1, 0, 1]) {
          if (0 <= r + rr && r + rr < R && 0 <= c + cc && c + cc < C) {
            const ch = G[r + rr][c + cc];
            if (!/\d/.test(ch) && ch !== '.') {
              hasPart = true;
            }
            if (ch === '*') {
              gears.add(`${r + rr},${c + cc}`);
            }
          }
        }
      }
    } else if (n > 0) {
      for (const gear of gears) {
        if (!nums.has(gear)) {
          nums.set(gear, []);
        }
        nums.get(gear).push(n);
      }
      if (hasPart) {
        sum += n;
      }
      n = 0;
      hasPart = false;
      gears.clear();
    }
  }
}
console.log(sum;
