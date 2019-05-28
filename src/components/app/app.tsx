import { LocationState } from 'history';
import React from 'react';
import Footer from '../footer';
import Header from '../header';
import Main from '../main';
import withStyles from './app-styles';

interface IProps {
  location: LocationState;
}

export default withStyles(
  function App({ location }: IProps) {
    return (
      <>
        <Header />
        <Main pathname={location.pathname} />
        <Footer />
      </>
    );
  },
);
