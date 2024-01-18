import React from 'react';
import MovieData from "@/app/components/movies/interface";
import Movie from "@/app/components/movies/movie";
import {createPaginationLinks, MoviesPaginationUI} from "@/app/components/movies/pagination";
import {getMoviesData} from "@/app/movies/utils";
import {redirect} from "next/navigation";

interface Props {
	params: {
		'page-number': string,
	}
}

export const generateStaticParams = async () => {

	const moviesData = await getMoviesData();

	return Array.from( Array( moviesData.total_pages ).keys() ).map( index => ( { 'page-number': ( index + 1 ).toString() } ) );

}

const MovieArchivePage = async ( { params }: Props ) => {

	const currentPage = parseInt( params['page-number'] );

	if ( 1 === currentPage ) {
		redirect( '/movies' );
	}

	const moviesData = await getMoviesData( null, currentPage );

	const total_pages = moviesData.total_pages;

	const movies = moviesData.movies;

	const paginationNumbers: Array<number|string> = createPaginationLinks( currentPage, total_pages );

	return (
		<section className='max-w-[1200px] mx-auto my-20'>

			<h2 className='border-l-4 border-[#D13223] pl-3 mb-12'>Movies</h2>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16'>
				{movies.map((movie: MovieData) => <Movie movie={movie} key={movie.id}/>)}
			</div>

			<MoviesPaginationUI currentPage={ currentPage } paginationNumbers={paginationNumbers}/>

		</section>
	);
};

export default MovieArchivePage;