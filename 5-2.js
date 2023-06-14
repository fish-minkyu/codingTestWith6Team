// 5-2 배열 2배 만들기
// 정수 배열 numbers 각 원소에 2배한 배열 return

// numbers	                  result
// [1, 2, 3, 4, 5]	          [2, 4, 6, 8, 10]
// [1, 2, 100, -99, 1, 2, 3]	[2, 4, 200, -198, 2, 4, 6]

//n1
// function solution(numbers) 
// numbers배열의 요소를 돌아가면서 
// push사용, 배열의 요소에 *2 값을 계속 뒤에 붙임
// ex. [2]->[2, 4]->[2, 4, 6],,,[2, 4, 6, 8, 10]
  



//n2 도원
// function solution(numbers) {
//   1. 결과를 반영하여 반환할 ans배열 선언
//   2. numbers를 forEach하여 각 요소에 2를 곱해 ans에 push해준다.
//   3. ans를 반환
// }

// 민규
function solution(numbers) {
  let ans = []
  numbers.forEach(function(item) {
    ans.push(item * 2)
  })
  return ans
}
// 완


//유진
//for 문 사용
function solution(numbers) {
  let answer = [];
  for(num of numbers) {
    answer.push(num * 2);
  }
  return answer;
}
// 완

function solution(numbers) {
  let answer = [];
  numbers.forEach(number => answer.push(2*number))
  return answer;
}
//완

// map 함수사용
const solution = (numbers) => numbers.map((number) => number * 2);





//기택
function solution(numbers) {
  var answer = [];
  for( i = 0; i < numbers.length; i++) {
      answer.push( numbers[i] * 2 )
  } 
  return answer;
}

function solution(numbers) {
  let answer = [];
  numbers.forEach(num => numbers.push(num * 2))
  return answer;
}

//완 