import React, { useCallback, useState } from 'react';
import { Grid, Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import { NAVIGATION_TABS, NavigationIds } from "./constants/header.constants";

/* eslint-disable-next-line */
export interface HeaderProps {
}

export function Header(props: HeaderProps) {
  const [selectedTab, selectTab] = useState<NavigationIds>(NavigationIds.pomodoro);

  const onSelect = useCallback((id: NavigationIds) => {
    selectTab(id);
  }, []);

  return (
    <Grid
      container
      spacing={0}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Tabs
        TabIndicatorProps={{
          style: {
            backgroundColor: "#222e50"
          }
        }}
        value={selectedTab}
        aria-label="Navigation"
      >
        {
          NAVIGATION_TABS.map(({id, label, path}) => {
            return <Tab
              style={{color: '#222e50'}}
              onClick={() => onSelect(id)} key={id} value={id} label={label}
              component={Link} to={path}/>
          })
        }
      </Tabs>
    </Grid>
  );
}

export default Header;
