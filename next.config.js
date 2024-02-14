/** @type {import('next').NextConfig} */
const { withAxiom } = require('next-axiom');

const nextConfig = {
    webpack: (config, { webpack, isServer, nextRuntime }) => {
        // Avoid AWS SDK Node.js require issue
        if (isServer && nextRuntime === "nodejs")
            config.plugins.push(
                new webpack.IgnorePlugin({ resourceRegExp: /^aws-crt$/ }),
                new webpack.IgnorePlugin({ resourceRegExp: /^encoding$/ })
            );
        return config;
    },
}

module.exports = withAxiom(nextConfig)
