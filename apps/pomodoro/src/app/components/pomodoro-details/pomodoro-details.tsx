import { Grid } from "@mui/material";
import { Typography } from "@zoo-keep/ui-kits";
import { formatTime } from "../../utils/timer.utils";
import TimerControls from "../timer-controls/timer-controls";
import React from "react";
import styles from './pomodoro-details.module.scss';

/* eslint-disable-next-line */
export interface PomodoroDetailsProps {
  remainingTime: number;
  pause: () => void;
  start: () => void;
  finish: (time: number) => void;
  duration: number;
}

export function PomodoroDetails(props: PomodoroDetailsProps) {
  const {remainingTime, pause, start, finish, duration} = props;
  return (
    <Grid
      container
      direction={'column'}
      alignItems={'center'}
      marginTop={4}
      spacing={4}
    >
      <Grid item>
        <Typography className={styles['time']} label={formatTime(remainingTime)} variant='h1'/>
      </Grid>
      <Grid item>
        <TimerControls pause={pause} start={start} finish={finish} initialTime={duration}/>
      </Grid>
    </Grid>
  );
}

export default PomodoroDetails;
