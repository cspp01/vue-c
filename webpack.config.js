module.exports = {
    entry : {
        index : './src/index.js'
    },
    output : {
        path : __dirname + '/build',
        filename : '[name].js'
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                use : [
                    {
                        loader : 'babel-loader'
                    }
                ]
            },
            {
                test : /\.vue$/,
                use : [
                    {
                        loader : 'vue-loader'
                    }
                ]
            },
            {
                test : /\.scss$/,
                use : [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader'
                    },
                    {
                        loader : 'sass-loader'
                    }
                ]
            },
            {
                test : /\.css$/,
                use : [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader'
                    },
                ]
            }
        ]
    }
};
