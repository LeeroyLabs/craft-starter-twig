const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './frontend/assets/scripts/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './web/dist'),
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/fonts/[name][ext]',
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/img/[name].[hash:7].[ext]',
                },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ],
    },

    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm-bundler.js',
        },
    },

    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
        ],
        minimize: true, // enables css minimizer in development
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new VueLoaderPlugin(),

        // Copy static assets
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './frontend/assets/images'),
                    to: path.resolve(__dirname, './web/dist/static/images'),
                },
                {
                    from: path.resolve(__dirname, './frontend/assets/fonts'),
                    to: path.resolve(__dirname, './web/dist/static/fonts'),
                },
            ],
        }),

        new webpack.DefinePlugin({
            // Drop Options API from bundle
            __VUE_OPTIONS_API__: false,
            // Drop Devtools support in production from bundle
            __VUE_PROD_DEVTOOLS__: false,
        }),
    ],

    devServer: {
        hot: true,
        open: false,
        proxy: {
            '*': {
                target: 'http://craftstarter.lndo.site',
                changeOrigin: true,
            },
        },
        static: path.join(__dirname, 'web'), // should point to the public folder
        watchFiles: ['templates/**/*.twig'],
    },

    watchOptions: {
        aggregateTimeout: 300,
        ignored: '/node_modules/',
    },
};
