// 차량별로 주차요금 계산
// 차량 번호가 작은 자동차부터 순서대로 리턴
function solution(fees, records) {
  var answer = [];
  const baseTime = fees[0];
  const baseFee = fees[1];
  const unitTime = fees[2];
  const unitFee = fees[3];

  let map = new Map([]);

  // 최종 결과물 저장
  let carResult = new Map([]);
  for (let i = 0; i < records.length; i++) {
    const r = records[i].split(' ');
    const carNumber = r[1];
    if (carResult.has(carNumber) === false) {
      carResult.set(carNumber, 0)
    }
  }

  for (let i = 0; i < records.length; i++) {
    const r = records[i].split(' ')
    // 1. 시간을 분으로 바꾸기
    const time = r[0].split(":").map(i => Number(i))

    const timeToNum = time[0] * 60 + time[1]
    const car = r[1]
    const status = r[2]

    if (status === "IN") {
      // 입차
      map.set(car, timeToNum)
    } else {
      // 출차
      const temp = timeToNum - map.get(car) // 계산한 시간
      map.delete(car)
      carResult.set(car, carResult.get(car) + temp)
    }
  }
  if (map.size !== 0) {
    // 출차하지 못한 차가 남아있는 경우
    for ([key, value] of map) {
      const temp = (23 * 60 + 59) - value
      carResult.set(key, carResult.get(key) + temp)
    }
    map.clear();
  }

  let carResultArr = [...carResult]
  carResultArr.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < carResultArr.length; i++) {
    const accTime = carResultArr[i][1];
    if (accTime <= baseTime) {
      answer.push(baseFee)
    } else {
      const extraFee = Math.ceil((accTime - baseTime) / unitTime) * unitFee + baseFee
      answer.push(extraFee)
    }
  }
  return answer;
}
