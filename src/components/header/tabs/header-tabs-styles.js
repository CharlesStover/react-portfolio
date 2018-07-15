export default (theme) => ({
  flexContainer: {
    flexGrow: 1
  },
  indicator: {
    backgroundColor: theme.palette.common.white
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
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  nav: {
    display: 'flex'
  },
  scroller: {
    display: 'flex'
  },
  selected: {
    opacity: '1 !important'
  },
  tab: {
    display: 'flex',
    height: '100%',
    minWidth: 120,
    opacity: 0.658
  },
  tabs: {
    alignSelf: 'stretch',
    display: 'flex'
  },
  wrapper: {
    height: '100%',
    position: 'absolute'
  }
});
