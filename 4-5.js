

// 4-5 배열 원소의 길이

// // strlist 각 원소의 길이를 담은 배열을 return

// ex
// ["We", "are", "the", "world!"]	[2, 3, 3, 6]
// ["I", "Love", "Programmers."]	[1, 4, 12]

function solution(strlist) {
  // answer 빈 배열 생성
  // for문 돌리기 
  // answer [인덱스] == strlist의 인덱스. 길이

  let answer = [];
  for (let i = 0; i < strlist.length; i++) {
    answer[i] = strlist[i].length;
  }
  return answer;
}


["We", "are", "the", "world!"]	[2, 3, 3, 6]
["I", "Love", "Programmers."]	[1, 4, 12]

//민규
function solution(strlist) {
  var newStrList = []
  for (let i = 0; i < strlist.length; i++) {
    newStrList.push(strlist[i].length)
  }
  return newStrList
}