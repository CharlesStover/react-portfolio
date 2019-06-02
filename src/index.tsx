import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import IProps from '../props';
import './index.css';
import App from './components/app';
import Context from './components/context';
import hsl2theme from './utils/hsl2theme';

const GET: Array<keyof IProps> = [ 'saturation', 'lightness', 'theme' ];

export default function Portfolio(props: IProps): JSX.Element {
  return (
    <Context set={props}>
      <Context get={GET}>
        {(
          saturation: number,
          lightness: number,
          theme: ThemeOptions,
        ): JSX.Element =>
          <MuiThemeProvider theme={hsl2theme(
            props.primary,
            props.secondary,
            saturation,
            lightness,
            theme,
          )}>
            <CssBaseline />
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Route component={App} />
            </BrowserRouter>
          </MuiThemeProvider>
        }
      </Context>
    </Context>
  );
};
