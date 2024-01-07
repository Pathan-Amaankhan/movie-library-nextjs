import React from 'react';
import Link from "next/link";

const NotFoundPage = () => {
	return (
		<section className='max-w-[1200px] mx-auto my-20'>
			<div className='text-center'>
				<h2 className='mb-4'>Oops! The page can’t be found.</h2>
				<p className='mb-2'>It looks like nothing was found at this location.</p>
				<p className='text-sm'>
					<Link href='/' className='text-[#E46D62]'>Go Back to Home</Link>
				</p>
			</div>
		</section>
	);
};

export default NotFoundPage;