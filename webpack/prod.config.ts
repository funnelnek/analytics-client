import { Configuration } from 'webpack';


const prod: Configuration = {
    mode: 'production',
    optimization: {
        minimize: true;
        minimizer: new TerserPlugin()
    }
};

export default prod;