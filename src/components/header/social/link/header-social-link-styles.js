import { withStyles } from '@material-ui/core';
import { THEME_SPACING_UNIT } from '../../../../constants/styles';

const SIZE = 16;

export default withStyles({
  root: {
    display: 'inline-flex',
    fontSize: SIZE,
    height: '1em',
    marginLeft: THEME_SPACING_UNIT,
    width: '1em',
    '&:focus > $image, &:hover > $image': {
      filter: 'saturate(100%)',
      height: '2em',
      margin: '-0.5em',
      width: '2em'
    }
  },
  image: {
    filter: 'saturate(0%)',
    height: '1em',
    transitionDuration: '0.5s',
    transitionProperty: 'filter, height, margin, width',
    transitionTimingFunction: 'ease',
    width: '1em'
  }
});
