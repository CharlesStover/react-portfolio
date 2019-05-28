import { createMuiTheme, Theme } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import deepmerge from 'deepmerge';
import hsl2css from './hsl2css';

export default function hsl2theme(
  hue: number,
  saturation: number,
  lightness: number,
  themeOptions: ThemeOptions = {},
): Theme {
  return deepmerge(
    createMuiTheme({
      palette: {
        background: {
          default: '#202020',
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
          dark:  hsl2css(hue, saturation,     lightness / 2),
          light: hsl2css(hue, saturation, 1 - lightness / 2),
          main:  hsl2css(hue, saturation,     lightness),
        },
        secondary: {
          contrastText: '#202020',
          dark:  hsl2css(hue, 1 - saturation / 2,     lightness / 2),
          light: hsl2css(hue, 1 - saturation / 2, 1 - lightness / 2),
          main:  hsl2css(hue, 1 - saturation / 2,     lightness),
        },
        type: 'dark',
      },
      typography: {
        htmlFontSize: 16,
      },
    }),
    themeOptions,
  );
}
