// 3-1. 문자열 뒤집기

//  Q. 주어지는 문자열을 거꾸로 뒤집어서 RETURN;

// 1. .split()메서드 이용해서 문자열 쪼개주깅
// 2. .reverse()메서드 이용해서 역순으로 맹글어주기
// 3. join()메서드 이용해서 문자열로

function solution(my_string) {
  return my_string.split("").reverse().join("");
}

// 역순이라고 해서  바로 .reverse()부터 생각해서; 적용하니 에러;ㅜㅜ
// .reverse()는 '배열' 메소드

// .split()이 구분자를 기준으로 문자열을 분리, 결과를 배열로 반환. >> 그 반환한 '배열'로 reverse를 해줘야 함.

// .split() ↔ .join()  반대 역할 하는 메소드
// .join()은 인수를 접착제처럼 사용해 배열 요소를 모두 합친 후 하나의 '문자열'을 만들어 줌.





// -----------------------------------------------------------------5/28
// ㅜㅜ 서윤님이 와서 보고 함수 쓰지 말고 다시 풀라고함
// 맞말이라 다시 합니다.. ㅜㅜㅜㅜ

function solution(my_string) {
  // 조건문 or 반복문으로 어떻게 하면 문자를 거꾸로 뒤집을 수 있을까..?
  // jaron  >> noraj 로     bread >> daerb로

  // 반복문을 돌려서 (i=my_string.length-1;(길이보단 i인덱스 -1; i>=0 i--)
  // return += answer my_string[i];  (i인덱싱 -1씩 줄어드니까 4, 3, 2, 1, 이런식으로 그럼 글자 거꾸로 나오겠지?)

  let answer = '';
  for (let i = my_string.length - 1; i >= 0; i--) {
    answer += my_string[i];
  }
  return answer;
}

// 민희
function solution(my_string) {

  //.split('')을 통해 문자열을 쪼개서 배열로 만들기
  const a = my_string.split('');

  // .reverse()로 쪼개진 배열을 역순으로 바꾸기
  const b = a.reverse();

  // .join("")로 요소들을 문자열로 합치기
  const c = b.join("");

  // console.log(c);

  return c;
}

// solution('bread');
daerb



// 민규
function solution (my_string) {
  var newString = ''
  for (let i = my_string.length-1 ; i >= 0; i--) {
    newString += my_string[i]
  }
  return newString
}


// 기택

