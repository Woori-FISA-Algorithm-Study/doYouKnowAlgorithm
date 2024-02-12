const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
let switchh = input[1].split(" ").map(Number);
const students = [];
for (let i = 3; i < 3 + +input[2]; i++) {
  students.push(input[i].split(" ").map(Number));
}

students.forEach((stu) => {
  // 남학생인 경우
  if (stu[0] === 1) {
    let multiple = [];
    for (let i = 1; i <= n / stu[1]; i++) {
      multiple.push(stu[1] * i);
    }
    multiple.forEach((e) => {
      switchh[e - 1] === 1 ? (switchh[e - 1] = 0) : (switchh[e - 1] = 1);
    });

    // 여학생인 경우
  } else {
    // 본인거 바꾸기
    switchh[stu[1] - 1] === 1
      ? (switchh[stu[1] - 1] = 0)
      : (switchh[stu[1] - 1] = 1);
    // 대칭되는거 찾아서 바꾸기
    for (let i = 1; stu[1] - i - 1 >= 0 && stu[1] + i - 1 <= n - 1; i++) {
      if (switchh[stu[1] - i - 1] === switchh[stu[1] + i - 1]) {
        switchh[stu[1] - i - 1] === 1
          ? (switchh[stu[1] - i - 1] = 0)
          : (switchh[stu[1] - i - 1] = 1);
        switchh[stu[1] + i - 1] === 1
          ? (switchh[stu[1] + i - 1] = 0)
          : (switchh[stu[1] + i - 1] = 1);
      } else break;
    }
  }
});

for (let i = 0; i < switchh.length; i += 20) {
  console.log(switchh.slice(i, i + 20).join(" "));
}
