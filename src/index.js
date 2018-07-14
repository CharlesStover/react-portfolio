import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import createObjectProp from 'react-object-prop';
import { BrowserRouter, Route } from 'react-router-dom';
import './assets/index.css';
import App from './components/app/app';
import hue2theme from './constants/hue2theme';
import Context from './context';

const contextProp = createObjectProp();
const themeProp = createObjectProp();

class ReactPortfolio extends React.PureComponent {

  _themeHue = null;
  _themeProp = null;

  get contextProvider() {
    return contextProp({
      app: this.props.app,
      copyright: this.props.copyright,
      footer: this.props.footer,
      nav: this.props.nav,
      title: this.props.title
    });
  }

  get theme() {
    if (this._themeHue !== this.props.hue) {
      this._themeHue = this.props.hue;
      this._themeProp = themeProp(hue2theme(this.props.hue));
    }
    return this._themeProp;
  }

  render() {
    return (
      <MuiThemeProvider theme={this.theme}>
        <CssBaseline />
        <Context set={this.contextProvider}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route component={App} />
          </BrowserRouter>
        </Context>
      </MuiThemeProvider>
    );
  }
}

export default ReactPortfolio;
