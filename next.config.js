/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                //port: '',
                //pathname: '/Rashy-hub/blogpost-davegray/main/images/**',
            },
        ],
    },
}

module.exports = nextConfig
