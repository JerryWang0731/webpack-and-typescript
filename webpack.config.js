const path = require('path');

module.exports = {
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
    output: {
        publicPath: "public", // in memory webpack-dev-server 
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public') // abs path
    }
}