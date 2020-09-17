const path = require("path");
module.exports = {
    outputDir: "dist",
    assetsDir: "static",
    lintOnSave: false,
    publicPath: "./",
    configureWebpack: () => {
        return {
            devServer: {
                watchOptions: {
                    poll: true,
                    ignored: /(node_modules|dist|build|vendor|Docker|tests|backup|\.lock|\.git)/
                },
                disableHostCheck: true,
                historyApiFallback: true
            },
            devtool: "source-map"
        };
    }
};
