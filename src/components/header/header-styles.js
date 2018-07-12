import { mobileMediaQuery } from '../../constants/breakpoints';

export default (theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  toolbar: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 0
  },
  [mobileMediaQuery]: {
    toolbar: {
      flexDirection: 'column'
    }
  }
});
