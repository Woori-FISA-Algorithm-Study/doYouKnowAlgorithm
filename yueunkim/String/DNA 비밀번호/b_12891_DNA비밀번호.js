const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [strLength, subStrLength] = input[0].split(" ").map(Number);
const str = input[1];
const dnaStr = ["A", "C", "G", "T"];
const dnaStrNum = input[2].split(" ").map(Number);
const dna = dnaStr.reduce((obj, key, index) => {
  obj[key] = dnaStrNum[index];
  return obj;
}, {});
let answer = 0;
let strCount = { A: 0, C: 0, G: 0, T: 0 };

// 1. index 0부터 부분문자열 개수만큼 substring만들기
// 2. 각 문자 개수 세고 조건 만족하면 answer++
// 3. index++하고 1번부터 반복

// 시간초과
// function solution(str, dna) {
//     for (let i = 0; i < str.length - subStrLength; i++){
//         let subStr = str.slice(i, i + Number(subStrLength)); // 부분문자열

//         // 각 문자 개수 세기
//         let strCount = {A: 0, C: 0, G: 0, T: 0};
//         for (let s of subStr) {
//             if(s in dna) strCount[s]++;
//         }

//         // 조건 만족하면 answer++
//         if (Object.keys(dna).every(key => dna[key] <= strCount[key])) {
//             answer++;
//         }
//     }
//     return answer;
// }

// console.log(solution(str, dna));
