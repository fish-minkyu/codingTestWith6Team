
// 6-1 자릿수 더하기

// 정수 n의 각 자리 숫자의 합을 return

// n	      result
// 1234	    10
// 930211	  16

//(풀이 1)  for of 활용
// 1. 정수 n이 숫자형이므로 .split을 사용하려면 문자로 형변환> n+문자('') (또는 String(n))
// 2. .split('') 메소드 사용하여 한글자씩 분리 ['1', '2', '3', '4']
// 3. for of 활용
// 3-1. answer = answer + i * 1    i*1 다시 숫자로 형변환 (또는 pasrseInt(i))
// 4. return answer

function solution(n) {
  n = (n + '').split('');
  let answer = 0;
  for (i of n) answer += i * 1;
  return answer;
}


//(풀이 2) .split() + .reduce() 활용
// 1. 정수 n이 숫자형이므로 .split을 사용하려면 문자로 형변환> n+문자('') (또는 String(n))
// 2. .split('') 메소드 사용하여 한글자씩 분리
// 3. .reduce() 메소드 사용 
// 3-1. .reduce(누적값, 현재값 => 결과, 초깃값);   (누산기라고 이해하면 쉬울듯)

// cf. reduce() 함수의 두번째 파라미터 cur에 초기값 0으로 잡고
// 첫번째 파라미터 acc에는 누적값, 두번째 파라미터 cur에 현재값 1, 2, 3을 숫자형으로 바꿔서(parseInt(cur)나 cur*1) 누적값에 더해준다. 

// 4. 모든 자릿수 더한 값 return


function solution(n) {
  return (n + '').split('').reduce((acc , cur) => acc + cur * 1, 0);
}


// function solution() {
//   1. for (let i = 0; i <= 6; i++) 선언 [매개변수 최대값이 1,000,000이므로 i<=6]
//   2. 매개변수 n이 10의 i제곱보다 작을때 , n의 자릿수 cnt는 i이다.
//    2-1 . Math.pow(n,i) n의 i제곱의 수를 구하는 메서드
//   3. 자릿수를 구하고 반복문을 break; 한다.
//   4. n의 자릿수만큼 반복하는 for (let i = 0; i < cnt; i++) 반복문을 만들고
//     4-1. n에서 10을 나눈것의 나머지를 ans에 더하는 식으로 각 1,10,100,...자리의 숫자를 더해준다.
//     4-2. n을 10으로 나눈것의 몫을 n에 대입한다.
//     4-3 자릿수만큼 반복한다.
//   5. ans를 반환한다.
// }

// 유진  gpgp antmsakfdlswl ahfmrfrpTek ㅋㅋ? bㅠㅠ 모르겠어요 한글을 읽어도 무슨말인지 모르겠으무ㅜㅜ
// 설명 너무 장황하게 ㅎㅋㅋㅇㅋ;

function solution(n) {
  let ans = 0;
  let cnt = 0;

  for (let i = 0; i <= 6; i++) {
    if(Math.pow(10,i)>n){
      cnt=i;
      break;
    }
  }

  for (let i = 0; i < cnt; i++) {
    ans += n%10;
    n = Math.floor(n/10);
  }

  return ans;
}



function solution(n) {
  let ans  = 0;
  let cnt = 0;
  for (let i=0; i <=6; i++) {
    if(n < Math.pow(10, i)) {
    cnt =i; // 이것도 첨에 걍 cnt = 1이라고 씀;
    break;
  }
}
  for (let i =0; i <cnt; i++) {
    ans += n % 10;
    n = Math.floor(n / 10);
    // 난 그런거 몰러유 몰러몰러몰러유
  }
return ans;
}
//  cnt 변수선언을 안했었어요...+ {} 위치 + return 엉뚱한데다가 씀..
// 다슬기 택배와서..냉장고 넣어야하는데...
// 그럼 넣고와도되나요..?
// 3분컷 가능인가요? // ssap 가넝

// 민규

let n = 98, 10의 2제곱보다 작음, n의 자릿수 cnt는 2이다. // 오

function solution(n) {
  let ans = 0
  let cnt = 0
  for (let i = 0; i <= 6; i++) {
    if (n < Math.pow(10, i)) {
      cnt = i
      break 
  }
}
  for (let i = 0; i < cnt; i++) {
    ans += Math.floor(n / (10 * i)) % 10 
  }
  return ans
}
// ㅈㅈ good game! Yeah~ 


//기택

function solution(n) {
  var answer = 0;
  var m = String(n);//이게 지리는데요왜 string으로 만들지 했는데 이렇게 해도 자리수 구해지네 생각해보니 굿
  
  for( i = 0; i < m.length; i++) {
    answer += Math.floor(m[i]);
  }
    return answer;
}//오................................ 개참신
// mathfloor될줄몰랐는어요ㅋㅋㅋㅋ

//기택2

function solution(n) {
  
}

// 민희
function solution(n) {
    
  var answer = 0;

  var m = String(n);
  // n = (n + '').split('');
  
  for (i of m) answer += i * 1;
  return answer;

}
console.log(solution(1234))
