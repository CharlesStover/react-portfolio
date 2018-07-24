export default (theme) => ({
  root: {
    alignItems: 'center',
    alignSelf: 'stretch',
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
