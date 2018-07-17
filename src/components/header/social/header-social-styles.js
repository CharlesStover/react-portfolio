export default (theme) => ({
  root: {
    alignItems: 'center',
    // backgroundColor: theme.palette.secondary.dark.replace(/^rgb/, 'rgba').replace(/\)$/, ', 0.1)'),
    // backgroundImage: 'linear-gradient(transparent, ' + theme.palette.common.black + ')',
    borderBottomColor: theme.palette.secondary.main,
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'row',
    height: theme.spacing.unit * 5,
    justifyContent: 'center'
  },
  image: {
    filter: 'saturate(0%) brightness(225%)'
  },
  link: {
    display: 'inline-flex',
    height: 16,
    marginLeft: theme.spacing.unit,
    width: 16
  },
  message: {
    alignItems: 'flex-end',
    display: 'inline-flex',
    height: 16
  }
});
