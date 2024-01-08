import React from 'react';
import RobertDowneyJR from "@/public/assets/images/robert-downey-jr.png";
import ChrisEvans from "@/public/assets/images/chris-evans.png";
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

	const castAndCrew = [
		{
			'id': 1,
			'image': RobertDowneyJR,
			'alt': 'robert-downey-jr',
			'name': 'Robert Downey Jr.',
			'as': 'Iron Man',
			'birthDate': '14 April 1965',
			'about': 'Robert Downey Jr. has evolved into one of the most respected actors in Hollywood. With an amazing...',
		},
		{
			'id': 2,
			'image': ChrisEvans,
			'alt': 'chris-evans',
			'name': 'Chris Evans',
			'as': 'Captain America',
			'birthDate': '13 June 1981',
			'about': 'Christopher Robert Evans is an American actor. He began his career with roles in television series such...',
		},
	];

	return (
		<section className='max-w-[1200px] mx-auto my-20'>

			<h2 className='border-l-4 border-[#D13223] pl-3 mb-12'>Cast & Crew</h2>

			<LoadMore castAndCrew={ castAndCrew } />

		</section>
	);
};

export default CastAndCrewPage;