import { createMuiTheme, Theme } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import merge from 'lodash.merge';
import hsl2css from './hsl2css';

export default function hsl2theme(
  primary: number,
  secondary: number | void,
  saturation: number,
  lightness: number,
  customThemeOptions: ThemeOptions = {},
): Theme {
  const _secondary = secondary || primary;

  const backgroundColor = hsl2css(primary, 0.25, 38.5 / 256);
  const primaryDark = hsl2css(primary, saturation, lightness / 2);
  const secondaryDark = hsl2css(_secondary, saturation, lightness / 2);

  const baseThemeOptions = {
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: hsl2css(primary, saturation, 0.125),
        },
        colorSecondary: {
          backgroundColor: hsl2css(_secondary, saturation, 0.125),
        },
      },
      MuiCssBaseline: {
        '@global': {
          body: {
            fontSize: '1em',
          },
        },
      },
      MuiPaper: {
        root: {
          backgroundColor,
        },
      },
      MuiTooltip: {
        tooltip: {
          backgroundColor,
          borderColor: primaryDark,
          borderStyle: 'solid',
          borderWidth: 1,
          fontSize: '0.8em',
          padding: '0.5em 1em',
        },
      },
    },
    palette: {
      background: {
        default: hsl2css(primary, 1, 16 / 256),
        paper: '#303030',
      },
      common: {
        black: '#202020',
        white: '#F0F0F0',
      },
      error: {
        contrastText: '#000000',
        dark: '#C8839B',
        light: '#FFE6FF',
        main: '#FCB3CC',
      },
      primary: {
        contrastText: '#202020',
        dark: primaryDark,
        light: hsl2css(primary, saturation, 1 - lightness / 2),
        main:  hsl2css(primary, saturation,     lightness),
      },
      secondary: {
        contrastText: '#202020',
        dark: secondaryDark,
        light: hsl2css(_secondary, saturation, 1 - lightness / 2),
        main:  hsl2css(_secondary, saturation,     lightness),
      },
      type: 'dark',
    },
    typography: {
      htmlFontSize: 16,
    },
  };

  const themeOptions = merge(baseThemeOptions, customThemeOptions);
  return createMuiTheme(themeOptions);
}
