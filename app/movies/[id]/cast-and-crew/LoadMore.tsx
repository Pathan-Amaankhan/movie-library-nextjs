'use client';
import React, {useRef} from 'react';
import Image from "next/image";
import RobertDowneyJR from "@/public/assets/images/robert-downey-jr.png";
import ArrowRight from "@/public/assets/icons/arrow-right.svg";
import Link from "next/link";

interface Props {
	castAndCrew: object
}

const LoadMore = ( { castAndCrew }: Props ) => {

	const castAndCrewListRef = useRef<HTMLInputElement>( null );

	return (
		<>
			<div ref={castAndCrewListRef} className='grid grid-cols-2 gap-6 mb-14'>
				<div className='bg-[#2A2A2A] flex'>
					<Link href='/celebrities/1' className='w-1/4'>
						<Image src={ RobertDowneyJR } alt='robert-downey-jr' className='object-cover w-full h-full' />
					</Link>
					<div className='w-3/4 py-8 px-6'>
						<h3 className='mb-2'>Robert Downey Jr. <span className='leading-10 text-2xl'>(Iron Man)</span></h3>
						<p className='mb-2 text-white opacity-50'>Born - 14 April 1965</p>
						<p className='mb-2'>Robert Downey Jr. has evolved into one of the most respected actors in Hollywood. With an amazing...</p>
						<Link href='/celebrities/1'>Learn more</Link>
					</div>
				</div>
				<div className='bg-[#2A2A2A]'>
					hello
				</div>
			</div>

			<div className='flex justify-center items-center'>
				<button className='border py-3 px-9 rounded-full'>Load More</button>
			</div>
		</>
	);
};

export default LoadMore;