export default (theme) => ({
  '@global': {
    a: {
      color: theme.palette.secondary.light
    }
  },
  main: {
    flexGrow: 1,

    // Optimal reading width: 66 characters per line
    maxWidth: '66rem',
    width: '100%'
  }
});
