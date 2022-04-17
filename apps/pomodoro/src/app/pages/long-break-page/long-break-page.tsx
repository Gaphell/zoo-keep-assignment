import React from 'react';
import { TimerPageProps } from "../shared/page-time.model";
import PomodoroDetails from "../../components/pomodoro-details/pomodoro-details";

export const LONG_BREAK_DURATION = 900;

export function LongBreakPage(props: TimerPageProps) {

  const {start, pause, finish, remainingTime} = props;

  return (
    <PomodoroDetails
      duration={LONG_BREAK_DURATION}
      finish={finish}
      pause={pause}
      remainingTime={remainingTime}
      start={start}
    />
  );
}

export default LongBreakPage;
