import React from 'react';
import {getCelebrities} from "@/app/celebrities/utils";

interface Props {
	params: {
		id: string,
	}
}

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
	return getCelebrities().map( ( celebrity ) => ( {
		id: celebrity.id.toString(),
	} ) );
}

const SingleCelebrityPage = ( { params }: Props ) => {

	const id = parseInt( params.id );

	return (
		<div>
			<p>Single Celebrity Page.</p>
			<p>Current celebrity id: { id }</p>
		</div>
	);
};

export default SingleCelebrityPage;