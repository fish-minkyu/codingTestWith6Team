// n1
// 1. sort로 배열 정렬하고,
// 2. 나누기 연산자와 몫을 구하는 메소드를 활용해서 가운데 값을 구함
// 2-1. 여기서 가운데 값은 인덱스 번호에 따른 것임을 체크

// 민희
function solution(array) {
  // sort로 배열 정렬하고,
  const arr = array.sort((a, b) => a - b);

  // array = [1, 2, 7, 10, 11]경우
  // arr.length/2를 하면 인덱스번호로했을때 요소가 5개이면 길이 4로 인식 / 2 하면 = 2이고
  // 배열 array에서 2이면 3번째로 중앙값 7이 나옴
  return array[Math.floor(arr.length / 2)];
}
console.log(solution(Math.floor[1, 2, 7, 10, 11]));

// 유진
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[Math.floor(numbers.length / 2)];
}
//완

//민규
function solution(array) {
    const arr = array.sort((a, b) => a - b)
    return array[Math.floor(arr.length/2)]
}
// 완

// 화이팅!!6조!!
// 저도 분당에 집갖고싶어요
// 파이팅ㅎㅎ
// 저는 그냥 집 갖고싶어요
// 강쥐집 요

// 전 고양이 

//기택
function solution(array) {
    array = array.sort((a, b) => a - b); // 오름차순
    return array[Math.floor(array.length / 2)]; 
}