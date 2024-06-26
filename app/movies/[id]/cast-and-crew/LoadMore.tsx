'use client';
import React, {useRef} from 'react';
import Celebrity from "@/app/components/celebrities/celebrity";
import CelebrityData from "@/app/components/celebrities/interface";

interface Props {
	castAndCrew: Array<CelebrityData>
}

const LoadMore = ( { castAndCrew }: Props ) => {

	const castAndCrewListRef = useRef<HTMLInputElement>( null );

	return (
		<>
			<div ref={castAndCrewListRef} className='grid grid-cols-2 gap-6 mb-14'>
				{ castAndCrew.map( ( data: CelebrityData ) => <Celebrity key={ data.id } data={ data } /> ) }
			</div>

			<div className='flex justify-center items-center'>
				<button className='border py-3 px-9 rounded-full'>Load More</button>
			</div>
		</>
	);
};

export default LoadMore;