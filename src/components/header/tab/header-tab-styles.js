export default theme => ({
  root: {
    display: 'flex',
    height: '100%',
    minWidth: 120,
    opacity: 0.658
  },
  label: {
    alignItems: 'stretch',
    display: 'flex',
    flexGrow: 1
  },
  labelContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    flexGrow: 1,
    padding: 0
  },
  link: {
    alignItems: 'center',
    color: theme.palette.common.white,
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    textDecoration: 'none'
  },
  selected: {
    opacity: '1 !important'
  },
  wrapper: {
    height: '100%',
    position: 'absolute'
  }
});
