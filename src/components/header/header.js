import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import withStyles from './header-styles';
import Social from './social/header-social';
import Toolbar from './toolbar/header-toolbar';

class Header extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Social />
        <AppBar
          className={this.props.classes.appBar}
          position="static"
        >
          <Toolbar />
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withStyles(Header);
