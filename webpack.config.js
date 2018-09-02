const path = require('path');

const alias = (pkg) => ({
  [pkg]: path.resolve(__dirname, './node_modules/' + pkg)
});

module.exports = {
  entry: {
    index: './src/index.js',
    server: './src/server.js'
  },
  externals: [
    {
      react: {
        amd: 'react',
        commonjs: 'react',
        commonjs2: 'react',
        root: 'React'
      }
    },
    '@charlesstover/hsl2rgb',
    '@material-ui/core',
    'react-dom',
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
        test: [ /\.(?:gif|ico|jpe?g|png)$/ ],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000
        }
      },
      {
        include: path.resolve(__dirname, 'src'),
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    library: 'react-portfolio',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '.'),
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      ...alias('@charlesstover/hsl2rgb'),
      ...alias('@material-ui/core'),
      ...alias('react'),
      ...alias('react-dom'),
      ...alias('react-multi-context'),
      ...alias('react-object-prop'),
      ...alias('react-router-dom')
    }
  }
};
