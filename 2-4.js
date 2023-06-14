//4. 점의 위치 구하기  ★ 어려웠당
// 일단 첨엔 한글만 읽었는데도 무슨말인지 이해가 안갔다. ㅋㅋㅋㅋㅋㅋㅜ부끄; 차근차근 읽어보자
// 제 1사분면에 있으려면 dot[0]>0, dot[1]>1
// 제 2사분면 dot[0]<0, dot[1]<0
// 제 3사분면 dot[d]<0, dot[1]<0
// 제 4사분면 dot[d]>0, dot[1]<0

// question
// function solution(dot) {
//     1. x좌표와 y좌표를 곱해 부호를 구한다.
//     2. 두좌표의 곱이 + 라면 1 or 3 사분면이고,
//     3. 곱이 - 라면 2 or 4 사분면이다.
//     4. 부호를 담을 sign 변수를 선언 및 두 좌표를 곱한 값으로 대입 초기화 해주고,
//     5. 부호가 +일때 x좌표가 0보다 큰지 아닌지로 나누어 1/3사분면으로 분리 리턴,
//     6. 아닐때도 x좌표를 기준으로 2/4분면으로 분리해 리턴하면 된다.
// }

function solution1(dot){
  // 사분면의 조건문
  // 1사분면, x 양수 y 양수
  if (dot[0] > 0&& dot[1] > 0) {
    return ans = 1
  }
  // 2사분면, x 음수 y 양수
    else if (dot[0] < 0 && dot[1] > 0) {
      return ans = 2
    }
  // 3사분면, x 음수 y 음수
  else if (dot[0] < 0 && dot[1] < 0) {
    return ans = 3
  }
  // 4사분면, x 양수 y 음수
  else {
    return ans = 4
  }
}

function solution2(dot){
  
  if( dot[0] > 0 && 0 < dot[1] ) {
      return 1;
  } else if ( dot[0] < 0 && 0 < dot[1] ) {
      return 2;
  } else if ( dot [0] < 0 && 0 > dot [1]) {
      return 3;
  } else {
    return 4;
  }
  }

  function solution(dot) {
    let sign = dot[0]*dot[1];
    if(sign >0){
        return dot[0]>0 ? 1 : 3;
    }else{
        return dot[0]>0 ? 4: 2;
    }
}
// 천재다....
// ㅋㅋㅋ
  // x 음수, y 양수 제2사분
  
  // x  y 좌표가 모두 음수 제3사분
  // x  양수, y 좌표가 음수 제4사분
// dot의 길이 = 2
// dot[0]은 x좌표를, dot[1]은 y좌표를 나타냅니다
// -500 ≤ dot의 원소 ≤ 500
// dot의 원소는 0이 아닙니다.
  // return
// }

















1;
function solution(dot) {
  if (dot[0] > 0 && dot[1] > 0) {
    return 1;
  } else if (dot[0] < 0 && dot[1] > 0) {
    return 2;
  } else if (dot[0] < 0 && dot[1] < 0) {
    return 3;
  } else {
    return 4;
  }
}

2;
// dot[0] 부분이 제1, 4분면이 중복돼서 if중첩 써보장
function solution(dot) {
  if (dot[0] > 0) {
    if (dot[1] > 0) return 1;
    else return 4;
  } else if (dot[0] < 0) {
    if (dot[1] > 0) return 2;
  } else {
    return 3;
  }
}

// 그거나..그건ㄱr....어렵다.. ㅠㅠ



// 남이 푼 문제 ---------위에랑 똑같은데 삼항연산자..이해는 되는데 내가 이렇게 못품....^ㅡ ^
function solution(dot) {
  if (dot[0] > 0) return dot[1] > 0 ? 1 : 4;
  // - dot[0]은 x 값을 나타낸다.
  // - x 값이 0 이상이면
  // - dot[1] >=0 ? 1 : 4; 을 반환한다.
  // 만약 y값인 dot[1]이 0보다 같거나 크다면 1를 반환하고 아니면 4를 반환한다.
  return dot[1] > 0 ? 2 : 3;
  // - 만약 그 위에 조건이 다 아니라면 ( x값이 0보다 같거나 작다면)
  // - y값인 dot[1]이 0보다 같거나 크다면 2를 반환하고 아니면 3을 반환한다.
  // - 조건 중 0,0은 입력되지 않는다라고 명시되어 있으므로 신경쓰지 않는다.
}


function solution(dot) {
  return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[0] < 0 ? 2 : 4;
}