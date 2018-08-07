import React from 'react';
import createObjectProp from 'react-object-prop';
import Context from '../../context';
import Footer from '../footer/footer';
import Header from '../header/header';
import Main from '../main/main';
import withStyles from './app-styles';

class App extends React.PureComponent {

  contextProp = createObjectProp();

  render() {
    return (
      <React.Fragment>
        <Context
          set={this.contextProp({
            pathname: this.props.location.pathname
          })}
        >
          <Header />
        </Context>
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(App);
