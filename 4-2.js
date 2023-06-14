
// 4-2 배열의 평균값

// numbers의 평균값 return

//1
function solution(numbers) {
  // 배열의 요소 전부 더한 다음 배열의 갯수만큼 나눠서 소수점은 .0 / 0.5 까지만.
  
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length ;
}


//2
function solution(numbers) {
  // 배열의 요소 전부 더한 다음 배열의 갯수만큼 나눠서 소수점은 .0 / 0.5 까지만.
  
  let answer = 0;
  for (i of numbers) {
    answer += i;
  }
  return answer / numbers.length;
}

//민규
function solution(numbers) {
  var sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum / numbers.length
}

console.log(solution([1,2,3]))

//민희
function solution(numbers) {
  var answer = 0;
  var sum = 0;

  for(let i = 0; i <numbers.length; i++){
      sum += numbers[i];
  }

  return answer = sum / numbers.length;
}

console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]))