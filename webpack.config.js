module.exports = {
    entry: './src/client/main.js',
    output: {
        path: __dirname + '/dist/static/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel'
            }
        ]
    }
};
