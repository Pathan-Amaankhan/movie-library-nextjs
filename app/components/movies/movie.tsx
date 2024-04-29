import React from 'react';
import Image from "next/image";
import Link from "next/link";
import MovieData from "@/app/components/movies/interface";

interface Props {
	movie: MovieData,
}

const Movie = ( { movie }: Props ) => {
	return (
		<Link href={`/movies/${movie.id.toString()}`}>
			<div className='bg-[#2A2A2A] grid h-full'>
				<Image src={movie.thumbnail} alt='' height={420} width={384} className='w-full' />
				<div className='px-4 py-6 flex flex-col justify-between'>
					<div className='flex mb-4 justify-between items-start'>
						<h4>{movie.title}</h4>
						<span className='text-white opacity-50 ml-1'>{ Array.isArray( movie.taxonomies['rt-movie-genre'] ) ? movie.taxonomies["rt-movie-genre"][0].name : '' }</span>
					</div>
					<div className='flex justify-between text-white opacity-50'>
						<span>Release: { 'object' === typeof movie.metadata && movie.metadata['rt-movie-meta-basic-release-date'] ? movie.metadata['rt-movie-meta-basic-release-date'][0] : '' }</span>
						<span>{'object' === typeof movie.metadata && movie.metadata['rt-movie-meta-basic-content-rating'] ? movie.metadata['rt-movie-meta-basic-content-rating'][0] : ''}</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Movie;