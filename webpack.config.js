const path = require('path');

const alias = (pkg) => ({
  [pkg]: path.resolve(__dirname, './node_modules/' + pkg)
});

module.exports = {
  entry: './src/index.js',
  externals: [
    {
      react: {
        amd: 'react',
        commonjs: 'react',
        commonjs2: 'react',
        root: 'React'
      }
    },
    /^\@material\-ui\/core\/.*/,
    '@charlesstover/hsl2rgb',
    'react-multi-context',
    'react-object-prop',
    'react-router-dom',
    'react-router-dom/Link',
    'react-router-dom/Route',
    'react-router-dom/Switch'
  ],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        exclude: /^\/(?:build|node_modules)/,
        include: path.resolve(__dirname, 'src'),
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: 'react-portfolio.js',
    library: 'react-portfolio',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'build'),
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      ...alias('@charlesstover/hsl2rgb'),
      ...alias('@material-ui/core'),
      ...alias('react'),
      ...alias('react-multi-context'),
      ...alias('react-object-prop'),
      ...alias('react-router-dom')
    }
  }
};
