import React from 'react';
import { TimerPageProps } from "../shared/page-time.model";
import PomodoroDetails from "../../components/pomodoro-details/pomodoro-details";

export const FOCUS_DURATION = 1500;

export function FocusPage(props: TimerPageProps) {
  const {start, pause, finish, remainingTime} = props;

  return (
    <PomodoroDetails
      duration={FOCUS_DURATION}
      finish={finish}
      pause={pause}
      remainingTime={remainingTime}
      start={start}
    />
  );
}

export default FocusPage;
