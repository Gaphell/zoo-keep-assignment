import TaskModal from "../task-modal/task-modal";
import React, { useCallback, useState } from "react";
import TaskItem from "../task-item/task-item";
import { useDispatch, useSelector } from "react-redux";
import { Task, tasksState } from "../../state/task/task.slice";
import { Button } from "@zoo-keep/ui-kits";
import { Grid } from "@mui/material";
import { removeTask } from "../../state/task/task.actions";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styles from './task-list.module.scss';
import ConfirmationModal from "../confirmation-modal/confirmation-modal";

/* eslint-disable-next-line */
export interface TaskListProps {
  closeProgressStatus: (open: boolean) => void;
}

export function TaskList(props: TaskListProps) {
  const {closeProgressStatus} = props;
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  const remove = useCallback((task: Task) => {
    dispatch(removeTask(task));
  }, []);

  const tasks = useSelector(tasksState);

  return (
    <>
      <TaskModal handleClose={closeModal} open={open}/>
      <Grid container direction={'column'} justifyContent={'center'} padding={4} alignItems='center'>
        <Grid item paddingBottom={4} width={'100%'}>
          <Grid container direction='row' spacing={2} alignItems='center' justifyContent='center'>
            <Grid item>
              <Button label={'Add Task'}
                      color='primary'
                      variant='contained'
                      onClick={() => setOpen(true)}/>
            </Grid>
            <Grid item>
              <Button label={'Details'}
                      color={'primary'}
                      variant='outlined'
                      onClick={() => closeProgressStatus(true)}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item
              className={styles['task-container']}
              alignItems={'center'}
              padding={2}>
          <Swiper
            slidesPerView={4}
            spaceBetween={2}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={`${styles['swiper']}`}
          >
            {
              tasks.map((task) => {
                return <SwiperSlide className={styles['swiper-slide']} key={task?.id}>
                  <TaskItem task={task} deleteTask={remove}/>
                </SwiperSlide>;
              })
            }
          </Swiper>
        </Grid>
      </Grid>
    </>
  );
}

export default TaskList;
