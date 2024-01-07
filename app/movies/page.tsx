import React from 'react';
import Movie from "@/app/components/movie";
import {getMovies} from "@/app/movies/utils";

const MoviesArchivePage = () => {

	return (
		<section className='max-w-[1200px] mx-auto my-20'>

			<h2 className='border-l-4 border-[#D13223] pl-3 mb-12'>Movies</h2>

			<div className='grid grid-cols-3 gap-6 mb-16'>
				{ getMovies().map( ( movie ) => <Movie movie={ movie } key={ movie.id } /> ) }
			</div>

			<ul className='flex justify-center items-center gap-4'>
				<li className='pagination-btn active'>1</li>
				<li className='pagination-btn'>2</li>
			</ul>

		</section>
	);
};

export default MoviesArchivePage;