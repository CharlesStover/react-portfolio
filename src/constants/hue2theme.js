import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import hsl2rgb from '@charlesstover/hsl2rgb';

const hl2rgb = (hue, lightness) =>
  'rgb(' + hsl2rgb(hue, 1, lightness).join(', ') + ')';

export default (hue) => {
  const dark = hl2rgb(hue, 0.25);
  const light = hl2rgb(hue, 0.75);
  const main = hl2rgb(hue, 0.5);
  return createMuiTheme({
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
        dark,
        light,
        main
      },
      secondary: {
        contrastText: '#202020',
        dark,
        light,
        main
      },
      type: 'dark'
    }
  });
};
