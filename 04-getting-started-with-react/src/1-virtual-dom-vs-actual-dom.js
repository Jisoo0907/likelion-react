// Virtual DOM
// 가상 문서 객체 모델
// 실제 DOM을 추상화(단순화)

// virtual
import createElement from "./lib/virtual/createElement.js";

// virtual-dom

// -----------------------------------------------------------------

// 가상(추상화된, 단순화된) 요소(엘리먼트) 생성

// 자식(하위) 요소
const figcaptionVElement = createElement("figcaption");
/* 
{
  $$typeof: Symbol("virtual.element"), // 가상 요소를 식별하는 타입
  type: "figcaption",                  // 요소의 타입, 여기서는 "figcaption"
  key: null,                           // 요소를 식별하는 데 사용되는 키 (없음)
  props: {                             // 요소의 속성
    children: []                       // 자식 요소가 없으므로 빈 배열
  }
}
*/
console.log(figcaptionVElement);

// 부모(상위) 요소
// API : createElement(type, props, child1, child2, ..., childN)
// API : createElement(type, props, ...children)
// console.log(figureVElement);

// virtual-dom / createRoot
// 가상 요소를 실제 DOM 요소로 렌더링

// API : createRoot(container)

// -----------------------------------------------------------------

// 실제 DOM 구성 (엘리먼트 트리)
// 웹 API를 사용해 문서 객체(Document Object) 생성
// <figure> 요소를 생성하고 싶어요.

// 부모(상위) 요소 생성

// 자식(하위) 요소 생성

// 요소간 관계 형성

// 실제 DOM에 마운트(mount, 착장 === 렌더링)
