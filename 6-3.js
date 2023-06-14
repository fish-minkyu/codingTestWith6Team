

// 6-3 개미 군단 ㅋㅋㅋ

// 문제 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ

// 사냥감의 체력 hp 매개변수
// 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return

// 공격력 ----
// 장군개미 5
// 병정개미 3
// 일개미 1 


// hp	      result
// 23	      5
// 24	      6
// 999	    201


// 더 적은 병력으로 효율적으로..사냥하기

// * 1~3번 Math.floor 메소드 사용
// 1. 장군개미 병력 = hp를 일단 가장 공격력이 큰 장군개미(ant5)의 공력력 5로 나눔 
// 2. 병정개미 병력 = 전체 hp에서 장군개미(ant5) 전체공격력빼고 병정개미(ant3) 공격력인 3으로 나눔
// 3. 일 개미 병력 = 일개미는 공격력 1이니까 전체 hp에서 -장군개미 공력력 -병정개미 공력력 뺀거 == 일개미 병력 수
// 4. 1 + 2 + 3 합 return

//도원 function solution() {
//   1. 각 5 3 1 로 나눈것의 몫을 받을 ans 변수 선언
//   2. 1을 제외한 5,3을 담은 army 배열 선언
//   3. army.forEach를 통해 각 요소로 hp를 나눈것의 몫을 ans에 더해주고
//   	3-1. 그후 해당 요소로 hp를 나눗셈 해준다.
//   4. ans에 남은 hp를 더해 반환한다.
//   (1로 나누어봤자 의미 없으니 1로 나누는 과정을 생략한 것)
// }




// 유진
function solution(hp) {
  let ant5 = Math.floor(hp / 5);
  let ant3 = Math.floor((hp - ant5 * 5) / 3);
  let ant1 = hp - ant5 * 5 - ant3 *3;
  return ant5 + ant3 + ant1
}


function solution(hp) {
  let ans = 0;
  let army = [5, 3, 1]
  army.forEach(도원 => {
      ans += Math.floor(hp/도원);
      hp = hp % 도원;
  })
  return ans;
} // 지금 거의 다 오심 ㅡㅜㅜㅜ심

//army.forEach(function(1))


function solution(hp) {
  let ans=0;
  const army = [5,3];
  army.forEach((a)=>{ans+=Math.floor(hp/a); hp%=a;});
  return ans+=hp;
}

//

//

// 너무 시간 많이 쓰나요..? sorry.. 아모른직다



// 완
// 엄마 근데 저 
// 이렇게 했었거든요??

//넹 근데 저기서 1을 빼면 왜 에러가 나는거져
//마지막에 리턴하는 부분에서 저랑 차이가 있는데 이따 제꺼 보여드리면서 설명드림 그래두 잘햇어여
//저거도 좋은 코드인데 , 저기서 foreach를 한바퀴 덜 돌리는 방법 한번 생각해보셈여
// 넵 ㅠ

//도원 function solution() {
//   1. 각 5 3 1 로 나눈것의 몫을 받을 ans 변수 선언
//   2. 1을 제외한 5,3을 담은 army 배열 선언
//   3. army.forEach를 통해 각 요소로 hp를 나눈것의 몫을 ans에 더해주고
//   	3-1. 그후 해당 요소로 hp를 나눗셈 해준다.
//   4. ans에 남은 hp를 더해 반환한다.
//   (1로 나누어봤자 의미 없으니 1로 나누는 과정을 생략한 것)
// }

//기택 (리신풀이방법) // 이쿠! ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ이쿸ㅋㅋㅋㅋ
function solution(hp) {
  let ant5 = Math.floor( hp / 5);
  let ant3 = Math.floor((hp - ant5 * 5) / 3);
  let ant1 = hp - ant5 * 5 - ant3 * 3;
  return ant5 + ant3 + ant1;
}

//기택 (소라카풀이법, 소라카 궁 필요.절실.) ㅋㅋㅋㅋㅋㅋㅋㅋㅋ 도랏나 
// 저 리신 궤 잘하는데 ㅋㅋ
function solution(hp) {
  var ans1 = 0;
  var ans2 = 0;
  var ans3 = 0;

  army.forEach(num => ans1 : ) 
}
//ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷforEach메서드 이해가 



// 민규 (유진님 문제 풀고 도원님 문제 풀기)

// version_유진님
function solution(hp) {
  let antG = Math.floor(hp / 5)
  let antS = Math.floor((hp - antG*5)/ 3)
  let antW = hp - antG*5 - antS*3
  return antG + antS + antW
}
// 완, 공식을 짜는게 생각보다 헷갈리네요

// version_도원님

//도원 function solution() {
//   1. 각 5 3 1 로 나눈것의 몫을 받을 ans 변수 선언
//   2. 1을 제외한 5,3을 담은 army 배열 선언
//   3. army.forEach를 통해 각 요소로 hp를 나눈것의 몫을 ans에 더해주고
hp가 103일 때, 5로 103을 나눈 몫 = 20
3으로 103을 나눈 몫 = 34
ans = 54
//   	3-1. 그후 해당 요소로 hp를 나눗셈 해준다.
5 => 3
3 => 1
//   4. ans에 남은 hp를 더해 반환한다.
//   (1로 나누어봤자 의미 없으니 1로 나누는 과정을 생략한 것)
// }

function solution(hp) {
   var ans5 = 0
   var ans3 = 0
   var ans1 = 0
   let army = [5, 3]
   army.forEach(function (item) {
    ans5 = hp/army(item)
    ans3 = 
   })
}
// ㅇㅁㅇ..?

// 민희_1
function solution(hp) {
  var answer = 0;
  let ant5 = Math.floor(hp/5);
  let ant3 = Math.floor((hp-ant5*5)/3);
  let ant1 = hp-ant5*5-ant3*3
  answer = ant5-ant3-ant1
  return answer;
}

// 민희_2
function solution(hp) {
  var answer = 0;

  // 1. 각 5 3 1 로 나눈것의 몫을 받을 ans 변수 선언
  let ant = 0;

  // 2. 1을 제외한 5,3을 담은 army 배열 선언
  let army = [5, 3];

  //3. army.forEach를 통해 각 요소로 hp를 나눈것의 몫을 ans에 더해주고
  //3-1. 그후 해당 요소로 hp를 나눗셈 해준다.

  army.forEach()

  return answer;
}