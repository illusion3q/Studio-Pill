const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    basePath: isProd ? '/Studio-Pill' : '',
    assetPrefix: isProd ? 'https://studiopill.com/' : '',
    images: {
        loader: 'imgix',
        path: 'https://studiopill.com/',
    },
    output: 'export'
};
