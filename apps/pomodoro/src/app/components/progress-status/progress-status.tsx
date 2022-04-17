import styles from './progress-status.module.scss';
import { Backdrop, Grid } from "@mui/material";
import { LinearProgressBar, Typography } from "@zoo-keep/ui-kits";
import React from "react";
import { useSelector } from "react-redux";
import { completedTasksState, tasksState } from "../../state/task/task.slice";

/* eslint-disable-next-line */
export interface ProgressStatusProps {
  open: boolean;
  handleClose: (open: boolean) => void;
}

export function ProgressStatus(props: ProgressStatusProps) {
  const completedTask = useSelector(completedTasksState);
  const tasks = useSelector(tasksState);
  const {open, handleClose} = props;

  return (
    <>
      <Backdrop
        sx={{color: '#ffffff', backgroundColor: 'rgba(29, 53, 87, 0.75)', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={open}
        onClick={() => handleClose(false)}
      >
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='end'
          className='full-height'
        >
          <Grid item lg={4} xs={4} md={4} width={'100%'}>
            <Grid container direction='column' alignItems='center' justifyContent='center' padding={8}>
              <Grid item>
                <Typography label={`Total Tasks: ${tasks?.length}`} variant={'h6'}/>
              </Grid>
              <Grid item>
                <Typography label={`Completed: ${completedTask?.length}`} variant={'h6'}/>
              </Grid>
              <Grid item width={'100%'}>
                <LinearProgressBar value={tasks?.length ? completedTask?.length / tasks?.length : 0}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Backdrop>
    </>
  );
}

export default ProgressStatus;
