// 4-7 최댓값 만들기 (1)

// 배열에 있는 원소 중 가장 큰 2개 골라서 곱하기

function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let max = numbers[i] * numbers[j];
      if (max > answer) answer = max;
    }
  }
  return answer;
}
