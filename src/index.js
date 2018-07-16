import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import createObjectProp from 'react-object-prop';
import { BrowserRouter, Route } from 'react-router-dom';
import './assets/index.css';
import App from './components/app/app';
import hue2theme from './constants/hue2theme';
import Context from './context';

const contextDefault = {
  copyright: new Date().getFullYear(),
  footer: [],
  nav: [],
  routes: [],
  social: [],
  title: ''
};

const contextProp = createObjectProp();

const themeProp = createObjectProp();

class ReactPortfolio extends React.PureComponent {

  _themeHue = null;
  _themeProp = null;

  get contextProvider() {
    const context = Object.create(null);
    for (const key of [ 'copyright', 'footer', 'nav', 'routes', 'social', 'title' ]) {
      if (Object.prototype.hasOwnProperty.call(this.props, key)) {
        context[key] = this.props[key];
      }
      else {
        context[key] = contextDefault[key];
      }
    }
    return contextProp(context);
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
        <Context
          default={contextDefault}
          set={this.contextProvider}
        >
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route component={App} />
          </BrowserRouter>
        </Context>
      </MuiThemeProvider>
    );
  }
}

export default ReactPortfolio;
