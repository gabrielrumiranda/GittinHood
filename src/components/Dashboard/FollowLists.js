import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeList } from 'react-window';
import FollowRow from './FollowRow';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 500,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FollowLists(props) {
  const classes = useStyles();
  const tableLength = props.listData.length
  function RowList (props) {
    return props.listData.map((user, index) => 
      <FollowRow key={index} userUrl={user.url} />
    );
  }
  return (
    <div className={classes.root}>
      <FixedSizeList height={1000} width={450} itemSize={1} itemCount={tableLength}>
      </FixedSizeList>
    </div>
  );
}
