// 3-2. 특정 문자 제거하기

// Q. function solution (문자열 my_string, 문자 letter) <<에서 letter 제거한 문자열 RETURN

// 1. .replace() 메소드 사용하여 특정문자 제거해보자
// error >> 문제를 읽고 바로 .replace() 메소드 부터 사용하여 풀었는데 오류.

// 2. 3-1 처럼 .split()을 씀. abcdef 중에서 f를 제외해야 하는거면 그 문자 기준으로 분리해도 갠춘않? letter를 기준으로 분리ㄱㄱ
// 2-1. 제거 한 후 join('')으로 다시 배열>문자열로 묶으면 되지않을까
//
function solution(my_string, letter) {
  return my_string.split(letter).join("");
}

// ----------------------------------
// 다른사람풀이-
// 아..replaceAll이 있었구나..ㅎ..몰랐음..ㅠ ㅜㅜ

// ※ .replace('찾을문자열', '바꿀문자열') : 얘는 첫번째로 발견된 문자열만 치환해줌
// ※ .replaceAll('찾을문자열', '바꿀문자열') : 전부 바꿔줌

function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}

// ㅠㅠ 와우..

// ------------------------------------------5/28 함수 안쓰고 다시 ㅠ

function solution(my_string, letter) {
  // my_string에서 letter를 제거...제거...어떻게 제거할까유..
  // 내 살이나..제거해줘라..

  // for문으로 반복 돌려서 letter와 같지않은 인덱스번호만 answer에 담자..

  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] !== letter) {
      answer += my_string[i];
    }//리턴 여기다 써서 에러남
  }
  return answer;
}
// ㅠ 이거 오래걸림..



// 기택
function solution(my_string, letter) {
    let answer = [];
    for(let i = 0; i < my_string.length; i++){
        let str = my_string[i];
        if(str === letter){
            continue;            
        } else {
            answer.push(str);
        }
    }
    return answer.join("");
}

//민희
function solution(my_string, letter) {
  let str = "";
  const arr = my_string.split('');
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== letter) str += arr[i];
  }
  return str;
}


//민규
function solution(my_string, letter) {
  var newString = ''
  for (let i = 0; i < my_string.length; i++)  
    if (my_string[i] === letter) {
      continue
    } else {
      newString += my_string[i]
    }
    return newString
}