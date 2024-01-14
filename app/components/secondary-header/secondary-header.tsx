import React from 'react';
import Link from "next/link";

const SecondaryHeader = () => {
	return (
		<div className='hidden md:block bg-black py-2 px-6'>
			<div className='hidden uppercase md:flex justify-center items-center gap-11'>
				<Link href='/movies'>Movies</Link>
				<Link href='/'>TV Shows</Link>
				<Link href='/'>Events</Link>
				<Link href='/'>Theatre</Link>
				<Link href='/celebrities'>Celebrities</Link>
			</div>
		</div>
	);
};

export default SecondaryHeader;