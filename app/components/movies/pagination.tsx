import Link from "next/link";
import React from "react";

/**
 * Create Pagination Links Array.
 *
 * Example: [1, "...", 521, 522, 523, 524, 525, "...", 529]
 *
 * @param {int} currentPage Current page no.
 * @param {int} totalPages Count of total no of pages.
 *
 * @return {Array} Array containing the indexes to be looped through to create pagination
 */
export const createPaginationLinks = ( currentPage: number, totalPages: number ): Array<any> => {
	const paginationArray: Array<any> = [];
	let countOfDotItems = 0;

	// If there is only one page, return an empty array.
	if ( ! totalPages && 1 >= totalPages ) {
		return paginationArray;
	}

	/**
	 * Push the two index items before the current page.
	 */
	if ( 0 < currentPage - 2 ) {
		paginationArray.push( currentPage - 2 );
	}

	if ( 0 < currentPage - 1 ) {
		paginationArray.push( currentPage - 1 );
	}

	// Push the current page index item.
	paginationArray.push( currentPage );

	/**
	 * Push the two index items after the current page.
	 */
	if ( totalPages >= currentPage + 1 ) {
		paginationArray.push( currentPage + 1 );
	}

	if ( totalPages >= currentPage + 2 ) {
		paginationArray.push( currentPage + 2 );
	}

	/**
	 * Push the '...' at the beginning of the array
	 * only if the difference of between the 1st and 2nd index item is greater than 1.
	 */
	if ( paginationArray[0] - 1 > 1 ) {
		paginationArray.unshift( '...' );
		countOfDotItems += 1;
	}

	/**
	 * Push the '...' at the end of the array.
	 * only if the difference of between the last and 2nd last item is greater than 2.
	 * We remove the count of dot items from the array to get the actual indexes, while checking the condition.
	 */
	if ( 2 < totalPages - paginationArray[paginationArray.length - ( 2 - countOfDotItems )] ) {
		paginationArray.push( '...' );
	}

	// Push first index item in the array if it does not already exists.
	if ( -1 === paginationArray.indexOf( 1 ) ) {
		paginationArray.unshift( 1 );
	}

	// Push last index item in the array if it does not already exists.
	if ( -1 === paginationArray.indexOf( totalPages ) ) {
		paginationArray.push( totalPages );
	}

	return paginationArray;
};

export const MoviesPaginationUI = ( { currentPage, paginationNumbers }: { currentPage: number, paginationNumbers: Array<string|number> } ) => {

	return (
		<ul className='flex justify-center items-center gap-4'>
			{
				paginationNumbers.map( ( paginationNumber: string|number, index: number ) => {
					let className = 'pagination-btn ';

					if ( currentPage === paginationNumber) {
						className += 'active';
					}

					if ('string' === typeof paginationNumber) {
						className = 'mx-2';
					}

					return (
						<li key={index} className={className}>
							{
								'string' !== typeof paginationNumber && currentPage !== paginationNumber &&
								<Link href={`/movies/page/${paginationNumber}`} className='flex justify-center items-center w-full h-full'>
									{paginationNumber}
								</Link>
							}

							{ ('string' === typeof paginationNumber || currentPage === paginationNumber) && paginationNumber }
						</li>
					);
				} )
			}
		</ul>
	);

}