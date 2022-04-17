import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import styles from './timer-container.module.css';
import { useDispatch, useSelector } from "react-redux";
import { currentTaskState, pauseTimer, startTimer } from "../../state/task/task.slice";
import { addTaskToComplete } from "../../state/task/task.actions";
import { useLocation } from "react-router-dom";
import { ROUTE_PATHS } from "../../core/constants/route-paths.constants";
import { Box } from "@mui/material";

export const TimerContainer = (WrappedComponent: FC<any>, time: number) => {
  const [remainingTime, setTime] = useState<number>(time);
  const timeRef = useRef<number | NodeJS.Timeout>();
  const currentTask = useSelector(currentTaskState);
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  const beep = new Audio('../../../assets/sounds/beep.mp3');
  const timesUp = new Audio('../../../assets/sounds/times-up.mov');

  useEffect(() => {
    (remainingTime <= 4 && remainingTime > 0) && beep.play();
    if (remainingTime === 0) {
      timesUp.play();
      setTimeout(() => finish(time), 1000);
      pathname === ROUTE_PATHS['focusPage'] && currentTask && dispatch(addTaskToComplete(currentTask));
    }
  }, [remainingTime, currentTask, pathname]);

  useEffect(() => {
    currentTask && setTime(time);
  }, [currentTask, time]);

  const start = () => {
    beep.play();
    dispatch(startTimer());
    timeRef.current = setInterval(() => {
      setTime(prevState => prevState ? prevState - 1 : prevState);
    }, 1000);
  }

  const pause = useCallback(() => {
    dispatch(pauseTimer());
    clearInterval(timeRef.current as NodeJS.Timeout);
  }, []);

  const finish = useCallback((time: number) => {
    dispatch(pauseTimer());
    clearInterval(timeRef.current as NodeJS.Timeout);
    setTime(time);
  }, []);

  return ({...otherProps}) => {
    return (
      <Box>
        <WrappedComponent {...otherProps} remainingTime={remainingTime} finish={finish} start={start}
                          pause={pause}/>
      </Box>
    );
  }
}

export default TimerContainer;
