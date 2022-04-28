const path  = require('path'); // CommonJS

module.exports = {
    mode: 'production', // estamos trabalhando no desenvolvimento, arquivo menor mais rapido.development
    entry: './frontend/main.js',
    output: {
       path: path.resolve(__dirname, 'public', 'assets', 'js'),
       filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,  //qual arquivo quero testar, escapa o caractere de ponto. Vai ser usado.
            use: {
                loader: 'babel-loader', // o que quero usar. O que esta no packet.json no caso o babel que esta la
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map'
};