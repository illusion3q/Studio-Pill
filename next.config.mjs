/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/Studio-Pill' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://studiopill.com/' : '',
    images: process.env.NODE_ENV === 'production' ? {
        loader:'akamai',
        path: 'https://studiopill.com/'
    } : {},
    output: process.env.NODE_ENV === 'production' ? 'export' : 'standalone'
  };
  
  export default nextConfig;
  