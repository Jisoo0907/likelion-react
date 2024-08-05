import { node } from 'prop-types';

// PropTypes.node
// 리액트 컴포넌트가 반환할 수 있는 모든 타입 (element, string, number, null, undefined)
LayoutBox.propTypes = {
  children: node, // [TS] React.ReactNode
};

function LayoutBox({ children, ...restProps }) {
  console.log({ restProps });

  return <div className="box">{children}</div>;
}

export default LayoutBox;