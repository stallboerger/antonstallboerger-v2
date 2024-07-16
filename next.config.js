/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer2');
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
  }
}

module.exports = withContentlayer(nextConfig)