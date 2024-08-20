import { useState } from 'react';
import ClockOnOff from './ClockOnOff';

function ClockOnOffWrapper() {
  // 시계 on/off 상태를 관리하는 state 생성
  const [isClockOn, setIsClockOn] = useState(false);

  return (
    <ClockOnOff isOn={isClockOn} onToggle={() => setIsClockOn((s) => !s)} />
  );
}

export default ClockOnOffWrapper;
