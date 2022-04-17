import styles from './confirmation-modal.module.scss';
import { Backdrop, Box, Fade, Grid, Modal } from "@mui/material";
import { Button, Typography } from "@zoo-keep/ui-kits";
import React from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: '#f1faee',
  borderRadius: 2,
  padding: 2,
};

/* eslint-disable-next-line */
export interface ConfirmationModalProps {
  open: boolean;
  handleClose: (confirm: boolean) => void;
  message: string;
}

export function ConfirmationModal(props: ConfirmationModalProps) {
  const {open, handleClose, message} = props;
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Grid container direction='column' alignItems='center' spacing={2} justifyContent='center' padding={2}>
            <Grid item>
              <Typography className={styles['confirmation-message']} label={message} variant={'h6'}/>
            </Grid>
            <Grid container direction='row' alignItems='center' justifyContent='center' spacing={2} padding={2}>
              <Grid item>
                <Button label={'Cancel'}
                        color='error'
                        variant='outlined'
                        onClick={() => handleClose(false)}/>
              </Grid>
              <Grid item>
                <Button label={'Confirm'}
                        color={'primary'}
                        variant='outlined'
                        onClick={() => handleClose(true)}/>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ConfirmationModal;
