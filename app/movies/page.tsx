import React from 'react';
import Image from "next/image";
import SpiderFarFromHomeMovieImage from "@/public/assets/images/spider-far-from-home.png";

const MoviesArchivePage = () => {
	return (
		<section className='max-w-[1200px] mx-auto my-20'>

			<h2 className='border-l-4 border-[#D13223] pl-3 mb-12'>Movies</h2>

			<div className='grid grid-cols-3 gap-6 mb-16'>
				<div className='w-96 bg-[#2A2A2A] grid grid-rows-480'>
					<Image src={SpiderFarFromHomeMovieImage} alt='spiderman-far-from-home' height={420}
						   width={384}/>
					<div className='px-4 py-6 flex flex-col justify-between'>
						<div className='flex mb-4 justify-between items-start'>
							<h4 className='w-60'>Spiderman: Far From Home</h4>
							<span className='text-white opacity-50'>Action</span>
						</div>
						<div className='flex justify-between text-white opacity-50'>
							<span>Release: 12 Dec 2022</span>
							<span>PG-13</span>
						</div>
					</div>
				</div>

				<div className='w-96 bg-[#2A2A2A] grid grid-rows-480'>
					<Image src={SpiderFarFromHomeMovieImage} alt='spiderman-far-from-home' height={420}
						   width={384}/>
					<div className='px-4 py-6 flex flex-col justify-between'>
						<div className='flex mb-4 justify-between items-start'>
							<h4 className='w-60'>Spiderman: Far From Home</h4>
							<span className='text-white opacity-50'>Action</span>
						</div>
						<div className='flex justify-between text-white opacity-50'>
							<span>Release: 12 Dec 2022</span>
							<span>PG-13</span>
						</div>
					</div>
				</div>

				<div className='w-96 bg-[#2A2A2A] grid grid-rows-480'>
					<Image src={SpiderFarFromHomeMovieImage} alt='spiderman-far-from-home' height={420}
						   width={384}/>
					<div className='px-4 py-6 flex flex-col justify-between'>
						<div className='flex mb-4 justify-between items-start'>
							<h4 className='w-60'>Spiderman: Far From Home</h4>
							<span className='text-white opacity-50'>Action</span>
						</div>
						<div className='flex justify-between text-white opacity-50'>
							<span>Release: 12 Dec 2022</span>
							<span>PG-13</span>
						</div>
					</div>
				</div>

				<div className='w-96 bg-[#2A2A2A] grid grid-rows-480'>
					<Image src={SpiderFarFromHomeMovieImage} alt='spiderman-far-from-home' height={420}
						   width={384}/>
					<div className='px-4 py-6 flex flex-col justify-between'>
						<div className='flex mb-4 justify-between items-start'>
							<h4 className='w-60'>Spiderman: Far From Home</h4>
							<span className='text-white opacity-50'>Action</span>
						</div>
						<div className='flex justify-between text-white opacity-50'>
							<span>Release: 12 Dec 2022</span>
							<span>PG-13</span>
						</div>
					</div>
				</div>

				<div className='w-96 bg-[#2A2A2A] grid grid-rows-480'>
					<Image src={SpiderFarFromHomeMovieImage} alt='spiderman-far-from-home' height={420}
						   width={384}/>
					<div className='px-4 py-6 flex flex-col justify-between'>
						<div className='flex mb-4 justify-between items-start'>
							<h4 className='w-60'>Spiderman: Far From Home</h4>
							<span className='text-white opacity-50'>Action</span>
						</div>
						<div className='flex justify-between text-white opacity-50'>
							<span>Release: 12 Dec 2022</span>
							<span>PG-13</span>
						</div>
					</div>
				</div>
			</div>

			<ul className='flex justify-center items-center gap-4'>
				<li className='pagination-btn active'>1</li>
				<li className='pagination-btn'>2</li>
			</ul>

		</section>
	);
};

export default MoviesArchivePage;