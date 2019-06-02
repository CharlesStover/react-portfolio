import { withStyles } from '@material-ui/core';
import { MOBILE_MEDIA_QUERY } from '../../../../utils/media-queries';

export default withStyles({
  root: {
    [MOBILE_MEDIA_QUERY]: {
      marginTop: '0.5em',
    },
  },
});
