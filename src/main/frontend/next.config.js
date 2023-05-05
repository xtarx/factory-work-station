/** @type {import('next').NextConfig} */
// const nextConfig = {
//     // styledComponents: true,
// };

// module.exports = nextConfig;

module.exports = {
    reactStrictMode: false,
    swcMinify: true,
    images: { unoptimized: true },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};
