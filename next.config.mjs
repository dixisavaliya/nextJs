/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'anhasweb.com',
        ]
    },
    sassOptions: {
        quietDeps: true,
        silenceDeprecations: [
            'legacy-js-api',
            'import',
            'global-builtin',
            'color-functions',
            'mixed-decls',
            'strict-unary',
            'function-units'
        ]
    },
    async headers() {
        return [
            {
                // Apply headers to all routes
                source: '/(.*)',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains; preload',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
