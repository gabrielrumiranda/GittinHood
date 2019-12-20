import React from 'react';
import Grid from '@material-ui/core/Grid';
import InformationCard from './InformationCard'

export default function InformationGrid(props) {
  return (
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={5}>
          <InformationCard cardNumber={props.userData.followers} cardDescription={'Followers'}/>
        </Grid>
        <Grid item xs={5}>
          <InformationCard cardNumber={props.userData.following} cardDescription={'Following'}/>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={5}>
          <InformationCard cardNumber={props.userData.public_repos} cardDescription={'Repositories'} />
        </Grid>
        <Grid item xs={5}>
          <InformationCard cardNumber={props.userData.public_gists} cardDescription={'Gists'} />
        </Grid>
      </Grid>
    </Grid>
  );
}
