import React from 'react';
import createObjectProp from 'react-object-prop';
import Context from '../../context';
import Footer from '../footer/footer';
import Header from '../header/header';
import Main from '../main/main';
import withStyles from './app-styles';

class App extends React.PureComponent {

  contextSetProp = createObjectProp();

  get contextSet() {
    return this.contextSetProp({
      pathname: this.props.location.pathname
    });
  }

  render() {
    return (
      <Context set={this.contextSet}>
        <Header />
        <Main />
        <Footer />
      </Context>
    );
  }
}

export default withStyles(App);
