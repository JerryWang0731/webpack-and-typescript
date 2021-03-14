const path = require('path');
const { Extension } = require('typescript');

module.exports = {
    mode: 'development', // production, development
    devtool: "eval-source-map",  // "source-map"
    entry: './src/index.ts',
    module: {
        rules: [         
            {
                test: /\.ts$/, // reg file must .ts file
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        publicPath: "public", // in memory webpack-dev-server 
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public') // abs path
    }
}