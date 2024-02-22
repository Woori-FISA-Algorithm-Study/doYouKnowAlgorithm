// 캐시 크기에 따른 실행시간 측정
// 해당 도시와 관련된 맛집 게시물을 읽어서 보여주는 서비스 개발
function findMinKey(cache, minValue) {
  let minKey;

  for (let [key, value] of cache.entries()) {
    if (value === minValue) {
      minKey = key;
      break;
    }
  }
  return minKey;
}

function solution(cacheSize, cities) {
  let answer = 0;
  let cache = []
  let cityList = cities.map(i => i.toUpperCase())
  if (cacheSize === 0) {
    answer += (cities.length * 5)
  } else {
    for (let i = 0; i < cityList.length; i++) {
      // hit
      if (cache.includes(cityList[i])) {
        //뺴서 뒤에 넣어야함
        const idx = cache.indexOf(cityList[i])
        cache.splice(idx, 1)
        cache.push(cityList[i])
        answer += 1
      } else {
        // miss
        if (cache.length === cacheSize) {
          // 사용중인 캐시가 다 찼다는 뜻 -> 비워줘야함
          // minValue가 동일한 값이 있을 경우에는 어떻게 해줘야하나? 뒤에 있는걸 빼야하나?
          cache.shift()
        }
        cache.push(cityList[i])
        answer += 5
      }
    }
  }


  return answer;
}