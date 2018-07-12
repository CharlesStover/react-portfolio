const path = require('path');

module.exports = {
  entry: './src/index.js',
  externals: {
    '@material-ui/core': {
      amd: '@material-ui/core',
      commonjs: '@material-ui/core',
      commonjs2: '@material-ui/core'
    },
    'react': {
      amd: 'react',
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React'
    },
    'react-router-dom': {
      amd: 'react-router-dom',
      commonjs: 'react-router-dom',
      commonjs2: 'react-router-dom'
    }
  },
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
          loader: 'babel-loader',
          options: {
            presets: [ 'env' ]
          }
        }
      }
    ]
  },
  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'build'),
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      '@material-ui/core': path.resolve(__dirname, './node_modules/@material-ui/core'),
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-router-dom': path.resolve(__dirname, './node_modules/react-router-dom')
    }
  }
};
