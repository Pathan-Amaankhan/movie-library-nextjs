import React from 'react';
import Movie from "@/app/components/movie";
import LoadMore from "@/app/movies/[id]/cast-and-crew/LoadMore";
import {getMovies} from "@/app/movies/utils";

interface Props {
	params: {
		id: string,
	}
}

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
	return getMovies().map( ( movie ) => ( {
		id: movie.id.toString(),
	} ) );
}

const CastAndCrewPage = ( { params }: Props ) => {
	const id = parseInt( params.id );

	const castAndCrew = {}

	return (
		<section className='max-w-[1200px] mx-auto my-20'>

			<h2 className='border-l-4 border-[#D13223] pl-3 mb-12'>Cast & Crew</h2>

			<LoadMore castAndCrew = { castAndCrew } />

		</section>
	);
};

export default CastAndCrewPage;