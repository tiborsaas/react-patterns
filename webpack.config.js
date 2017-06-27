
module.exports = {
    context: __dirname + "/src/",
    entry: "./index.js",
    output: {
        path: __dirname + "/build/js",
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
    plugins: []
}