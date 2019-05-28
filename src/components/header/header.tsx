import { AppBar } from '@material-ui/core';
import React from 'react';
import withStyles from './header-styles';
import Social from './social';
import Toolbar from './toolbar';

class Header extends React.PureComponent {
  render() {
    return (
      <>
        <Social />
        <AppBar
          className={this.props.classes.appBar}
          position="static"
        >
          <Toolbar />
        </AppBar>
      </>
    );
  }
}

export default withStyles(Header);
