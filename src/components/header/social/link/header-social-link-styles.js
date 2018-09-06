import { withStyles } from '@material-ui/core';
import { THEME_SPACING_UNIT } from '../../../../constants/styles';
import backgroundImage from '../../../../assets/social.png';

const SIZE = 16;

const transition = {
  transitionDuration: '0.5s',
  transitionTimingFunction: 'ease-out'
};

export default withStyles({
  root: {
    ...transition,
    backgroundBlendMode: 'luminosity',
    backgroundColor: 'inherit',
    backgroundImage: 'url("' + backgroundImage + '")',
    backgroundSize: 'auto 100%',
    display: 'inline-flex',
    fontSize: SIZE,
    height: '1em',
    marginBottom: 0,
    marginLeft: THEME_SPACING_UNIT,
    marginRight: 0,
    marginTop: 0,
    position: 'relative',
    transitionProperty: 'font-size, height, margin, width',
    width: '1em',
    '&:focus, &:hover': {
      fontSize: SIZE * 2,
      marginBottom: '-0.25em',
      marginLeft: 'calc(' + THEME_SPACING_UNIT + 'px - 0.25em)',
      marginRight: '-0.25em',
      marginTop: '-0.25em',
      '& > $color': {
        opacity: 1
      }
    }
  },
  color: {
    ...transition,
    backgroundImage: 'url("' + backgroundImage + '")',
    backgroundSize: 'auto 100%',
    display: 'inline-block',
    flexGrow: 1,
    opacity: 0,
    transitionProperty: 'opacity',
    '& > span': {
      display: 'none'
    }
  }
});
