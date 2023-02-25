import { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import 'webpack-dev-server';

const dev: Configuration = {
    mode: 'development',
    output: {
        publicPath: "http://localhost/assets/"
    },
    devServer: {

    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
};

export default dev;