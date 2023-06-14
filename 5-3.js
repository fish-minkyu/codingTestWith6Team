// 5-3
// 삼각형의 완성조건(1)

// 가장 긴 변의 길이 < 다른 두 변의 길이의 합
// 삼각형의 세 변의 길이가 담긴 배열 sides 매개변수
// 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return

//sides	              result
// [1, 2, 3]	        2
// [3, 6, 2]	        2
// [199, 72, 222]	    1


// n1
// 1. sort() 메소드로 배열의 요소를 정렬, 가장 큰 값이 맨 뒤로
// 2. 조건문을 활용
// 2-1. 정렬했던 배열의 순서를 조건문에 활용

// 민희
function solution(sides) {
  var answer = 0;

  const arr = sides.sort((a, b) => a - b);

  if (arr[2] < arr[0] + arr[1]) {
    answer = 1;
  } else {
    answer = 2;
  }
  return answer;
}

// 민규
function solution(sides) {
  let ssides = sides.sort((a, b) => a-b)
  if (ssides[2] < ssides[1] + ssides[0]) {
    return 1
  } else {
    return 2
  }
}

// 유진
function solution(sides) {
  let answer = 0;
  let arr = sides.sort((a, b) => a - b);

  if (arr[2] < arr[0] + arr[1]) answer = 1;
  else {
    answer = 2;
  }return answer;
}
// 완 ㅠㅠ

// n2
// 1. sort() 메소드로 배열의 요소를 정렬, 가장 큰 값이 맨 뒤로
// 2. 삼항연산 활용
// 2-1. 정렬한 배열의 순서를 확인하고, 순서를 활용해서 조건을 만듦

// 민희
function solution(sides) {
  sides = sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}

//민규
function solution(sides) {
  result = sides.sort()[2] < sides.sort()[0] + sides.sort()[1] ? 1 : 2;
  return result;
}
// 완

// 유진
// sort검색좀..
function solution(sides) {
  let answer = 0;

  sides.sort((a, b) => b - a);
  return sides[0] < sides[1] + sides[2] ? 1 : 2;
}

// ㅠㅠ 완..

//기택
function solution(sides) {
  sides = sides.sort((a, b) => a - b); // 오름차순
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
   // 첫번째+두번째 값이 세번째보다 크면 1 같거나 말면 2
   
}

//완