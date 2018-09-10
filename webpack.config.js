const path = require('path');

const alias = pkg => ({
  [pkg]: path.resolve(__dirname, './node_modules/' + pkg)
});

const NODE_ENV =
  process.env.NODE_ENV ?
    process.env.NODE_ENV.trim() :
    'production';

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
    '@material-ui/core',
    'react-dom',
    'react-router-dom'
  ],
  mode: NODE_ENV,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: [ /\.(?:gif|ico|jpe?g|png)$/ ],
        loader: require.resolve('url-loader')
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
      ...alias('@material-ui/core'),
      ...alias('react'),
      ...alias('react-dom'),
      ...alias('react-router-dom')
    }
  },
  watch: NODE_ENV === 'development'
};
