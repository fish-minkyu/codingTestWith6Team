// 5-1 머쓱이보다 키 큰 사람
// 머쓱이 키가 height
// 머쓱이보다 키 큰 사람 수 return

// array	                height    result
// [149, 180, 192, 170]	  167	      3
// [180, 120, 140]	      190	      0



function solution(array, height) {
  let answer = []; // 빈 배열 생성
  // for문으로 돌리고 > 조건문 array[i] 요소가 height 보다 크면 answer에 담기게 하고
  // answer.length를 return

  for (i = 0; i < array.length; i++) {
    if (array[i] > height) {
      answer.push(array[i]);
    }
  }

  return answer.length;
}

function solution(array, height) {
  let answer = 0; // answer 변수 생성
  // for of문> 조건문 arr가 heigth 보다 크면 answer+=1;
  // return answer;
  for (arr of array) {
    if (arr > height) answer += 1;
  }
  return answer;
}
//-----------------------------------------------------

// 도원 nav
// function solution(array, height) {
//   1. 머쓱이보다 키큰사람 숫자를 셀 cnt 변수 선언
//   2. array를 forEach로 돌며 주어진 height보다 큰 요소를 만날때마다
//   3. cnt를 ++해준후,
//   4. cnt를 반환.
// }

// 유진
function solution(array, height) {
  let cnt = 0;
  array.forEach(num => num > height ? cnt ++ : '')
  return cnt;
}

while(1){
  cnt++;
}

solution = [1,2,3,4]
while(solution[3]){
  cnt++;
}

function solution(a){
  return 1;
}

while(1){
  cnt++;
}

//엄마왔다고...스터디달라진거봐...
//
//
//

//기택
function solution(array, height) {
  let cnt = 0;
  return cnt;
}

// 민규
function solution(array, height) {
  let num = 0
  for (let i = 0 ; i < array.length; i++) {
      if (array[i] > height) num++
  }
  return num
}