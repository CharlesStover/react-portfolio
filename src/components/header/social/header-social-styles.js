import { withStyles } from '@material-ui/core';
import { THEME_SPACING_UNIT } from '../../../constants/styles';

export default withStyles(theme => ({
  root: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomColor: theme.palette.secondary.main,
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    height: THEME_SPACING_UNIT * 5,
    justifyContent: 'center'
  }
}));
