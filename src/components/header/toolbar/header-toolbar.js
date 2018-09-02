import { Toolbar } from '@material-ui/core';
import React from 'react';
import Tabs from '../tabs/header-tabs';
import Title from '../title/header-title';
import withStyles from './header-toolbar-styles';

class HeaderToolbar extends React.PureComponent {
  render() {
    return (
      <Toolbar className={this.props.classes.toolbar}>
        <Title />
        <Tabs />
      </Toolbar>
    );
  }
}

export default withStyles(HeaderToolbar);
