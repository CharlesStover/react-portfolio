import { withStyles } from '@material-ui/core';

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
    flexWrap: 'wrap',
    fontSize: '1em',
    justifyContent: 'center',
    lineHeight: '36px',
    padding: '0.5em 1em',
    whiteSpace: 'nowrap'
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    lineHeight: '36px',
    margin: '0 12px'
  }
}));
