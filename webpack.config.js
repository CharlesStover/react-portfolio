const path = require('path');

const alias = pkg => ({
  [pkg]: path.resolve(__dirname, './node_modules/' + pkg)
});

const NODE_ENV =
  process.env.NODE_ENV ?
    process.env.NODE_ENV.trim() :
    'production';

const OUTPUT_DIRECTORY =
  process.env.REPOSITORY ?
    `../${process.env.REPOSITORY}/node_modules/react-portfolio/` :
    '';

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  externals: [
    {
      react: {
        amd: 'react',
        commonjs: 'react',
        commonjs2: 'react',
        root: 'React',
      },
    },
    '@material-ui/core',
    '@material-ui/styles',
    '@material-ui/system',
    '@material-ui/types',
    '@material-ui/utils',
    'react-dom',
    'react-router-dom',
  ],
  mode: NODE_ENV,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: [ /\.(?:gif|ico|jpe?g|png)$/ ],
        loader: require.resolve('url-loader'),
      },
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.[jt]sx?$/,
      },
    ],
  },
  output: {
    filename: `${OUTPUT_DIRECTORY}[name].js`,
    library: 'react-portfolio',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '.'),
    umdNamedDefine: true,
  },
  resolve: {
    alias: {
      ...alias('@material-ui/core'),
      ...alias('@material-ui/styles'),
      ...alias('@material-ui/system'),
      ...alias('@material-ui/types'),
      ...alias('@material-ui/utils'),
      ...alias('react'),
      ...alias('react-dom'),
      ...alias('react-router-dom'),
    },
    extensions: [ '.js', '.json', '.jsx', '.ts', '.tsx' ],
  },
  watch: NODE_ENV === 'development',
};
