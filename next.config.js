/** @type {import('next').NextConfig} */
const { withContentlayer} = require('next-contentlayer')

const nextConfig = {
  // reactStrictMode: true,
  // disableImportAliasWarning: false
}

module.exports = withContentlayer(nextConfig)