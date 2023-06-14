

// 6-5 문자열 정렬하기
// my_string 안에 있는 숫자만 골라서 오름차순 정렬한 리스트 return



// 1 ≤ my_string의 길이 ≤ 100
// my_string에는 숫자가 한 개 이상 포함되어 있습니다.
// my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다. 

// my_string	      result
// "hi12392"	      [1, 2, 2, 3, 9]
// "p2o4i8gj2"	    [2, 2, 4, 8]
// "abcde0"	        [0]



// function solution(my_string) {    
//     1.my_string을 분리한것에
//     	1-1 filter를 돌려서 숫자에 해당하는 녀석들만 뽑아내서 배열을 만든후
//         1-2 오름차순 정렬해서 리턴한다.
// }

// 유진
function solution(my_string) {
  let str = my_string.split('');
  let answer = []; 
  for (i=0; i < str.length; i++) {
    if(!isNaN(str[i])) answer.push(Number(str[i]))
  }
  return answer.sort((a,b) => a - b);
}
// 완

//arr.filter(callback(element[, index[, array]])[, thisArg])

// 필터는 forEach랑 원리가 비슷

// s1 a b c 
// s2 a b c d e true
//answer = [a,b,c]

// s1 . filter a b c 
//굳...x2 x3 x4 x5 x6x7x8x9x7x8x9x7x8x9x9

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// // 완



function solution(my_string) {
  let str = my_string.split('') //어제썼는데 또 까먹..검색점여
  let ans =[];
  // ans.push (str.filter(s => Number(s)));
  ans.sort((a,b) => a - b);
  return
  뷁
}

//기택
function solution(my_string) {   
    return Array.from(my_string).filter(!isNaN.sort((a,b) => a-b))
} //욕하면안되잖아요 그쵸 하 my_string.split('')쵸


// 민희
function solution(my_string) {
    //var answer = [];

    let arr = my_string.split('');
    
    //1-1 filter를 돌려서 숫자에 해당하는 녀석들만 뽑아내서 배열을 만든후    
    const answer = arr.filter(Number)
    
    return answer
}

console.log(solution("p2o4i8gj2"))


// 민규1
// for문 or forEach문 사용
// Number메소드 사용으로 숫자 전환
// sort함수 사용

function solution(my_string) {
    arr = []
    const strs = [...my_string]
    strs.forEach((a) => {
        arr.push(Number(a))
    })
    return arr.sort((a, b) => a-b)
}

// 민규2
function solution(my_string) {    
//     1.my_string을 분리한것에
    const strs = [...my_string]
//     	1-1 filter를 돌려서 숫자에 해당하는 녀석들만 뽑아내서 배열을 만든후
    let filterNumber = strs.filter(str => {
        return Number(str)
    })
//         1-2 오름차순 정렬해서 리턴한다.
}
// 이것도 gg...
//filter 왜케 어려워여

function solution(my_string) {    
    return my_string.split("").filter(도원 => !isNaN(도원)).map(Number).sort((a, b) => (a - b));
}

// [3,2,1,4]

// [1,2,3,4]

// filter( true ) => [1,2,3,4,5]

//

// true 

// 도원님 머릿속에 들어가보고 싶다..