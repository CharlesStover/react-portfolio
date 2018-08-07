const SIZE = 16;
const FOCUS_SIZE = 32;

const FOCUS_MARGIN = (FOCUS_SIZE - SIZE) / -2;

export default theme => ({
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
    filter: 'saturate(0%)',
    height: SIZE,
    transitionDuration: '0.5s',
    transitionProperty: 'filter, height, margin, width',
    transitionTimingFunction: 'ease',
    width: SIZE
  },
  link: {
    display: 'inline-flex',
    height: SIZE,
    marginLeft: theme.spacing.unit,
    width: SIZE,
    '&:focus > $image, &:hover > $image': {
      filter: 'saturate(100%)',
      height: FOCUS_SIZE,
      margin: FOCUS_MARGIN,
      width: FOCUS_SIZE
    }
  },
  message: {
    alignItems: 'flex-end',
    display: 'inline-flex',
    height: SIZE
  }
});
