import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export default createMuiTheme({
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
      dark: '#C96F53',
      light: '#FFD0B0',
      main: '#FF9E80'
    },
    secondary: {
      contrastText: '#202020',
      dark: '#C96F53',
      light: '#FFD0B0',
      main: '#FF9E80'
    },
    type: 'dark'
  }
});
