import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './UserCard.styles'


export default function UserCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.avatar}
          component="img"
          alt="Contemplative Reptile"
          image={props.userData.avatar_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.userData.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.userData.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardsButtons}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
}
