import React from 'react';
import Link from "next/link";
import MoviesArchivePage from "@/app/movies/page";
import Movie from "@/app/components/movie";
import {getMovies} from "@/app/movies/utils";

interface Props {
	params: {
		id: string
	}
}

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
	return getMovies().map( ( movie ) => ( {
		id: movie.id.toString(),
	} ) );
}

const SingleMoviePage = ( { params }: Props ) => {

	const id = parseInt( params.id );

	return (
		<section>
			Single Movie Page.
			<Link href={ `/movies/${id}/cast-and-crew` }>See Cast & Crew</Link>
		</section>
	);
};

export default SingleMoviePage;