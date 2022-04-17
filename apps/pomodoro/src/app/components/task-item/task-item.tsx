import { currentTaskState, Task } from "../../state/task/task.slice";
import { Chip } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTask } from "../../state/task/task.actions";
import ConfirmationModal from "../confirmation-modal/confirmation-modal";

/* eslint-disable-next-line */
export interface TaskItemProps {
  task: Task;
  deleteTask: (task: Task) => void;
}

export function TaskItem(props: TaskItemProps) {
  const {task, deleteTask} = props;
  const dispatch = useDispatch();
  const currentTask = useSelector(currentTaskState);
  const [openConfirmationModal, setOpenConfirmationModalModal] = useState<boolean>(false);

  const onConfirm = useCallback((confirm: boolean) => {
    confirm && deleteTask(task);
    setOpenConfirmationModalModal(false)
  }, [task]);

  const openModal = useCallback(() => {
    setOpenConfirmationModalModal(true);
  }, [])

  const setActiveTask = useCallback(() => {
    dispatch(setCurrentTask(task));
  }, [task]);

  return (
    <>
      <ConfirmationModal open={openConfirmationModal} handleClose={onConfirm}
                         message={`Are you sure you want to delete task ${task?.title?.toUpperCase()}?`}/>
      <Chip size='small' label={task.title.toUpperCase()} onClick={setActiveTask}
            onDelete={() => openModal()}
            style={{
              background: currentTask?.id === task.id ? 'black' : '#f1faee',
              color: currentTask?.id === task.id ? 'white' : 'black'
            }}/>
    </>
  );
}

export default TaskItem;
