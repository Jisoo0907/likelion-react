export function typeOf(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
// Object.prototype.toString.call(data) - data의 내부 속성을 문자열로 표현
// JS의 객체는 모두 toString 메서드가 있음
// 이를 통해 객체의 자료형을 [Object Type] 형식으로 반환할 수 있음
// call(data)를 사용하면 data의 자료형 명확하게 알 수 있음
// call() => 함수를 호출하면서 첫 번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩함
