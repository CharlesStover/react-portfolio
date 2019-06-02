import { withStyles } from '@material-ui/core';
import backgroundImage from '../../../../assets/social.png';

const SIZE: number = 24;

export default withStyles({
  root: {
    backgroundColor: 'transparent',
    backgroundImage: `url("${backgroundImage}")`,
    backgroundSize: 'auto 100%',
    display: 'inline-block',
    height: SIZE,
    transform: 'scale(1)',
    transitionDuration: '0.5s',
    transitionProperty: 'filter, transform, z-index',
    transitionTimingFunction: 'ease-out',
    width: SIZE,
    zIndex: 1101,
    '&:focus, &:hover': {
      transform: 'scale(2)',
      zIndex: 1199,
    },
    '&:not(:first-child)': {
      marginLeft: 12,
    },
    '& > span': {
      display: 'none',
    },
  },
});
