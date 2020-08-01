const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: __dirname,
    //entry: './src/index.js',
    entry: {
            app: './src/index.js',
            //print: './src/print.js',
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        //filename: 'main.js',
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
     },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_module/,
                use: 'babel-loader'
            },
            {
                test: /\.css?$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebPackPlugin({            
            title: 'Output Management',
            template: path.resolve( __dirname, 'public/index.html' ),
            filename: 'index.html'
        })
    ]
};
