import { StyleRulesCallback, withStyles } from '@material-ui/core';

const styles: StyleRulesCallback = theme => ({
  root: {
    color: theme.palette.primary.light,
    fontSize: '1.25em',
    fontFamily: '"Architects Daughter", cursive',
  },
});

export default withStyles(styles);
