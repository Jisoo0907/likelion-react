import { bool, node } from 'prop-types';
import S from './style.module.css';

AppLink.propTypes = {
  children: node.isRequired,
  isExternal: bool,
};

// 상태 없이 전달된 props로 어떻게 렌더링 할 것인지?
function AppLink({ children, isExternal = false, ...restProps }) {
  const externalProps = {};

  if (isExternal) {
    externalProps.target = '_blank';
    externalProps.rel = 'noreferrer noopener';
  }

  return (
    <a className={S.component} {...externalProps} {...restProps}>
      {children}
    </a>
  );
}

export default AppLink;
