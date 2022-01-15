import { makeStyles } from '@material-ui/core/styles';
import { Autorenew } from '@material-ui/icons';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 200,
    marginTop:'30',
    paddingTop: '56.25%', // 16:9
    
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));