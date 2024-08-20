// React Router 라이브러리를 사용한 싱글 페이지 앱 제작
// 실습 진행 (30분까지 진행)

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

// 레이아웃
import RootLayout from '@/components/RootLayout';

// 페이지
import SyncDocumentTitle from './sync-document-title';
import SyncWebStorage from './sync-web-storage';
import EffectSyncAndCleanup from './effect-sync-and-cleanup';
import ScrollTriggerEffect from './scroll-trigger-effect';
import SyncBackend from './sync-backend';
import CheckOnOffline from './check-on-offline';

// 페이지 내부 컴포넌트
import PrintMousePosition from './effect-sync-and-cleanup/components/PrintMousePosition';
import ClockOnOffWrapper from './effect-sync-and-cleanup/components/ClockOnOffWrapper';
import UselessCheckbox from './effect-sync-and-cleanup/components/UselessCheckbox';
import ClockOnOff from './effect-sync-and-cleanup/components/ClockOnOff';
import DataFetchUsingUseFetchHook from './data-fetch-using-use-fetch-hook';
import CounterApp from './counter-app-use-counter';

// 루트(경로 집합)
// eslint-disable-next-line no-unused-vars
const __routes__ = [
  {
    path: '/', // 최상위 경로. 애플리케이션의 루트 URL.
    element: <RootLayout />, // 이 경로에서 렌더링 될 컴포넌트 지정.
    children: [
      // ture로 설정된 경로는 '/' 경로로 들어갔을 때 기본적으로 렌더링되는 컴포넌트를 지정함.
      { index: true, element: <SyncDocumentTitle /> },
      { path: 'sync-web-storage', element: <SyncWebStorage /> },
      {
        path: 'effect-sync-and-cleanup',
        element: <EffectSyncAndCleanup />, // 이 경로에서 렌더링할 상위 컴포넌트 지정
        children: [
          // effect-sync-and-cleanup 경로 내에서 다시 중첩된 하위 경로들이 설정돼 있음
          {
            // /effect-sync-and-cleanup 경로 진입 시 기본적으로 렌더링 될 컴포넌트 지정
            index: true,
            element: <PrintMousePosition />,
          },
          {
            // /effect-sync-and-cleanup/clock 경로
            path: 'clock',
            element: <ClockOnOffWrapper />,
          },
          {
            path: 'useless-checkbox',
            element: <UselessCheckbox />,
          },
        ],
      },
      { path: 'scroll-trigger-effect', element: <ScrollTriggerEffect /> },
      { path: 'sync-backend', element: <SyncBackend /> },
      { path: 'check-on-offline', element: <CheckOnOffline /> },
    ],
  },
];

const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<SyncDocumentTitle />} />
    <Route path="sync-web-storage" element={<SyncWebStorage />} />
    {/* [중첩된 루트 설정] */}
    <Route path="effect-sync-and-cleanup" element={<EffectSyncAndCleanup />}>
      {/* /effect-sync-and-cleanup  →  마우스 위치 추적 */}
      <Route index element={<PrintMousePosition />} />
      {/* /effect-sync-and-cleanup/clock  →  시계 ON/OFF */}
      <Route path="clock" element={<ClockOnOff />} />
      {/* /effect-sync-and-cleanup/useless-checkbox  →  쓸모없는 체크박스 */}
      <Route path="useless-checkbox" element={<UselessCheckbox />} />
    </Route>
    <Route path="scroll-trigger-effect" element={<ScrollTriggerEffect />} />
    <Route path="sync-backend" element={<SyncBackend />} />
    <Route path="check-on-offline" element={<CheckOnOffline />} />
    <Route path="data-fetching" element={<DataFetchUsingUseFetchHook />} />
    <Route path="counter-app" element={<CounterApp />} />
  </Route>
);

// 라우터
const router = createBrowserRouter(routes);

// 라우터 내보내기
export default router;
