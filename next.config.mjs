/** @type {import('next').NextConfig} */
const nextConfig = {
    // static run krni ho site to
    // output:'export',
    // images:{unoptimized:true}
    // node js ke through run karwana ho to
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'files.stripe.com'
            },
        ],
    },
};

export default nextConfig;
