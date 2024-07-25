class VirtualDomRoot {
  #rootElement;

  constructor(rootElement) {
    this.#rootElement = rootElement;
    // #rootElement: private 필드
  }

  #parseVNode(vNode) {
    if (typeof vNode === "string") return vNode;

    const { type, props } = vNode;

    const element = document.createElement(type);
    const children = props.children;
    delete props.children;

    Object.entries(props).forEach(([key, value]) => {
      if (key === "className") {
        element.classList.add(value);
      } else {
        element.setAttribute(key, value);
      }
    });

    children.forEach((child) => {
      if (typeof child === "string") {
        element.append(child);
      } else {
        element.append(this.#parseVNode(child));
      }
    });

    return element;
  }

  render(vNode) {
    // 가상 노드를 받아 파싱 후, 실제 DOM에 추가
    const parsedElements = this.#parseVNode(vNode); // 가상 -> 실제 DOM 생성
    this.#rootElement.append(parsedElements);
  }

  umount() {
    // 루트 요소의 모든 자식 요소 제거
    Array.from(this.#rootElement.children).forEach((child) => child.remove());
  }
}

export default VirtualDomRoot;
