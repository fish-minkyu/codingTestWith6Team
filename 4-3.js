

// 4-3 짝수 홀수 개수

function solution(num_list) {
  // for문으로 반복돌려서
  // num_list[i]번째 요소가 if 조건문으로 짝수인지 홀수인지 거르기
  let answer = [0, 0];
  for (i of num_list) {
    if (i % 2 == 0) {
      answer[0]++;
    } else {
      answer[1]++;
    }
  }
  return answer;
}


//민규
function solution(num_list) {
  var num1 = 0
  var num2 = 0
  for (let i = 0; i < num_list.length; i++) {
      if (num_list[i] % 2 === 0) {
          num1++
      } else {
          num2++
      }
  }
  return [num1, num2]
}

//민희
function solution(num_list) {
	var answer = [0, 0];
    // var answer = [];
    let a = 0;
    let b = 0;

    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            a++;
        } else if (num_list[i] % 2 !== 0) {
            b++;
        }

    }
    return answer = [a, b];
}

console.log(solution([1, 2, 3, 4, 5]));