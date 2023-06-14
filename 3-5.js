// 3-5. 모음제거

// 정규표현식 /aeiou/
// + replace 사용하여 모음들 > ''

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

// 처음에 괄호 안치고 했다가 에러남;; [aeiou]
// 괄호 쳐야 순서 상관 안힌다네.. ㅠ

// -----------------------------------------------5/28

function solution(my_string) {
  let answer = "";
  for (i = 0; i < my_string.length; i++) {
    if (
      my_string[i] != "a" &&
      my_string[i] != "e" &&
      my_string[i] != "i" &&
      my_string[i] != "o" &&
      my_string[i] != "u"
    ) {
      answer += my_string[i];
    }
  }
  return answer;
}

//ㅋㅋㅋ..맞았다는게..신기하네....


// 기택

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}

//민희
function solution(my_string) {
  var answer = my_string;

  var del = my_string.replace(/a|e|i|o|u/g, "");
  // console.log(del);
  return del;
}

//민규
function solution (my_stirng) {
  var newString = ''
  for (let i = 0; i <= my_stirng.length-1; i++) {
    if (my_stirng[i] === 'a') {
      continue
    } else if (my_stirng[i] === 'e') {
      continue
    } else if (my_stirng[i] === 'i') {
      continue
    } else if (my_stirng[i] === 'o') {
      continue
    } else if (my_stirng[i] === 'u') {
      continue
    }else {
      newString += my_stirng[i]
    }
  }
  return newString
}

