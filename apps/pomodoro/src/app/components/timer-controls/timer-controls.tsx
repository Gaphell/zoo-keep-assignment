import styles from './timer-controls.module.scss';
import { Button } from "@zoo-keep/ui-kits";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { currentTaskState, Task, timerStartedState } from "../../state/task/task.slice";
import { useLocation } from "react-router-dom";
import { ROUTE_PATHS } from "../../core/constants/route-paths.constants";
import { Box, Tooltip } from "@mui/material";

/* eslint-disable-next-line */
export interface TimerControlsProps {
  start: () => void;
  pause: () => void;
  finish: (time: number) => void;
  initialTime: number;
}

export function TimerControls(props: TimerControlsProps) {
  const {start, pause, finish, initialTime} = props;
  const isStarted = useSelector(timerStartedState);
  const currentTask = useSelector(currentTaskState);

  return (
    <div className={styles['container']}>
      {
        isStarted ?
          <Box>
            <Button className={styles['button']} label='Pause' type='button' onClick={pause}
                    color='primary' disabled={!currentTask}/>
          </Box>
          : <Tooltip open={!currentTask} title="Select a task first" placement="top-start">
            <Box>
              <Button className={styles['button']} label='Start' type='button' onClick={start}
                      color='primary' disabled={!currentTask}/>
            </Box>
          </Tooltip>
      }


      <Button className={styles['button']} label='Finish' type='button'
              onClick={() => finish(0)}
              color='error'
              disabled={!currentTask}/>
    </div>
  );
}

export default TimerControls;
