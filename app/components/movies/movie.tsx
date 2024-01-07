import React from 'react';
import Image from "next/image";
import Link from "next/link";

interface Movie {
	id: number,
	image: string | import( 'next/dist/shared/lib/get-img-props' ).StaticImport,
	alt: string|undefined,
	name: string,
	genre: string,
	releaseDate: string,
	pg: string,
}

interface Props {
	movie: Movie,
	key: number
}

const Movie = ( { movie, key }: Props ) => {
	return (
		<div className='w-96 bg-[#2A2A2A] grid grid-rows-480' key={ key }>
			<Link href={`/movies/${movie.id.toString()}`}>
				<Image src={movie.image} alt={movie.alt ?? ''} height={420} width={384}/>
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
			</Link>
		</div>
	);
};

export default Movie;