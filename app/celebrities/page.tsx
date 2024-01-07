import React from 'react';
import LoadMore from "@/app/celebrities/LoadMore";
import {getCelebrities} from "@/app/celebrities/utils";

const CelebritiesArchivePage = () => {

	return (
		<section className='max-w-[1200px] mx-auto my-20'>

			<h2 className='border-l-4 border-[#D13223] pl-3 mb-12'>Celebrities</h2>

			<LoadMore celebrities={getCelebrities()}/>

		</section>
	);
};

export default CelebritiesArchivePage;