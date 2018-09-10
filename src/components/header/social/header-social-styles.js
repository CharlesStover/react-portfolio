import { withStyles } from '@material-ui/core';
import { THEME_SPACING_UNIT } from '../../../constants/styles';

export default withStyles(theme => ({
  root: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'inherit',
    borderBottomColor: theme.palette.secondary.main,
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1em',
    justifyContent: 'center',
    lineHeight: '48px'
  }
}));
