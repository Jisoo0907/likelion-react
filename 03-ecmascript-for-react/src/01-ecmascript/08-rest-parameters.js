// --------------------------------------------------------------------------
// rest parameters

function _sum() {
  console.log(Array.isArray(arguments));
  const numbers = Array.from(arguments); // 유사배열인지? 확인 해보자!
  console.log(Array.isArray(numbers), numbers.length); // numbers는 배열이니까 reduce 쓸 수 있음
  return numbers.reduce(
    /* reducer function */ (result, number) => result + number,
    0
  ); // reduce에 전달되는 게 reducer 함수
}

// 🔶 나머지 매개변수를 사용해 sum 함수 코드 로직을 다시 작성합니다.
// 참고: https://mzl.la/43Ro9yp
const sum = (firstParam, secondParam, ...restParams) => {
  console.log(Array.isArray(restParams));
  // return undefined 암묵적으로 undefined 반환
  console.log(firstParam, secondParam, restParams);
};

/* ------------------------------ reduce 실습 해보기 ----------------------------- */

let result1_1 = _sum(2, 3, 9, 12, 105); // arguments(일반 함수에서는 사용 o, 화살표 함수 x)
let result1_2 = sum(2, 3, 9, 12, 105);
console.log(Object.is(result1_1, result1_2)); // 두 값 비교

let result2_1 = _sum(90, 418, -7);
let result2_2 = sum(90, 418, -7);
console.log(Object.is(result2_1, result2_2));
