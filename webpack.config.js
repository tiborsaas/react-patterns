module.exports = function(env){
    return {
        context: __dirname + "/apps/" + env,
        entry: "./main.js",
        output: {
            path: __dirname + "/apps",
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    },
                },
            ]
        },
        devServer: {
            contentBase: __dirname + "/apps/" + env,
            compress: true,
            port: 3000
        },
        plugins: []
    }
}