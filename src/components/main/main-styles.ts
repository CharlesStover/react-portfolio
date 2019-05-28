import { withStyles } from '@material-ui/core';

export default withStyles({
  root: {
    backgroundColor: 'inherit',
    flexGrow: 1,

    // Optimal reading width: 66 characters per line
    maxWidth: '66rem',
    width: '100%',
  },
});
