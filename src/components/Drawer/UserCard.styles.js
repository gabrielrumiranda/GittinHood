import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
    textAlign: 'center',
    boxShadow: 'none',
  },

  avatar: {
    position: 'block',
		width: '70px',
		height: '70px',
    margin: '38px auto 0 auto',
    display: 'block',
    borderRadius: '50%',
    background: '#F5E8DF',
  },

  cardsButtons: {
    textAlign: 'center',
    display: 'block'
  },
}));
