import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
  '@global': {
    a: {
      color: theme.palette.secondary.light
    },
    body: {
      color: theme.palette.common.white
    }
  }
}));
