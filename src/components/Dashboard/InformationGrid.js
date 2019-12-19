import React from 'react';
import Grid from '@material-ui/core/Grid';
import InformationCard from './InformationCard'
export default function InformationGrid() {

  return (
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={5}>
          <InformationCard cardNumber={40} cardDescription={'Followers'}/>
        </Grid>
        <Grid item xs={5}>
          <InformationCard cardNumber={40} cardDescription={'Following'}/>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={5}>
          <InformationCard cardNumber={40} cardDescription={'Repositories'} />
        </Grid>
        <Grid item xs={5}>
          <InformationCard cardNumber={40} cardDescription={'Gists'} />
        </Grid>
      </Grid>
    </Grid>
  );
}
