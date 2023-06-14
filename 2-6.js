
// 옷가게 할인 받기
// 10만원 이상 5퍼 , 30만원 이상 10퍼 , 50만원 이상 20퍼 할인 해쥼
// 구매한 옷의 가격 price 지불해야할 금액 return

// else if 문 사용하여 할인율 Math.floor 이용하여 return하장
// 할인금액 = 가격 - (가격*가격별할인율)

function solution(price) {
  if (price >= 500000) {
    return Math.floor(price - price * 0.2);
  } else if (price >= 300000) {
    return Math.floor(price - price * 0.1);
  } else if (price >= 100000) {
    return Math.floor(price - price * 0.05);
  } else {
    return Math.floor(price);
  }
}

// 사실 이거 대충 풀고 제일 많이 푼 예제 밑에 적고 바로 넘어갔어요..(이실직고)
// 그래서 기억도 안ㄴ나요..저도 다시 풀어보겠습니다..

function solution(price) {
  if (price >= 500000) {
    return Math.floor(price * 0.8);
  } else if (price >= 300000) {
    return Math.floor(price * 0.9);
  } else if (price >= 100000) {
    return Math.floor(price * 0.95);
  } else {
    return price;
  }
}
// 완..



// ---------다른사람풀이

// function solution(price) {
//   if (price >= 100000 && price < 300000) {
//       return Math.floor(price * .95)
//   } else if (price >= 300000 && price < 500000) {
//       return Math.floor(price * .9)
//   } else if (price >= 500000) {
//       return Math.floor(price * .8)
//   } else {
//       return price
//   }
// }


function solution(price) {
  if(price >= 500000) {
     return Math.floor(price * 0.8)
  } else if (500000 > price && price >= 300000) {
     return Math.floor(price * 0.9)
  } else if (300000 > price && price >= 100000) {
     return Math.floor(price * 0.95) 
  } else {
      return price;
  }    
}
//완

function solution (price) {
  // 10만원 이상 5% 30만원 이상 10% 50만원 이상 20%
  if (price >= 100000 && price < 300000) {
      return Math.floor(price * 0.95)
  } else if (price >= 300000 && price < 500000) {
      return Math.floor(price * 0.9)
  } else if (price >= 500000) {
      return Math.floor(price * 0.8)
  } else {
    return Math.floor(price)
  }
}
// 완...

question
function solution(price) {
//     1. 내부변수 선언이 필요없는 로직이다.
//     2. 리턴에서 삼항연산자의 중첩을 통해 price가 500000이상 , 300000이상 , 100000이상 ,else
//     3. 일때의 총 네가지 삼항연산을 걸고 True일때 price에 각 0.8 ,0.9 ,0.95 곱한것의 몫
//     4. 최종 else일때 price를 그대로 반환하게 만들면 된다.
// }

// my solution
function solution(price) {
    return price>=500000 ? Math.floor(price*0.8)//1: price>=300000 ? Math.floor(price*0.9)//2
    : price>=100000 ? Math.floor(price*0.95)//3
    : price//4
}//무슨로직입니다. 1번은 무슨라인 2번은 무슨라인  
}

