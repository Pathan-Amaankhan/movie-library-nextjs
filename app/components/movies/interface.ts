export default interface MovieData {
	id: number,
	image: string | import( 'next/dist/shared/lib/get-img-props' ).StaticImport,
	alt: string|undefined,
	name: string,
	genre: string,
	releaseDate: string,
	pg: string,
	isUpcomingMovie: boolean,
	isTrendingMovie: boolean,
};
