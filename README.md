![GitHub version](https://img.shields.io/github/package-json/v/CharlesStover/react-portfolio.svg)
![npm version](https://img.shields.io/npm/v/react-portfolio.svg)
![npm downloads](https://img.shields.io/npm/dt/react-portfolio.svg)
![min](https://img.shields.io/bundlephobia/min/react-portfolio.svg)
![minzip](https://img.shields.io/bundlephobia/minzip/react-portfolio.svg)

# react-portfolio
A sleek portfolio design created in React.

This project is open-source but is not meant for public use.
Public use cases will not be considered.

## Build
`npm run build`

## Install
* `npm install react-portfolio --save` or
* `yarn add react-portfolio`

## Props
* ### copyright: number

  The initial year of copyright for the portfolio.
  Will be displayed as `(c) ${props.year} - ${CURRENT_YEAR}`.

* ### footer: AnchorProps[]

  An array of `<a>` props to include in the footer.

* ### nav: Nav[]

  An array of Nav objects to use as the navigation tabs.
  A Nav object is structure as `{ path: ..., title: ... }`.

* ### routes: Route[]

  An array of Route objects to use with `react-router`.
  A Route object is structure as `{ component: ..., path: ... }`.

* ### social: Social

  A Social object of networking accounts to display in the header.
  A Social object has the properties `github`, `linkedIn`, `npmjs`, `reddit`, `stackOverflow`, and `twitter`.

* ### title: string

  The title of the portfolio, displayed in the header.

## Examples
* [AceAlters.com](https://acealters.com/)
* [CharlesStover.com](https://charlesstover.com/)
* [Quisido.com](https://quisido.com/)
