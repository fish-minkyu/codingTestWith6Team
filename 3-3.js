// 3-3. 문자 반복 출력하기

// function solution(my_string, 정수n) << n만큼 반복한 my_string 들어있는 각 문자를 RETURN
// 1. ...spread 문법 사용 ['a', 'b', 'c'..] ,
// 2. map함수 이용해서 각 문자마다  n번씩 repeat

// map() -> 값과 인덱스를 인자를 받아 자동으로 for문을 돌려 값을 빼도록 해줌

// ex)
// const arr = [1, 2, 4, 8];
// const map1 = arr.map(x => x * 2)
// console.log(map1);
// [2, 4, 8, 16]

// 3. join('')d

function solution(my_string, n) {
  return [...my_string].map((x) => x.repeat(n)).join("");
}

// ------------------------------------5/28

function solution(my_string, n) {
  // 반복문 돌려벌여 각 인덱스 번호 n번만큼
  let answer = "";
  for (i = 0; i < my_string.length; i++) {
    // answer += my_string[i] 는 알겠는데 n번 반복해서 담는 건 어떻게 담는거야
    //계속 함수 .repeat(n) 밖에 생각이 안남 ㅠㅠ
    // 아 ㅠ 이중for문 ㅠ 생각못함
    for (let j = 0; j < n; j++) {
      answer += my_string[i];
    }
  }
  return answer;
}


// 민희
function solution(my_string, n) {
  var answer = '';

  // for문을 사용
  // for문1 : i는 0부터; i는my_string의길이수_5보다 작고; my_string의 길이 수 보다 커지면 반복중단 한다는 의미를 지님(->중단 전까지 for2를 반복할것)
  // for문2 : j는 0부터; j는 n보다 작고; n보다커지면 answer를 출력하지 않을 것
  // answer : 반복이 끝날때 까지의 결과들이 쌓여감

  for (var i = 0; i < my_string.length; i++) {
      for (var j = 0; j < n; j++) {
          answer += my_string[i];
      }
  }

  // console.log(answer);
  return answer;
}

// solution('hello', 3)
// hhheeellllllooo

// i=0 -> j = 0 -> 이때의 i는 0으로 my_string[0] -> h -> answer = h
// i=0 -> j = 1 -> 이때의 i는 0으로 my_string[0] -> h -> answer = hh
// i=0 -> j = 2 -> 이때의 i는 0으로 my_string[0] -> h -> answer = hhh
// i=1 -> j = 0 -> 이때의 i는 1으로 my_string[1] -> e -> answer = hhhe
// 의 반복으로 hhheeellllllooo가 되는것

// 기택

function solution(my_string, n) {
  let result = '';
  for(let i = 0; i < my_string.length; i++){
     result += my_string[i].repeat(n);
  }
  return result;
}

// 민규
function solution(my_string, n) {
  var repeatString = ''
  var newString = ''
  for (let i = 0; i < my_string.length; i++) {
    for (let j = 1; j <= n; j++) {
      repeatString += my_string[i]
    }
  }
  newString += repeatString
  return newString
}