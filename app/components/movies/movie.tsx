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
			<div className='w-96 bg-[#2A2A2A] grid grid-rows-480-auto h-full'>
				<Image src={movie.image} alt={movie.alt ?? ''} height={420} width={384} />
				<div className='px-4 py-6 flex flex-col justify-between'>
					<div className='flex mb-4 justify-between items-start'>
						<h4 className='w-60'>{movie.name}</h4>
						<span className='text-white opacity-50'>{movie.genre}</span>
					</div>
					<div className='flex justify-between text-white opacity-50'>
						<span>Release: {movie.releaseDate}</span>
						<span>{movie.pg}</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Movie;