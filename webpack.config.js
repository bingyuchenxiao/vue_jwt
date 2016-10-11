module.exports = {
  // the main entry of our app
  entry: ['./src/index.js', './src/auth/index.js'],
  // output configuration
  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: 'build.js'
    // chunkFilename: "chunks/[name]-[chunkhash:8].js"
  },
  // how modules should be transformed
  module: {
    loaders: [
      // process *.vue files using vue-loader
      { test: /\.vue$/, loader: 'vue' },
      // process *.js files using babel-loader
      // the exclude pattern is important so that we don't
      // apply babel transform to all the dependencies!
      { test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/ },
      { test: /\.(gif|png|jpg)$/, loader: 'url-loader?limit=8192&name=assets/images/[name].[ext]' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  // configure babel-loader.
  // this also applies to the JavaScript inside *.vue files
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
    // new Webpack.optimize.CommonsChunkPlugin("common.js")
  ]
}
