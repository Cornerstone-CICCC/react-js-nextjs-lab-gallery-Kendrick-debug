import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
      remotePatterns: [new URL('https://placehold.co/**'), new URL(" https://placehold.co/**")],
    },
};
  
 
export default nextConfig