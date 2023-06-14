// 6-4. 숨어있는 숫자의 덧셈(1)

// my_string안의 모든 자연수들의 합을 return

// my_string	        result
// "aAb1B2cC34oOp"	  10
// "1a2b3c4d123"	    16

// (풀이 1. for of - if 활용)
// 1. answer 변수 선언
// 2. str 변수 선언
// 2-1. .split() 메소드로 my_stirng 한글자씩 분리
// 3. for of문 활용
// 3.1 if문 활용 str안의 숫자형 i = true 라면  answer 쏙쏙..더해주세요..
// 4. return answer..

// 도원
// function solution() {
//   1. 숫자들을 더해줄 ans변수선언
//   2. my_string의 length만큼 반복할 for문을 선언
//   	2-1 isNaN메서드를 통해 각요소를 조회하며 , 숫자에 해당하는 요소만 parseInt를 거쳐 ans에 더해준다.
//   3. ans 반환
// }

function solution(my_string) {
  let answer = 0;
  let str = my_string.split("");
  for (let i of str) {
    if (Number(i)) answer += Number(i);
  }
  return answer;
}

// 유진

function solution(my_string) {
  let ans = 0;
  for (i = 0; i < my_string.length; i++) {
    if (isNaN(my_string[i])) {
    } else ans += parseInt(my_string[i]);
  }
  return ans;
}
// wan..
// 너진쪼r 쪼r중노r
// 너진쪼r 쪼r중노r// 너진쪼r 쪼r중노r// 너진쪼r 쪼r중노r// 너진쪼r 쪼r중노r// 너진쪼r 쪼r중노r// 너진쪼r 쪼r중노r// 너진쪼r 쪼r중노r

// 어머님 이건 my_string 형변환 안합니까???
// 넹 아하 네넹 is NaN 은 그ㅑㄴㅇ 트루 펄스만 반환하는 건가여? ㅇㅇ
// 넹 마지막에만 parseint로 string요소에서 숫자 뽑아내는 용도로 쓰면되여

// parseInt 대신 Number는 안되나요?
// 결과 통과만 되면 오케이 입니다 오궤이~
// 오케~ let's go

//기택

function solution(my_string) {
  var answer = 0;
  for (i = 0; i < my_string.length; i++) {
    if (isNaN(my_string[i])) {
    } else {
      answer += parseInt(my_string[i]);
    }
  }
  return answer;
} // 민규님 풀이보고 힌트를 얻음 굳굳

//민희_1
function solution(my_string) {
  // 1. answer 변수 선언
  var answer = 0;

  // 2. str 변수 선언
  // 2-1. .split() 메소드로 my_stirng 한글자씩 분리
  var str = my_string.split("");

  // 3. for of문 활용
  // 3.1 if문 활용 str안의 숫자형 i = true 라면  answer 쏙쏙..더해주세요..
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) answer += Number(str[i]);
  }

  // 4. return answer..
  return answer;
}

//민희_2ㅅ
function solution(my_string) {
  // 1. 숫자들을 더해줄 ans변수선언
  var ans = 0;
  // 2. my_string의 length만큼 반복할 for문을 선언
  // 2-1 isNaN메서드를 통해 각요소를 조회하며 , 숫자에 해당하는 요소만 parseInt를 거쳐 ans에 더해준다.
  for (let i = 0; i < my_string.length; i++) {
    // i 숫자가 아니면,,,,,,,트루 이었[, 트루면, ans담아,, 뭘담지, 숫자를
    if (isNaN(my_string[i])) {
    } else {
      ans += parseInt(my_string[i])
    }
  }

  // 3. ans 반환
  return ans;
}

// 민규1
function solution(my_string) {
  let ans = 0;
  let str = my_string.split("");
  for (var i of str) {
    if (Number(i) === true) ans += Number(i);
  }
  return ans;
}
// 완

//민규2

// 도원
// function solution() {
//   1. 숫자들을 더해줄 ans변수선언
//   2. my_string의 length만큼 반복할 for문을 선언
//   	2-1 isNaN메서드를 통해 각요소를 조회하며 , 숫자에 해당하는 요소만 parseInt를 거쳐 ans에 더해준다.
//   3. ans 반환
// }

function solution(my_string) {
  let ans = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (isNaN(my_string[i])) {
    } else {
      ans += parseInt(my_string[i]);
    }
  }
  return ans;
}

// 완




// 도원 solution
function solution(my_string) {
  let ans=0;
  let ans2=true;
  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(my_string[i])) ans += parseInt(my_string[i]);
  }
  return ans;
}

// best solution
function solution(my_string) {
    return [...my_string].reduce((acc,cur)=>Number(cur) ? +acc + +cur : acc, 0)
}