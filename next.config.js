/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'amaan-movie-library-headless.rt.gw',
				pathname: '**',
			},
		],
	},
}

module.exports = nextConfig
