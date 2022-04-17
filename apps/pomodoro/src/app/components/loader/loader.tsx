import { Box, Grid } from "@mui/material";
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

/* eslint-disable-next-line */
export interface LoaderProps {
}

export function Loader(props: LoaderProps) {
  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', direction: 'column'}}
         style={{background: 'black'}}>
      <Box>
        <CircularProgress/>
      </Box>
    </Box>
  );
}

export default Loader;
