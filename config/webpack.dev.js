const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { HotModuleReplacementPlugin } = require("webpack");
const {merge} = require("webpack-merge");
const common = require("./webpack.common");
/**@type {import('webpack').Configuration} */
const devConfig = {
    mode: "development",
    devServer:{
        port: 3001,
        historyApiFallback:true,
        contentBase: "../dist",
        open: "chrome",
        hot: true,
    },
    target: "web",
    plugins:[
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ],
    devtool:"eval-source-map",
    module: {
        rules: [
            {
                use:["style-loader","css-loader","sass-loader"],
                test: /.(css|sass|scss)$/,
            },
        ],
    },
};

module.exports = merge(common, devConfig);