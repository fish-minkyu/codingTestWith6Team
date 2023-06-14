
// 제곱수 판별하기

// 구글구글링
//  Math.sqrt(x); - x의 제곱근을 반환한다
//  Math.pow(base, exponent) - base에 exponent를 제곱한 값을 반환한다


// 첨에 읽었을때 뭥미..? 뭔 말이지 했다가
// 어쨌거나 저쨋거나 정수라는거지? 그럼 나머지 연산자쓰자 (정수는 항상 1로 나누었을때 나머지 0)
// 구글구글링 했더니 제곱근 구해주는 메소드 찾고 + 나머지 연산자

function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

// ---도원님의 사고

// question
// function solution(n) {
//     1. 사실 무식하게 해결하거나 Math.sqrt를 쓰면 걍 풀리는 문제이긴한데 , 
//       for문을 얼마나 덜 돌리는 로직을 짤 수 있는지로 접근해본다.
//     2. 나는 여기서 매개변수 n을 2으로 나눈것의 몫만큼 돌아가는 포문을 만들고
//     (최소 제곱수인 4를 통과하기 위해 최대 2로까지밖에 못나눈다.)
//     3. 내부 로직에 두 조건문을 준다.
//     	3-1 i의제곱이 매개변수 n과 일치할때 (즉 , 제곱근을 발견했을때) return 1;
//   		3-2 i의제곱이 매개변수 n을 넘어섰을때 (즉 , 제곱근을 발견못하고 n보다 커져버렸을때) return 2;
// }

//넵

// 저 아직도 20살때 서든어택하던거 엄마한테 욕먹고있어요
// 그때 뒷통수 안떄린거 아직도 후회중이라고
// TRG 드세요

// 요즘 이상해요 서든
// 활 쏘ㅏ요
//???????????
// 와우 뿅망치//??로도 때리자나요
// 아 맞다 민규님은 뭐에요? // 리액트??

function solution(n){
  for(let i=1; Math.floor(n/2); i++){
    if(i*i === n){
      return 1;
    }
    if(i*i > n){
      return 2;
    }
  }
}
//왤케 식이 드럽져..?
//완.. 아 else if는 아닌거 같아요 if if 인거 같은데 왜 아닌지 못 설명하겠어요
// 모르게썽요 두개중에 걸려라 인거같은데 설명못하겠음 ㅠ

function solution (n) {
  for ( let i = 1; i <= n ; i++) {
   if (i*i === n) {
    return 1
   } else if (i*i > n) {
    return 2
   }
  }
}
// gg good game... 일단 완....
// good game..



function solution(n) {
  let i = 0;
  for( let i = 1; i <= n; i++)
  if (i*i === n) {
    return 1;
  } else (i*i > n) 
    return 2;  
}
//완
