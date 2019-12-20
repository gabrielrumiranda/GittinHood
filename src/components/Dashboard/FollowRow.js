import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export default function FollowRow(props) {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    axios.get(props.userUrl)
    .then(res => {
      if(res.status === 200){
        setUserData(res.data);
      }
    })
  },[props.userUrl])

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={userData.avatar_url} />
      </ListItemAvatar>
      <ListItemText
        primary="Brunch this weekend?"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              style={{display: 'inline'}}
              color="textPrimary"
            >
              {userData.name}
            </Typography>
           {userData.bio}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
