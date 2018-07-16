import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import withContext from 'react-multi-context/withContext';
import Context from '../../../context';
import styles from './header-social-styles';

class HeaderSocial extends React.PureComponent {
  render() {
    if (this.props.social.length === 0) {
      return null;
    }
    return (
      <div className={this.props.classes.root}>
        Header
      </div>
    );
  }
}

export default withStyles(styles)(withContext(Context, [ 'social' ])(HeaderSocial));
