// --------------------------------------------------------------------------
// Template literal
// - 데이터 + 템플릿(JS) = 마크업 스트링 (웹 컴포넌트, 리액트)
// - 템플릿 리터럴 구문을 사용해 마크업 스트링 생성
// --------------------------------------------------------------------------

// 데이터(상태: state)
// 클라이언트 요청 => 서버 -> 클라이언트 응답 -> JSON
// JSON.stringify() : 객체를 JSON 문자열로 직렬화
// JSON.parse() : JSON 문자열을 JS 객체로 역직렬화
const koreanFoods = {
  caption: "한식 메뉴",
  rows: [
    { headline: "뚝배기 불고기", content: 8000 },
    { headline: "스팸치즈볶음밥", content: 7500 },
    { headline: "불고기낙지덮밥", content: 9000 },
  ],
};

// 주어진 데이터를 HTML 테이블로 렌더링
function renderTable(data) {
  // data 객체를 기반으로 HTML 문자열 생성
  return [
    '<table class="table">',
    '<caption class="sr-only">' + data.caption + "</caption>",
    data.rows.reduce(function (htmlString, rowData) {
      // htmlString을 초기값으로 사용
      // 각 행을 누적하여 최종적인 테이블 내용 만듦
      const rowString = [
        "<tr>",
        "<th>" + rowData.headline + "</th>",
        "<td>" + numberWithComma(rowData.content) + "원" + "</td>",
        // numberWithComma
        "</tr>",
      ].join("");
      return htmlString + rowString;
    }, ""),
    "</table>",
  ].join("");
  // 배열의 모든 요소를 쉼표나 지정된 구분 문자열로 구분하여 연결한 새 문자열 만들어 반환
}

// 🔶 renderTableString 함수를 작성하세요.
// JavaScript 파일 안에서 마크업(markup: 구조 설계) 구성
function renderTableString(data /* { caption: string, rows: [] } */) {
  const markup = /* html */ `
    <table class="table">
      <caption class="sr-only">${data.caption}</caption>
      ${data.rows.reduce(function (htmlString, rowItem) {
        return (
          htmlString +
          /* html */ `
          <tr>
            <th>${rowItem.headline}</th>
            <td>${numberWithComma(rowItem.content)}원</td>
          </tr>
        `
        );
      }, "")}
    </table>
  `;
  return removeSpaceHTMLString(markup);
}

function run() {
  const renderedResult1 = renderTable(koreanFoods);
  console.log(renderedResult1);
  const renderedResult = renderTableString(koreanFoods);
  return renderedResult;
}

console.log(run());

// --------------------------------------------------------------------------
// utils

function numberWithComma(numberValue) {
  return numberValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
// 숫자 -> 문자열 변환, 천 단위 구분 기호인 쉼표 추가
// 문자열로 변환해야 정규 표현식과 replace 메서드 사용 가능
// (\d) - 숫자 하나를 그룹으로 캡처
// (?=(\d{3})+(?!\d)) - 긍정형 전방탐색(lookahead)
// (\d{3})+ - 세 자리 숫자가 하나 이상 있는지 확인
// (?!\d) - 부정형 전방탐색. 뒤에 숫자가 없어야 함을 의미

function removeSpaceHTMLString(htmlString) {
  return htmlString.replace(/\s+<|\n|>\s+/g, function ($1) {
    return $1.indexOf("<") > -1 ? "<" : $1.indexOf(">") > -1 ? ">" : "";
  });
}
// HTML 문자열에서 불필요한 공백 문자 제거
