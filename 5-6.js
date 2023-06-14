// n1
// 이중 for문 - if문 사용
// 1. for1 - s1의 배열 돌기
// 2. for2 - s2의 배열 돌기
// 3. if문 사용
// 3-1. 조건 : 문자열 s1의 i번째 = s2의 j번째 -> answer을 하나씩 더해감

// 민희
function solution(s1, s2) {
  let answer = 0;

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        answer++;
      }
    }
  }
  return answer;
}

// 유진
function solution(s1, s2) {
  let answer = 0;

  for (let i=0; i<s1.length; i++){
    for (let j=0; j<s2.length; j++){
      if(s1[i] === s2[j]) answer++;
    }
  }
  return answer;
}

function solution(s1, s2) {
  const answer = s1.filter((c) => s2.includes(c));
  return answer.length;
}

// filter(function())

// 필터는 forEach랑 원리가 비슷

//

// s1 a b c 
// s2 a b c d e true
//answer = [a,b,c]

// s1 . filter a b c 
//굳...x2 x3 x4 x5 x6x7x8x9x7x8x9x7x8x9x9

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// // 완

// 엄마 여기서 무슨 메소드 사용하면 좋나여??
// 어머니! 날 보고 있다면 정답을 알려줘!
// ㅋㅋㅋㅋㅋㅋㅋㅋ 걍 부르세요 앞으론
// 근데 진도 진짜 다들 너무 빠르신데요 흠 식사하고 와서 뭐해야되요 저희 빼이

// 오 유진님이 오늘 저녁 사주시나요? 감사합니다 ㅎㅎ??
// 해드세요 ㅠㅠ
// 앞치마 지원 가능
// 가지고옵니다
// 앞치마 주시죠
// 경기도 멀어여


//민규
function solution(s1, s2) {
    var num = 0
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j]) num++
        }
    }
    return num
}


// 완
// 러직 빼이

//감↗사↘합↗니↘두zz 
// 빼이

function solution(s1, s2) {
    var answer = 0;
    
    for( i = 0; i < s1.length; i++) {
        for ( j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j]) answer++
        }
    }
    return answer;
}
//완