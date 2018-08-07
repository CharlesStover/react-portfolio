import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactPortfolio from './index';

const reactPortfolioServer = (props) =>
  ReactDOMServer.renderToNodeStream(
    <ReactPortolio {...props} />
  );

module.exports = reactPortfolioServer;
