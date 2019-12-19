import React from 'react';
import InformationGrid from './InformationGrid'
import InformationList from './InformationList'
import Grid from '@material-ui/core/Grid'

export default function Dashboard() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={3}>
            <InformationGrid />
          </Grid>
          <Grid item xs={4}>
            <InformationList />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
