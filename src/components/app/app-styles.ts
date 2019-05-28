import { StyleRulesCallback, withStyles } from '@material-ui/core';

const styles: StyleRulesCallback = theme => ({
  '@global': {
    a: {
      color: theme.palette.secondary.light,
    },
    body: {
      color: theme.palette.common.white,
    },
    '#root': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

export default withStyles(styles);
