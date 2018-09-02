import hsl2rgb from '@charlesstover/hsl2rgb';
import { createMuiTheme } from '@material-ui/core';

const hsl2css = (hue, saturation, lightness) =>
  'rgb(' + hsl2rgb(hue, saturation, lightness).map((x) => Math.round(x * 255)).join(', ') + ')';

export default hue =>
  createMuiTheme({
    palette: {
      background: {
        default: '#202020',
        paper: '#303030'
      },
      common: {
        black: '#202020',
        white: '#F0F0F0'
      },
      error: {
        contrastText: '#000000',
        dark: '#C8839B',
        light: '#FFE6FF',
        main: '#FCB3CC'
      },
      primary: {
        contrastText: '#202020',
        dark: hsl2css(hue, 0.5, 0.25),
        light: hsl2css(hue, 0.5, 0.75),
        main: hsl2css(hue, 0.5, 0.5)
      },
      secondary: {
        contrastText: '#202020',
        dark: hsl2css(hue, 0.75, 0.25),
        light: hsl2css(hue, 0.75, 0.75),
        main: hsl2css(hue, 0.75, 0.5)
      },
      type: 'dark'
    }
  });
