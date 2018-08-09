import createMultiContext from 'react-multi-context';

const Context = createMultiContext({
  copyright: new Date().getFullYear(),
  footer: [],
  hue: 0,
  nav: [],
  routes: [],
  social: [],
  title: ''
});

export default Context;
