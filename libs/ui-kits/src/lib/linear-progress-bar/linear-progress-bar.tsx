import styles from './linear-progress-bar.module.scss';
import { Grid, LinearProgress } from "@mui/material";
import Typography from "../typography/typography";

/* eslint-disable-next-line */
export interface LinearProgressBarProps {
  value: number;
}

export function LinearProgressBar(props: LinearProgressBarProps) {
  const {value} = props;
  return (
    <Grid container direction='column' paddingTop={2} spacing={2} justifyContent='center'>
      <Grid item >
        <Grid container direction='column' alignItems='center'>
          <Typography label={`${Math.round(value * 100)}%`} variant={'h5'}/>
        </Grid>
      </Grid>
      <Grid item>
        <LinearProgress color='primary' variant="determinate" value={value * 100}/>
      </Grid>
    </Grid>
  );
}

export default LinearProgressBar;
