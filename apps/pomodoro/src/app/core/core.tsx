import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import TimerContainer from "../components/timer-container/timer-container";
import Loader from "../components/loader/loader";
import { FOCUS_DURATION, LONG_BREAK_DURATION, SHORT_BREAK_DURATION } from "../pages";
import { ROUTE_PATHS } from "./constants/route-paths.constants";

const FocusPage = lazy(() => import('../pages/focus-page/focus-page'));
const LongBreakPage = lazy(() => import('../pages/long-break-page/long-break-page'));
const ShortBreakPage = lazy(() => import('../pages/short-break-page/short-break-page'));

export function Core() {
  const FocusPageComponent = TimerContainer(FocusPage, FOCUS_DURATION);
  const LongBreakPageComponent = TimerContainer(LongBreakPage, LONG_BREAK_DURATION);
  const ShortBreakPageComponent = TimerContainer(ShortBreakPage, SHORT_BREAK_DURATION);

  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path={ROUTE_PATHS['focusPage']} element={<FocusPageComponent/>}/>
          <Route path={ROUTE_PATHS['longBreak']} element={<LongBreakPageComponent/>}/>
          <Route path={ROUTE_PATHS['shortBreak']} element={<ShortBreakPageComponent/>}/>
        </Routes>
      </Suspense>
    </>
  );
}

export default Core;
