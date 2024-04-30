/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
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
