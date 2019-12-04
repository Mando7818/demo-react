const {
    override,
    addWebpackAlias,
} = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = override(
    addWebpackAlias({ 'react-dom': '@hot-loader/react-dom' }),
    (config, env) => {
        config = rewireReactHotLoader(config, env); //eslint-disable-line
        return config;
    }
);
