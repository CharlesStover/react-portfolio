import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import Context from '../../context';
import Footer from '../footer/footer';
import Header from '../header/header';
import appStyles from './app-styles';

const context = [ 'app' ];

const contextConsumer = (App) =>
  <App />;

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Context
          children={contextConsumer}
          get={context}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(appStyles)(App);
