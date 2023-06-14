// 1. 양꼬치
function solution(n, k) {
  // 총 가격 == 양꼬치 * n + 음료 * k - 서비스
  // 서비스 == 양꼬치 10인분당(<<Math.floor로 n/10 구하기) * 2000(음료수 1병)
  const service = Math.floor(n / 10) * 2000;
  return 12000 * n + 2000 * k - service;
}
