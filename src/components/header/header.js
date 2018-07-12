import AppBar from '@material-ui/core/AppBar';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import headerStyles from './header-styles';
import Tabs from './tabs/header-tabs';
import Title from './title/header-title';

class Header extends React.PureComponent {
  render() {
    return (
      <AppBar
        className={this.props.classes.appBar}
        position="static"
      >
        <Toolbar className={this.props.classes.toolbar}>
          <Title />
          <Tabs />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(headerStyles)(Header);
