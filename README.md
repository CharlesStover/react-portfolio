# react-portfolio [![package](https://img.shields.io/github/package-json/v/CharlesStover/react-portfolio.svg)](https://github.com/CharlesStover/react-portfolio/) [![npm downloads](https://img.shields.io/npm/dt/react-portfolio.svg)](https://www.npmjs.com/package/react-portfolio) [![minzip](https://img.shields.io/bundlephobia/minzip/react-portfolio.svg)](https://www.npmjs.com/package/react-portfolio) [![build](https://travis-ci.com/CharlesStover/react-portfolio.svg)](https://travis-ci.com/CharlesStover/react-portfolio)

A sleek portfolio design created in React.

This project is open-source but is not meant for public use. Public use cases
will not be considered.

## Build

`npm run build`

## Install

* `npm install react-portfolio` or
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
    primary={0}
    resume="https://yoursite.com/resume.pdf"
    routes={[]}
    secondary={0}
    social={{}}
    title="My React Portfolio"
  />,
  document.getElementById('root'),
);
```

## Props

### copyright: number

  The initial year of copyright for the portfolio.
  Will be displayed as `(c) ${props.year} - ${CURRENT_YEAR}`.

### footer: AnchorProps[]

  An array of `<a>` props to include in the footer.

### lightness: number

  A number from 0 to 1, representing the lightness of your portfolio's
  accent color.

  `0` represents black, `1/2` represents color, `1` represents white.

### primary: number

  A number from 0 to 1, representing the hue of your portfolio's primary color.

  `0` represents red, `1/3` represents green, `2/3` represents blue.

### resume: string

  A URL pointing to a downloadable copy of your resume.

### routes: Route[]

  An array of Route objects to use with `react-router`.
  A Route object is structure as `{ component: ..., path: ... }`.

### saturation: number

  A number from 0 to 1, representing the saturation of your portfolio's
  accent color.

  `0` represents black and white, `1` represents full-color.

### secondary: number

  A number from 0 to 1, representing the hue of your portfolio's secondary
  color.

  `0` represents red, `1/3` represents green, `2/3` represents blue.

### social: Social

  A Social object of networking accounts to display in the header.

  A Social object has the properties `github`, `linkedIn`, `npmjs`, `reddit`,
  `stackOverflow`, `twitter`, and `youtube`.

### theme: Partial<Theme>

  A partial object that will be deep merged with the default Material UI theme.

### title: string

  The title of the portfolio, displayed in the header.

## Examples

* [AceAlters.com](https://acealters.com/)
* [CharlesStover.com](https://charlesstover.com/)
* [Quisido.com](https://quisido.com/)
