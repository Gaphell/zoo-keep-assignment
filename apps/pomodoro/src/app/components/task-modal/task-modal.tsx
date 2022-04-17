import styles from './task-modal.module.scss';
import { Fade, Modal } from "@mui/material";
import { Button, TextField } from "@zoo-keep/ui-kits";
import { useCallback } from "react";
import { Form, Field } from 'react-final-form';
import { required } from "../../utils/form.utils";
import { useDispatch } from "react-redux";
import { Task } from "../../state/task/task.slice";
import { addTask } from "../../state/task/task.actions";

/* eslint-disable-next-line */
export interface TaskModalProps {
  open: boolean;
  handleClose: () => void;
}

export function TaskModal(props: TaskModalProps) {
  const {open, handleClose} = props;
  const dispatch = useDispatch();

  const onSubmit = useCallback((values: { title: string }) => {
    dispatch(addTask(new Task({id: (new Date()).toString(), title: values.title})))
    handleClose();
  }, []);

  return (
    <Modal
      hideBackdrop
      open={open}
    >
      <Fade in={open}>
        <div className={styles['container']}>
          <Form onSubmit={onSubmit}
                render={({handleSubmit, form, submitting, pristine}) => {
                  return (
                    <div className={styles['content']}>
                      <Field
                        name="title"
                        validate={required}>
                        {({input, meta, ...rest}) => {
                          return <>
                            <TextField variant={'outlined'} label={'Task Name'} {...input} {...rest}
                                       onChange={(event) => input?.onChange(event.target.value)}
                            />
                          </>
                        }}
                      </Field>
                      <div className={styles['button']}>
                        <Button label={'Cancel'} color={'error'} onClick={() => handleClose()}/>
                        <Button label={'Add'} color={'primary'} type={"submit"} onClick={handleSubmit}/>
                      </div>
                    </div>
                  );
                }}/>
        </div>
      </Fade>
    </Modal>
  );
}

export default TaskModal;
