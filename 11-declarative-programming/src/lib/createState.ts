// 선언된 상태 관리 도구 (미니 툴)
// createState에 data, render 전달할 수 있음
// const [state (object), updateState (function)] = createState(data, render)
// 배열을 반환함 => TS에서는 튜플 반환함
// 이 상태를 누군가에 의해 쓸 수 없게 만들어야 해서 Readonly 부분 추가함

interface State {
  [key: string | symbol | number]: any;
}

type StateAction = (key: string, value: any) => void;

// 선언된 상태 관리 미니 툴 API
const createState = (
  data: State,
  callback: () => void
): [Readonly<State>, StateAction] => {
  let allowUpdate: boolean = false;

  const state: State = new Proxy(data, {
    get(target, prop) {
      return target[prop];
    },
    set(target, prop, newValue) {
      if (!allowUpdate) {
        console.warn("🚫 스토어 데이터를 직접 수정할 수 없습니다.");
        return false;
      }

      target[prop] = newValue;
      callback?.();
      return true;
    },
  });

  const action: StateAction = (key: string, value: any) => {
    allowUpdate = true;
    state[key] = value;
    allowUpdate = false;
  };

  return [state, action];
};

export default createState;
