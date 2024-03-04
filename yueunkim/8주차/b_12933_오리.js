const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const str = input[0].split("")

let seq = 0;
let count = 1;
let visited = new Array(str.length).fill(false);
let result = 0;
const quack = 'quack';

const onlyq = [];
for (let i = 0; i<str.length; i++){
    if (str[i] === 'q') onlyq.push(i);
}

onlyq.forEach(e => {
    if (!visited[e]){
        let madequack ='';
        for (let i = e; i < str.length; i++){
            if (!visited[i]){
                if(str[i] ==='q' && madequack.indexOf(str[i]) === -1 ) {
                    visited[i] = true;
                    seq = 0;
                    madequack += 'q';
                    continue;
                } else if (str[i]==='u' && quack.indexOf(str[i]) - seq === 1 && madequack.indexOf(str[i]) === -1 ){
                    visited[i] = true;
                    count++;
                    seq = 1;
                    madequack += 'u';
                    continue;
                } else if (str[i]==='a' && quack.indexOf(str[i]) - seq === 1 && madequack.indexOf(str[i]) === -1 ) {
                    visited[i] = true;
                    count++;
                    seq = 2;
                    madequack += 'a';
                    continue;
                } else if (str[i]==='c' && quack.indexOf(str[i]) - seq === 1 && madequack.indexOf(str[i]) === -1 ){
                    visited[i] = true;
                    count++;
                    seq = 3;
                    madequack += 'c';
                    continue;
                } else if (str[i]==='k' && quack.indexOf(str[i]) - seq === 1 && madequack.indexOf(str[i]) === -1 ){
                    visited[i] = true;
                    count++;
                    seq = 4;
                    madequack += 'k';
                    continue;
                }
            }
        }
        if (count % 5 === 0) result++; 
    }
    madequack = '';
});

console.log(visited)
console.log(result > 0 ? result : -1);

