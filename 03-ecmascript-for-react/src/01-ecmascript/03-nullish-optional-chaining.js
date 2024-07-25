// --------------------------------------------------------------------------
// operators (nullish, optional chaining)
// - null, undefined 처리 조건 연산자 활용
// - 선택적 연결 구문 활용
// --------------------------------------------------------------------------

function nullish() {
  let value = 0; // 개발자의 의도!!!!

  let result = value || 100; // 첫 번째 truthy 값 반환
  console.log({ "||": result });

  // nullish: Web Native(추가적인 라이브러리나 폴리필 없이 브라우저에서 바로 사용할 수 있는 기능)
  function isNullOrUndefined(value) {
    return value === null || value === undefined ? true : false;
    // 지금 value는 null도 undefinedㄷ 아니니까 false 반환
  }
  // isNullOrUndefined가 false를 반환했으니 !false는 true
  // 따라서 ? 다음에 오는 첫 번째 값 선택함
  result = !isNullOrUndefined(value) ? value : 100;
  console.log({ isNullOrUndefined: result });

  // 🔶 null 병합 연산자 코드를 작성합니다.
  // 왼쪽 피연산자가 null || undefined => 오른쪽 피연산자 반환, or 왼쪽 피연산자 반환
  result = value ?? 100;
  console.log({ "??": result });
  // 참고: https://mzl.la/3vQUYin | https://mzl.la/3PXiOQ9
}

function optionalChaining() {
  const topic = {
    _title: "매년 업데이트 되는 ECMAScript",
    getTitle() {
      return this._title;
    },
    setTitle(value) {
      this._title = value;
    },
  };

  if (topic && typeof topic === "object" && !Array.isArray(topic)) {
    let title, name;

    if (typeof topic.getTitle === "function") {
      title = topic.getTitle();
    }

    if (typeof topic.getName === "function") {
      name = topic.getName();
    }

    console.log({ titleValue: title });
    console.log({ nameValue: name });
  }

  // 🔶 optional chaining 코드를 사용해 조건 처리하세요.
  // 참고: https://mzl.la/3xx6Arc

  console.log(topic.getTitle());
  console.log(topic.getName());
}

function run() {
  nullish();
  optionalChaining();
}

run();
