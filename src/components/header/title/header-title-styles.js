import { withStyles } from '@material-ui/core';
import { MOBILE_MEDIA_QUERY, THEME_SPACING_UNIT } from '../../../constants/styles';

export default withStyles({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    fontFamily: '"Architects Daughter", cursive',
    paddingLeft: THEME_SPACING_UNIT * 3,
    paddingRight: THEME_SPACING_UNIT * 3,

    [MOBILE_MEDIA_QUERY]: {
      paddingBottom: THEME_SPACING_UNIT,
      paddingTop: THEME_SPACING_UNIT * 2
    }
  }
});
