import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import createMultiContext from 'react-multi-context';
import createObjectProp from 'react-object-prop';
import { BrowserRouter, Route } from 'react-router-dom';
import './assets/index.css';
import App from './components/app/app';
import Footer from './components/footer/footer';
import theme from './constants/theme';

export const Context = createMultiContext();
export const contextProp = createObjectProp();

export default class ReactPortfolio extends React.PureComponent {

  get copyright() {
    return this.props.copyright || new Date().getFullYear();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Context set={contextProp({
          routes: this.props.routes,
          title: this.props.title
        })}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route component={App} />
          </BrowserRouter>
        </Context>
        <Footer
          copyright={this.copyright}
          links={this.props.footer}
        />
      </MuiThemeProvider>
    );
  }
}
