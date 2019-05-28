import { Toolbar } from '@material-ui/core';
import React from 'react';
import Title from '../title';
import withStyles from './header-toolbar-styles';

interface IProps {
  classes: Record<string, string>;
}

export default withStyles(
  function HeaderToolbar({ classes }: IProps): JSX.Element {
    return (
      <Toolbar className={classes.toolbar}>
        <Title />
      </Toolbar>
    );
  }
);
