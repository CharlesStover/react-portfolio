import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import memoizeOne from 'memoize-one';
import React from 'react';
import createObjectProp from 'react-object-prop';
import { BrowserRouter, Route } from 'react-router-dom';
import './assets/index.css';
import App from './components/app/app';
import hue2theme from './constants/hue2theme';
import Context from './context';

class Portfolio extends React.PureComponent {

  contextProp = createObjectProp();
  hue2theme = memoizeOne(hue2theme);

  render() {
    return (
      <MuiThemeProvider theme={this.hue2theme(this.props.hue)}>
        <CssBaseline />
        <Context set={this.contextProp(this.props)}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route component={App} />
          </BrowserRouter>
        </Context>
      </MuiThemeProvider>
    );
  }
}

export default Portfolio;
