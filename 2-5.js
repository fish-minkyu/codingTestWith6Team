
// 아이스 아메리카노 
// 머쓱머쓱 얼죽아
// 아메리카노 5500원 왜케비싸요
// 머쓱이가 마실 수 있는 [아메리카노의 잔 수 , 남는 돈] 배열로 return


// 0. 빈 배열 생성.. let 변수명 = new Array ();

// 1. 배열[0]번째 : 머쓱이가 가진 돈 / 5500 = 살 수 있는 아메리카노 잔 수
// money / 5500 >> Math.floor() 사용하기

// 2. 배열[1]번째: 가진 돈 - [살 수 있는 아메리카노 잔 수 =배열 0번] * 5500 = 남은 돈

function solution(money){
  let answer = new Array (0, 0);
  answer[0] = Math.floor(money / 5500);
  answer[1] = money - answer[0] * 5500;
  return answer
}
// https://ko.javascript.info/array
// new Array() 요건 안쓰는게 좋을 것 같네요 ㅠ_ㅠ 
// let arr = new Array(2) 요런 실수 생기는 경우가 많을 것 같아요 방금 처럼
// 저도 생각 없이 쓴거라 대괄호 쓰는게 좋은것같아요

// 저거는 구조분해할당이 아닌데 글쓴분이 잘못 이해 하셧나봐요 아 굳이 따지면 맞기는 한데.. ㅋㅋ
// 보편적으로 쓰이는 구조분해할당은 [...dot] 이런식으로 매개변수로 받은 객체를 전체풀기 하는 알집같은 느낌으로 마니쓰여요
// 저것도 하나의 방법이긴 한데 , 알고리즘 핵심은 가독성이랑 성능이라서 굳이 필요하진 않다고 보긴해여 이 문제에서는
// 오오오...감사합니다...만약에 효율적인 방법이면 이해하고 싶었어요
// 나중에 프로그램 짜실때 객체를 딴데서 받아다가 그 객체를 매서드에서 써야할때가 오거든요 그때 많이 접하게 되실거에요 구조분해할당은 안겪고싶네요...ㅋㅋ은
//저도 잘 설명드리고싶은데 코딩 일년 쉬다가 와서 바로 복귀한거라 가물가물한게 많네요 ㅋㅋ..
// 시간 내주셔서 감사할따름입니다 
function solution1(money) {
  var ans = [];
  let coffee = Math.floor(money / 5500)
  let change = money - (5500 * coffee)
  return ans = [coffee, change]
}
// 완

solution([Math.floor( money / 5500), ( money % 5500)])

function solution(money) {
  return [Math.floor( money / 5500), ( money % 5500)]
  }
//완

// 와우 완전 간결하네완
// 지우지 마세요..저 보게..