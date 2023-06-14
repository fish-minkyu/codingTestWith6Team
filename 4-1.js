
// 4-1 중복된 숫자 개수

  // 배열 array 에 정수 n이 몇 개 있는지? return

  // 1. for문으로 반복문 돌리기
function solution(array, n) {
  let answer = 0; //리턴값으로 쓸 정수
  for (i = 0; i < array.length; i++) {
    if (array[i] == n) {
      //array의 i번째수와 매개변수 n이 같다면
      answer++; //answer 1 증가
    }
  }
  return answer;
}


//민규
function solution(array, n) {
  let num = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      num++
    }
  }
  return num
}

//민희
function solution(array, n) {

  //리턴값으로 쓸 정수
  var answer = 0; 

  for ( i=0; i < array.length; i ++ ){
      if ( array[i] == n ){ //array의 i번째수와 매개변수 n이 같다면
          answer++;   //answer 1 증가
      }
  }

  return answer;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1));