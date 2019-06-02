import { withStyles } from '@material-ui/core';
import { MOBILE_MEDIA_QUERY } from '../../../utils/media-queries';

export default withStyles({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '1em',
    [MOBILE_MEDIA_QUERY]: {
      flexDirection: 'column',
    },
  },
});
