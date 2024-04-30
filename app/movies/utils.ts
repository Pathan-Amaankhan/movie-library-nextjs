
export const getMoviesData = async ( perPage: number|null = null, page: number|null = null, orderBy: string|null = null, order: string|null = null, label: string|null = null ) => {
	let url: string = 'https://amaan-movie-library-headless.rt.gw/wp-json/movie-library/v1/movies?';

	if ( perPage ) {
		url += `per_page=${perPage}&`;
	}

	if ( page ) {
		url += `page=${page}&`;
	}

	if ( orderBy ) {
		url += `orderby=${orderBy}&`;
	}

	if ( order ) {
		url += `order=${order}&`;
	}

	if ( label ) {
		url += `label=${label}`;
	}

	if ( '&' === url.slice( -1 ) || '?' === url.slice( -1 ) ) {
		url = url.slice( 0, -1 );
	}

	const res = await fetch( url, { next: { revalidate: 0 } } );

	if ( ! res.ok ) {
		return [];
	}

	return await res.json();
}

export const getMovieData = async ( movieID: number ) => {
	let url: string = `https://amaan-movie-library-headless.rt.gw/wp-json/movie-library/v1/movie/${movieID}`;

	const res = await fetch( url, { next: { revalidate: 3600 } } );

	if ( ! res.ok ) {
		return false;
	}

	return await res.json();
}