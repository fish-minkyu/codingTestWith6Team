// 3-6 문자열 안에 문자열

// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
// 한글을 읽고있는데 왜 안 읽히냐..(예제 보고 알아들음)

function solution(str1, str2) {
  let answer = [];
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        answer.push(str2[j]);
      }
    }
  }
  if (answer.join("") === str2) {
    return 1;
  } else {
    return 2;
  }
}

// -----------------------------------5/28

// 함수 안쓴거 모르겠어요

// str1
// "ab6CDE443fgh22iJKlmn1o"

// str2
// "6CD"

//담아놓을 변수 활용 잘 하장

//민규
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

//민희
function solution(str1, str2) {
  // .includes() 를 사용해서 str1에 str2가 들어가 있는지 알아보기(trul, false로 반환)
  // true, false를 반환하는 것을 생각해서 삼항연산식으로 과정 만들기
  return str1.includes(str2) ? 1 : 2;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));
// 1
