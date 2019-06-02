import { AppBar } from '@material-ui/core';
import React from 'react';
import Social from './social';
import Toolbar from './toolbar';

export default function Header(): JSX.Element {
  return (
    <>
      <Social />
      <AppBar
        color="primary"
        position="static"
      >
        <Toolbar />
      </AppBar>
    </>
  );
}
