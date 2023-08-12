/** @type {import('next').NextConfig} */
const { withContentlayer} = require('next-contentlayer')
const path = require('path')

const nextConfig = {
  sassOptions: {
    includedPaths: [path.join(__dirname, 'styles')]
  },
  images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			}
    ]
  },
  env: {
    VERCEL_URL: process.env.VERCEL_URL
  }
}

module.exports = withContentlayer(nextConfig)