const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const str = input[0];
let arr = [];
let answer = "";
let word = ""; // 태그안에 있지 않은 텍스트
let meet = false; // <를 만났는지 여부

function solution(str) {
  // <가 포함되어 있으면
  if (str.includes("<")) {
    //  '<'면 '>'가 나올때까지 answer에 추가
    // '<'가 아니면 '<'를 만날때까지 word에 추가하고 '<'를 만나면 word 순서를 뒤집어 answer에 더하기
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "<") {
        meet = true;
        word = word.split(" ");
        word.forEach((e) => {
          arr.push(e.split("").reverse().join(""));
        });
        answer += arr.join(" ");
        answer += str[i];
        word = "";
        arr = [];
      }
      if (str[i] === ">") {
        meet = false;
        answer += str[i];
      }
      if (str[i] !== "<" && meet === true) {
        answer += str[i];
      } else if (str[i] !== ">" && meet === false) {
        word += str[i];
      }
    }
    word = word.split(" ");
    word.forEach((e) => {
      arr.push(e.split("").reverse().join(""));
    });
    answer += arr.join(" ");
    return answer;
    // <가 포함되어 있지 않으면
  } else {
    str = str.split(" ");
    str.forEach((e) => {
      arr.push(e.split("").reverse().join(""));
    });
    return arr.join(" ");
  }
}

console.log(solution(str));
