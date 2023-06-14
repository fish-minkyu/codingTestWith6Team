// 배열 뒤집기

1;
function solution(num_list) {
  // new Array 생성
  // for 반복문 (let i = num_list.length; i >0; i--)
  // answer의 인덱스는 num.length-1 = num_list 인덱스는 i-1
  // answer 리턴

  let answer = []; // 빈 배열 생성
  for (let i = num_list.length; i > 0; i--) {
    // 반복문 돌려 i (큰 수 > 작은수)

    // num_list가 [1, 2, 3, 4, 5] 라고 했을 때, 
    // answer의 배열인덱스 [0, 1, 2, 3, 4]번째  = num_list[4, 3, 2, 1, 0] 번째 인덱스 (=5, 4, 3, 2, 1)
    answer[num_list.length - i] = num_list[i - 1];
  }
  return answer;
}

2;
function solution(num_list) {
  let answer = [];
  for (i = 0; i < num_list.length; i++) {
    answer[i] = num_list[num_list.length - i - 1];
  }
  return answer;
}




//민규
function solution(strlist) {
  var newStrList = []
  for (let i = 0; i < strlist.length; i++) {
    newStrList.push(strlist[i].length)
  }
  return newStrList
}

//민희
function solution(num_list) {
  var answer = [];
  var j = num_list.length
  for(var i = 1; i <= j; i++){
      answer.push(num_list[j-i])
  }
  return answer;
}
