// 2. 피자 나눠먹기 (1)
function solution(n) {
  // 피자 1판 == 7 조각 / 1사람당 최소 1조각 먹기 위한 피자의 수 구하기
  // 인간 n명이라면 n / 7 한 수(=피자 판 수) 올림해서 사드셈
  let totalPizza = Math.ceil(n / 7);
  return totalPizza;
}
// 변수 선언 하지말고 그냥 return = Math.ceil(n/7); 하면될듯..
