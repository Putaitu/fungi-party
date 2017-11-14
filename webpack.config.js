'use strict';

// Define settings
module.exports = {
    // The main .js file path
    entry: {
        engine: './src/Engine',
        game: './src/Game'
    },

    // Define loaders
    module: {
        loaders: [
            // Babel.js
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['env']
                }
            }
        ]
    },

    // Automatically accept these extensions
    resolve: {
        extensions: ['.js', '.json']
    },
    
    // Output .js file
    output: {
        filename: './[name].js'
    }
};
