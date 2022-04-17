import styles from './no-data.module.scss';
import { Typography } from "@zoo-keep/ui-kits";
import { Grid } from '@mui/material';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';

/* eslint-disable-next-line */
export interface NoDataProps {}

export function NoData(props: NoDataProps) {
  return (
    <Grid container style={{border: '1px solid', padding: '16px'}}>
      <Typography label={'No Tasks'} variant={'h5'}/>
      <NoAccountsIcon/>
    </Grid>
  );
}

export default NoData;
