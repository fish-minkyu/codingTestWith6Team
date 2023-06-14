

// 6-2 순서쌍의 개수

// 순서쌍 == 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기
// 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return

// n	    result
// 20	    6
// 100	  9

// 말이 이상한가요..sorry..
// 이영지님이 부릅니다. not sorry
// 맞아요 민규님 맨날 함박웃음 짓고 있잖아요 ^ㅡㅡㅡㅡㅡㅡㅡ^ 건치미소
// ㅋㅋㅋㅋㅋㅋㅋㅋㅋ

// 별로요... 삶에 낙이 없어요
// ㅋㅋ 카톡할때 잘 웃으시던데요
// ㅋㅋㅋ 지금도 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ

// ㅈㅅ ㅋ 저희 내일 헤어짐 ㄹㅇ 전역할때 국밥하기로 해놓고 바로 안만남
// ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
// 도원님이 절 웃게 만드셨습니다
// 이제 책임지시죠
// 마치 신병대에서 친해지고 헤어지는 느낌
// 미필 ㅠㅠ
// ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ ㄹㅇ 아무도 안만남


// 1. answer 배열 생성
// 2. for 문안에 if문 사용
// 2-1. if문 조건 n을 i로 나눴을 때 나머지가 0이면 (==약수면) answer 배열에 넣기
// 3. answer 배열에 담긴 약수들의 수 = 순서쌍의 수 👉 return

//약수의 갯수 구하기
function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer.push(i);
  }
  return answer.length;
}



//기택 
function solution(n) {
  var answer = []
  for ( let i = 1; i <= n; i++) {
    if ( n % i === 0 ) {
      answer.push(i)
    }
  }
  return answer.length;
}
  


// 민규
function solution(n) {
  let ans = []
  for (let i = 0; i <= n; i++) {
      if (n % i === 0) ans.push(i)
  }
  return ans.length
}
//완