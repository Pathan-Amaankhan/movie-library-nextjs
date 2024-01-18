/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: {
		domains: [ 'amaan-movie-library-headless.rt.gw' ],
	}
}

module.exports = nextConfig
