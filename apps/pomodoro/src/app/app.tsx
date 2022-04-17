import React, { useCallback, useEffect, useState } from "react";
import TaskList from "./components/task-list/task-list";
import { useDispatch } from "react-redux";
import { resetState } from "./state/task/task.slice";
import { Box, Grid } from "@mui/material";
import { NAVIGATION_TABS } from "./components/header/constants/header.constants";
import styles from './app.module.scss';
import Header from "./components/header/header";
import Core from "./core/core";
import { useLocation } from "react-router-dom";
import ProgressStatus from "./components/progress-status/progress-status";

export function App() {
  const dispatch = useDispatch();
  const [openProgressStatus, setOpenProgressStatus] = useState<boolean>(false);

  useEffect(() => {
    return (): void => {
      dispatch(resetState());
    }
  }, []);

  const [backgroundColor, setBackgroundColor] = useState<string>();

  const {pathname} = useLocation();

  useEffect(() => {
    pathname && setBackgroundColor(NAVIGATION_TABS.find(tab => tab.path === pathname)?.color);
  }, [pathname]);


  const closeProgressStatus = useCallback((open: boolean) => {
    setOpenProgressStatus(open);
  }, []);

  return (
    <Box bgcolor={backgroundColor} className='full-height'>
      <Header/>
      <Grid container justifyContent={'center'} marginTop={4}>
        <Grid item
              alignItems='center'
              justifyContent="center"
              lg={8}
              md={8}
              xs={12}
              className={styles['container']}
        >
          <Grid container direction='column' spacing={4} width={'100%'}>
            <Grid item width={'100%'} height={'100%'}>
              <Core/>
            </Grid>
            <Grid item width={'100%'} height={'100%'}>
              <TaskList closeProgressStatus={closeProgressStatus}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ProgressStatus open={openProgressStatus} handleClose={closeProgressStatus}/>
    </Box>
  );
}

export default App;
