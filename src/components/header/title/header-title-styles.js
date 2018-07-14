import { mobileMediaQuery } from '../../../constants/breakpoints';

export default (theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    fontFamily: '"Architects Daughter", cursive',
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  },
  [mobileMediaQuery]: {
    root: {
      paddingBottom: theme.spacing.unit,
      paddingTop: theme.spacing.unit * 2
    }
  }
});
