import { StyleRulesCallback, withStyles } from '@material-ui/core';

const styles: StyleRulesCallback = theme => ({
  root: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'inherit',
    borderBottomColor: theme.palette.primary.dark,
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: '1em',
    justifyContent: 'center',
    lineHeight: '36px',
    padding: '0.5em 1em',
    whiteSpace: 'nowrap',
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    lineHeight: '36px',
    margin: '0 12px',
  },
});

export default withStyles(styles);
