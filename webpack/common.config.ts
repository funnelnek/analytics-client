import * as path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin'

const dist = path.resolve(__dirname, '../dist');
const context = path.resolve(__dirname, '../');
const hostname = "";
const publicPath = "";
const src = path.resolve(context, 'src/');

const common: Configuration = {
    context: context,
    output: {
        path: dist,
        clean: true
    },
    entry: {
        main: {
            import: src + "index.ts",
            dependOn: ["shared"]
        },
        dashboard: {
            import: src + "dashboard",
            dependOn: ["shared"]
        },
        shared: [
            'd3', 
            'react',
            'react-dom', 
            'react-redux', 
            'redux', 
            'redux-saga'
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|svg)$/,
                use: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                }
            },            
            {
                test: /\.(s[ca]ss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'postcss-loader', 'css-loader', 'sass-loader'],
            },          
            {
                test: /\.jsx?/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },    
    plugins: [
        new HtmlWebpackPlugin({

        })
    ]
};

export default common;