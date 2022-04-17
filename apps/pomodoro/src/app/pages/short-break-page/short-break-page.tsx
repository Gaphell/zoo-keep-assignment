import React from 'react';
import { TimerPageProps } from "../shared/page-time.model";
import PomodoroDetails from "../../components/pomodoro-details/pomodoro-details";

export const SHORT_BREAK_DURATION = 300;

export function ShortBreakPage(props: TimerPageProps) {
  const {start, pause, finish, remainingTime} = props;

  return (
    <PomodoroDetails duration={SHORT_BREAK_DURATION}
                     finish={finish}
                     pause={pause}
                     remainingTime={remainingTime}
                     start={start}
    />
  );
}

export default ShortBreakPage;
