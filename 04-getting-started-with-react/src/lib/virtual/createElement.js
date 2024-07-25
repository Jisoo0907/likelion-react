// React API 유사
// React.createElement(type, props, ...children)

export const VIRTUAL_ELEMENT_TYPE = Symbol("virtual.element");
/* 
고유한 식별자 생성
- React에서 비슷한 방식으로 $$typeof 속성 사용하여 특정 객체가 React 요소임을 식별함 
*/

function createElement(type, props, ...children) {
  // Creating a Virtual Element
  return {
    $$typeof: VIRTUAL_ELEMENT_TYPE,
    type /* 요소의 유형 */,
    key: props?.key ?? null,
    /* 
    ? : props가 null/undefined가 아닌 경우에만 props의 key 속성에 접근
    ?? : 왼쪽 피연산자가 null/undefined인 경우 오른쪽 피연산자 반환 
    */
    props: { ...props, children: [...(props?.children ?? []), ...children] },
    /* 기존 props 객체와 전달된 children을 결합하여 최종적인 children 배열 만듦
    ...props: 기존 props 객체의 모든 속성을 새로운 객체에 복사
    props?.children ?? []: props가 정의돼 있으면 props.children에 접근
      - props가 null/undefined면 undefined 반환
    ?? []: props?.children이 null/undefined인 경우 빈 배열 반환
      - props.children이 없는 경우에도 항상 children 속성이 배열임을 보장
    */
  };
}

export default createElement;
