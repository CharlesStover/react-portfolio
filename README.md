# react-portfolio
A sleek portfolio design created in React.

This project is open-source but is not meant for public use.
Public use cases will not be considered.

![GitHub version](https://img.shields.io/github/package-json/v/CharlesStover/react-portfolio.svg)
![npm version](https://img.shields.io/npm/v/react-portfolio.svg)
![npm downloads](https://img.shields.io/npm/dt/react-portfolio.svg)
![min](https://img.shields.io/bundlephobia/min/react-portfolio.svg)
![minzip](https://img.shields.io/bundlephobia/minzip/react-portfolio.svg)

## Build
`npm run build`

## Install
* `npm install react-portfolio --save` or
* `yarn add react-portfolio`

## Use

### Client-Side Rendering
```JS
import React from 'react';
import ReactDOM from 'react-dom';
import ReactPortfolio from 'react-portfolio';
ReactDOM.render(
  <ReactPortfolio
    copyright={2008}
    footer={[]}
    hue={0}
    nav={[]}
    routes={[]}
    social={{}}
    title="My React Portfolio"
  />,
  document.getElementById('root')
);
```

### Server-Side Rendering
```JS
import reactPortfolioServer from 'react-portfolio/server';
reactPortfolioServer({
  copyright: 2008,
  footer: [],
  hue: 0,
  nav: [],
  routes: [],
  social: {},
  title: 'My React Portfolio'
});
```

## Props
* ### copyright: number

  The initial year of copyright for the portfolio.
  Will be displayed as `(c) ${props.year} - ${CURRENT_YEAR}`.

* ### footer: AnchorProps[]

  An array of `<a>` props to include in the footer.

* ### hue: number

  A number from 0 to 1, representing the hue of your portfolio's accent color.

  `0` represents red, `1/3` represents green, `2/3` represents blue.

* ### nav: Nav[]

  An array of Nav objects to use as the navigation tabs.
  A Nav object is structure as `{ path: ..., title: ... }`.

* ### routes: Route[]

  An array of Route objects to use with `react-router`.
  A Route object is structure as `{ component: ..., path: ... }`.

* ### social: Social

  A Social object of networking accounts to display in the header.
  A Social object has the properties `github`, `linkedIn`, `npmjs`, `reddit`, `stackOverflow`, `twitter`, and `youtube`.

* ### title: string

  The title of the portfolio, displayed in the header.

## Examples
* [AceAlters.com](https://acealters.com/)
* [CharlesStover.com](https://charlesstover.com/)
* [Quisido.com](https://quisido.com/)
