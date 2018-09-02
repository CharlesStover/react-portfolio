import { withStyles } from '@material-ui/core';

export default withStyles(theme => ({
  '@global': {
    a: {
      color: theme.palette.secondary.light
    },
    body: {
      color: theme.palette.common.white
    },
    '#root': {
      backgroundColor: theme.palette.common.black
    }
  }
}));
