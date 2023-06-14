// 4-4. 배열자르기

// numbers의 num1번째 인덱스부터 num2번째 인덱스 까지 자른 배열을 return

function solution(numbers, num1, num2) {
  // for반복문
  // numbers.length == num1  ~  numbers. length == num2  자르기
  let answer = [];
  let j = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i >= num1 && i <= num2) {
      answer[j] = numbers[i];
      j++;
    }
  }
  return answer;
}

//민규
function solution(numbers, num1, num2) {
  var newNumbers = []
  for (let i = num1; i <= num2; i++) {
    newNumbers.push(numbers[i])
  }
  return newNumbers
}

//민희
function solution(numbers, num1, num2) {

  var answer = [0, 0];
  
  let slicednumbers = numbers.slice(num1, num2+1);
  // .slice때문에 자꾸 num2전 인덱스까지 출력되던걸 +1을 붙여줌으로써 해결함

  return answer = slicednumbers

};

console.log(solution([1, 2, 3, 4, 5], 1, 3));