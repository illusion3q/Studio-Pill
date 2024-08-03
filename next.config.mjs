/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/Studio-Pill' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Studio-Pill/' : '',
    images: {
      loader: 'akamai',
      path: process.env.NODE_ENV === 'production' ? '/Studio-Pill/' : '/',
    },
    output: 'export',
  };
  
  export default nextConfig;
  