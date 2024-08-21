import useClock from '@/hooks/useClock';
import S from './style.module.css';
import Counter from '../Counter';
import TimeToggler from './TimeToggler';
import useRenderCountLog from '@/hooks/useRenderCountLog';

function TimeAndCounter() {
  // 컴포넌트가 다시 렌더링(실행) 되는 이유
  // 1. 컴포넌트 자신이 소유한 상태가 변경될 때
  // 2. 컴포넌트 외부에서 전달된 속성(props)이 변경될 때
  const { time, turnOn, onOff } = useClock();
  useRenderCountLog('TimeAndCounter', '#062570', 800, 20);

  const handleToggleTime = () => onOff((c) => !c);

  const label = `타임 ${turnOn ? '스톱' : '플레이'}`;

  return (
    <div className={S.component}>
      <div role="group" className={S.group}>
        <time>{time}</time>
        <TimeToggler onToggle={handleToggleTime}>{label}</TimeToggler>
      </div>
      <Counter />
    </div>
  );
}

export default TimeAndCounter;
