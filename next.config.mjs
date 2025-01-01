/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // https://avatars.githubusercontent.com/u/102479896?v=4
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
            }
        ]
    },
    experimental: {
        dynamicIO: true,
    }
};

export default nextConfig;
