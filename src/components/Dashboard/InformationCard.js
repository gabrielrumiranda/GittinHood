import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles({
  card: {
    width: 150,
    height: 150,
    backgroundColor: '#0F1319',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    textAlign: 'left',
  },
  cardDescription: {
    lineHeight: '25px',
    color: '#fafafa',
    fontWeight: 500,
    fontSize: '20px',
  },
  cardNumber: {
    lineHeight: '25px',
    fontWeight: 500,
    marginBottom: 12,
  }
});

export default function InformationCard({cardNumber, cardDescription}) {
  const classes = useStyles();

  function CardIcon({ cardDescription }) {
    switch(cardDescription) {
      case 'Followers':
        return <PeopleIcon fontSize='large' color='secondary' />
      case 'Following':
        return <PeopleOutlineIcon fontSize='large' color='secondary' />
      case 'Repositories':
        return <FolderOpenIcon fontSize='large' color='secondary' />
      case 'Gists':
        return <MenuBookIcon fontSize='large' color='secondary' />
      default:
        return null;
    }
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
         <CardIcon cardDescription={cardDescription}/>
        </Typography>
        <Typography className={classes.cardDescription} variant="h5" align="center">
          {cardDescription}
        </Typography>
        <Typography color='secondary' className={classes.cardNumber} variant="h6" align="center">
          {cardNumber}
        </Typography>
      </CardContent>
    </Card>
  );
}
