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
    async redirects() {
        return [
            {
                source: '/posts',
                destination: 'https://carters-blog.vercel.app/',
                permanent: true,
            },
            {
                source: '/posts/:slug*',
                destination: 'https://carters-blog.vercel.app/',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
