// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const glob = require("glob");

const isProduction = process.env.NODE_ENV === 'production';


const config = {
    // entry: {
    //     'pxc_/webresources/account/forms/mainForm': path.resolve(__dirname, 'pxc_/webresources/account/forms/mainForm.ts'),
    //     'pxc_/webresources/contact/forms/mainForm': path.resolve(__dirname, 'pxc_/webresources/contact/forms/mainForm.ts'),
    // },
    // output: {
    //     path: path.resolve(__dirname, '../src/WebResources'),
    // },

    // AUTOPICKUP js resources
    
    entry: glob.sync("./pxc_/**/*.ts").reduce((acc, item) => {
        const path = item.split("/");
        path.pop();
        const name = item.split('.').slice(0, -1).join('.'); //path.join('/');
        if(! name.includes('common')) {
            acc[name] = item;
            console.log(`glob:${path}###${name}###${item}`);
        }
        return acc;
    }, {}),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '../src/WebResources')
    },

    // AUTO PICKUP END

    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
};

// module.exports = {
//     mode: 'production',
//   optimization: {
//     minimize: false,
//   },
// };

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    config.optimization = {
    minimize: false,
  };
    return config;
};
