import React from 'react';
import Movie from "@/app/components/movies/movie";
import {getMoviesData} from "@/app/movies/utils";
import MovieData from "@/app/components/movies/interface";
import {createPaginationLinks, MoviesPaginationUI} from "@/app/components/movies/pagination";

const MoviesArchiveFirstPage = async () => {

	const moviesData = await getMoviesData();

	const total_pages = moviesData.total_pages;

	const movies = moviesData.movies;

	const paginationNumbers: Array<number|string> = createPaginationLinks( 1, total_pages );

	return (
		<section className='max-w-[1200px] mx-auto my-20'>

			<h2 className='border-l-4 border-[#D13223] pl-3 mb-12'>Movies</h2>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16'>
				{ movies.map( ( movie: MovieData ) => <Movie movie={ movie } key={ movie.id } /> ) }
			</div>

			<MoviesPaginationUI currentPage={1} paginationNumbers={ paginationNumbers } />

		</section>
	);
};

export default MoviesArchiveFirstPage;