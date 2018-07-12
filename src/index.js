import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './assets/index.css';
import Footer from './components/footer/footer';
import theme from './constants/theme';

export default class ReactPortfolio extends React.PureComponent {

  get copyright() {
    return this.props.copyright || new Date().getFullYear();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route component={this.props.app} />
        </BrowserRouter>
        <Footer
          copyright={this.copyright}
          links={this.props.footer}
        />
      </MuiThemeProvider>
    );
  }
}
