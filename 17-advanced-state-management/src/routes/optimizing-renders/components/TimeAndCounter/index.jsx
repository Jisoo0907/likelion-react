import useClock from '@/hooks/useClock';
import S from './style.module.css';
import Counter from '../Counter';
import TimeToggler from './TimeToggler';
import useRenderCountLog from '@/hooks/useRenderCountLog';
import React, { useCallback } from 'react';

// TimeToggler 함수 참조
// 기억된 컴포넌트 = React.memo(컴포넌트 참조)
// const MemoizedTimeToggler = React.memo(TimeToggler);

function TimeAndCounter() {
  // 컴포넌트가 다시 렌더링(실행) 되는 이유
  // 1. 컴포넌트 자신이 소유한 상태가 변경될 때
  // 2. 컴포넌트 외부에서 전달된 속성(props)이 변경될 때
  const { time, turnOn, onOff } = useClock();
  useRenderCountLog('TimeAndCounter', '#062570', 800, 20);

  const handleToggleTime = useCallback(() => onOff((c) => !c), [onOff]);

  const label = `타임 ${turnOn ? '스톱' : '플레이'}`;

  return (
    <div className={S.component}>
      <div role="group" className={S.group}>
        <time>{time}</time>
        {/* <TimeToggler onToggle={handleToggleTime}>{label}</TimeToggler> */}
        {React.createElement(
          // 이 안에서 함수 참조는 몇 개?
          // 함수 참조: 함수를 기억하고 있는 것
          // 1. handleToggleTime => 얘는 우리가 기억(메모리)함 2. TimeToggler(컴포넌트니까) => 근데 얘는 우리가 기억 안 함.
          // 그래서 리액트가 렌더링 전과 후가 다르다고 봄 => 리렌더링
          TimeToggler,
          { onToggle: handleToggleTime },
          label
        )}
      </div>
      <Counter />
    </div>
  );
}

export default TimeAndCounter;
