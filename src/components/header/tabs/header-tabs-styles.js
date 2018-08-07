import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles({
  flexContainer: {
    flexGrow: 1
  },
  nav: {
    display: 'flex'
  },
  scroller: {
    display: 'flex'
  },
  tabs: {
    alignSelf: 'stretch',
    display: 'flex',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
});
