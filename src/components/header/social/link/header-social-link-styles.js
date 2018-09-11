import { withStyles } from '@material-ui/core';
import backgroundImage from '../../../../assets/social.png';

const SIZE = 24;

export default withStyles({
  root: {
    backgroundColor: 'transparent',
    backgroundImage: 'url("' + backgroundImage + '")',
    backgroundSize: 'auto 100%',
    display: 'inline-block',
    height: SIZE,
    marginLeft: 12,
    transform: 'scale(1)',
    transitionDuration: '0.5s',
    transitionProperty: 'filter, transform, z-index',
    transitionTimingFunction: 'ease-out',
    width: SIZE,
    zIndex: 1101,
    '&:focus, &:hover': {
      transform: 'scale(2)',
      zIndex: 1199
    },
    '& > span': {
      display: 'none'
    }
  }
});
