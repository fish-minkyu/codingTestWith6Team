// n1
// 1. for문 활용(n이하인것 체크)
// 2. for문 안에 if문 사용
// 2-1. if문 조건 - %연산자 활용으로 나머지가 1이면 홀수
// 2-3. 반환할 answer에 조건에 만족하는 i값을 계속해서 담고 for문에 맞는 조건이 끝나면 끝

// 민희
function solution(n) {
  var answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer.push(i);
    }
  }
  return answer;
}

// 유진

function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !==0)answer.push(i);
  }
  return answer;
}

//완.. 똑같구려..

//민규
function solution(n) {
  var array = []
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
      array.push(i)
    }
  }
  return array
}
// 완


//기택
function solution(n) {
    var answer = [];        
    
    for ( i = 1; i <= n; i++)
        if (i % 2 === 1) {
            answer.push(i);
        }
    return answer;
}

//완