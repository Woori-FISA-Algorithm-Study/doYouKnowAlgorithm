const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const numbers = [];
for (let i = 1; i <= n; i++) {
  numbers.push(+input[i]);
}

function mean(numbers) {
  let sum = numbers.reduce((a, b) => a + b);
  let result = Math.round(sum / numbers.length);
  return result;
}

function mid(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  let result = numbers[Math.round(numbers.length / 2) - 1];
  return result;
}

function mode(numbers) {
  let count = {};

  numbers.forEach((num) => {
    if (count[num]) {
      count[num] += 1;
    } else {
      count[num] = 1;
    }
  });

  let maxFreq = Math.max(...Object.values(count));
  let mode = Object.keys(count).filter((key) => count[key] === maxFreq);

  if (mode.length > 1) {
    mode = mode.sort((a, b) => a - b);
    return mode[1];
  } else return mode[0];
}

function max_min(numbers) {
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  return max - min;
}

// console.log(mean(numbers));
// console.log(mid(numbers));
// console.log(mode(numbers));
// console.log(max_min(numbers));

console.log(`${mean(numbers)}
${mid(numbers)}
${mode(numbers)}
${max_min(numbers)}`);
