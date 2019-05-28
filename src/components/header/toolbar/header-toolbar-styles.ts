import { withStyles } from '@material-ui/core';

const MOBILE_MEDIA_QUERY = '@media (max-width: 767px)';

export default withStyles({
  toolbar: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 0,
    [MOBILE_MEDIA_QUERY]: {
      flexDirection: 'column',
    },
  },
});
