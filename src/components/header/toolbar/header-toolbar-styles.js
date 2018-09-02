import { withStyles } from '@material-ui/core';
import { MOBILE_MEDIA_QUERY } from '../../../constants/styles';

export default withStyles({
  toolbar: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 0,

    [MOBILE_MEDIA_QUERY]: {
      flexDirection: 'column'
    }
  }
});
