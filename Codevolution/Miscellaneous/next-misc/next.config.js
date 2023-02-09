/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    unoptimized: true
  },
  redirects:  ()=>{
    return [
      {
        source: '/about',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
