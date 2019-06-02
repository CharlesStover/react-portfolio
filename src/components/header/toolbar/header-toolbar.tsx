import { Toolbar } from '@material-ui/core';
import React from 'react';
import Title from '../title';
import withStyles from './header-toolbar-styles';
import ResumeButton from './resume-button';

interface IProps {
  classes: Record<string, string>;
}

export default withStyles(
  function HeaderToolbar({ classes }: IProps): JSX.Element {
    return (
      <Toolbar className={classes.root}>
        <Title />
        <ResumeButton />
      </Toolbar>
    );
  }
);
