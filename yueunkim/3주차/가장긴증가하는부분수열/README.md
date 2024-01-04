# [Silver II] 가장 긴 증가하는 부분 수열 - 11053

[문제 링크](https://www.acmicpc.net/problem/11053)

### 분류

dp

### 풀이여부 (완료/미완료/풀이참고/문법참고)

### 풀이후기 (어려웠던 점/참고한 내용/새롭게 배운 내용/기억할 내용/코드 설명/...)

```javascript
function solution(n, a) {
  for (let i = 1; i < n; i++) {
    if (max < a[i]) {
      max = a[i];
      count++;
      console.log(max);
    }
  }
  return count + 1;
}
```

- 처음엔 위와 같이 단순하게 현재 최대값보다 더 큰 요소가 나올 때마다 최대값 갱신하고 count++ 하도록 풀었으나 틀림
- 반례 : 10 30 20 30 40 50 인 경우 가장 긴 증가하는 부분 수열은 길이가 5이지만 위의 풀이로 하면 4가 나옴
