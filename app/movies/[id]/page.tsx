import React from 'react';
import Link from "next/link";
import MovieData from "@/app/components/movies/interface";
import {notFound} from "next/navigation";
import Image from "next/image";
import StarIcon from "@/public/assets/icons/star.svg";
import RobertDowneyJR from "@/public/assets/images/robert-downey-jr.png";
import ChrisEvans from "@/public/assets/images/chris-evans.png";
import ArrowRight from "@/public/assets/icons/arrow-right.svg";
import ArrowRightWhite from "@/public/assets/icons/arrow-right-white.svg";
import AvengerEndGameImage1 from "@/public/assets/images/avenger-end-game-image-1.png";
import YoutubeVideoPlayer from "@/app/components/misc/youtube-video-player";
import ProfileIcon from "@/public/assets/icons/profile-icon.png";
import {getMovieData} from "@/app/movies/utils";

interface Props {
	params: {
		id: string
	}
}

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
	return getMovies().map( ( movie ) => ( {
		id: movie.id.toString(),
	} ) );
}

const SingleMoviePage = async ( { params }: Props ) => {

	const id = parseInt( params.id );

	const movieData: MovieData|false = await getMovieData( id );

	if ( ! movieData ) {
		notFound();
	}

	return (
		<>
			<section className='max-w-[1200px] mx-auto flex my-9 gap-9'>
				<Image src={ movieData.image } alt={ movieData.alt ?? '' } width={ 592 } height={ 876 } className='w-1/2' />
				<div className='w-1/2'>
					<h1 className='my-16'>{ movieData.name }</h1>

					<div className='text-2xl leading-6 flex justify-start items-center gap-4 mb-9'>
						<div className='flex justify-start items-center gap-3'><Image src={StarIcon} alt='start' width={32} height={32} className='w-8 h-8' />8.4/10</div>
						<div className='before:content-["•"] before:mr-4'>2019</div>
						<div className='before:content-["•"] before:mr-4'>PG-13</div>
						<div className='before:content-["•"] before:mr-4'>3H 1M</div>
					</div>

					<p className='text-xl leading-8 !mb-10'>After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos&apos; actions and restore balance to the universe.</p>

					<div className='flex justify-start items-center flex-wrap gap-4 mb-12'>
						<p className='border py-2 px-4 rounded-full'>Action</p>
						<p className='border py-2 px-4 rounded-full'>Adventure</p>
						<p className='border py-2 px-4 rounded-full'>Drama</p>
					</div>
					<div className='text-xl leading-8'>
						<span className='font-bold mr-4'>Directors: </span><span>Anthony Russo • Joe Russo</span>
					</div>
				</div>
			</section>

			<section className='max-w-[1200px] mx-auto'>
				<section className='flex gap-32 my-32'>
					<div className='w-4/6'>
						<h3 className='mb-12 border-l-4 border-[#D13223] pl-3' id='synopsis'>Synopsis</h3>
						<div>
							<p>After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.
								With the help of remaining allies, the Avengers assemble once more in order to reverse
								Thanos&apos; actions and restore balance to the universe.</p>
							<p>After the devastating events of Avengers: Infinity War (2018), the universe is in ruins
								due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the
								Avengers must assemble once more in order to undo Thanos&apos;s actions and undo the chaos to
								the universe, no matter what consequences may be in store, and no matter who they
								face...</p>
							<p>The grave course of events set in motion by Thanos, that wiped out half the universe and
								fractured the Avengers ranks, compels the remaining Avengers to take one final stand in
								Marvel Studios&apos; grand conclusion to twenty-two films - Avengers: Endgame.</p>
							<p>Catastrophe. Confusion. Loss. The overwhelming devastation caused by the mad Titan Thanos
								has left what remains of the Avengers reeling. For a while, all hope seems lost...until
								an opportunity to reverse the damage is presented. Now, the team must assemble once more
								and do whatever it takes to restore the universe and bring those they lost back.</p>
						</div>
					</div>

					<div className='px-8 pt-6 pb-3 bg-[#2A2A2A] w-72 h-fit'>
						<h3 className='mb-5'>Quick Links</h3>
						<ul className='text-[18px] leading-8'>

							<li className='py-3'>
								<Link href='#synopsis' className='flex items-center justify-start gap-2'>
									<Image src={ArrowRightWhite} alt='arrow-right-wite' width={20} height={20} className='w-5 h-5'/>
									<span>Synopsis</span>
								</Link>
							</li>

							<li className='py-3'>
								<Link href='#cast-and-crew' className='flex items-center justify-start gap-2'>
									<Image src={ArrowRightWhite} alt='arrow-right-wite' width={20} height={20} className='w-5 h-5'/>
									<span>Cast & Crew</span>
								</Link>
							</li>

							<li className='py-3'>
								<Link href='#snapshots' className='flex items-center justify-start gap-2'>
									<Image src={ArrowRightWhite} alt='arrow-right-wite' width={20} height={20} className='w-5 h-5'/>
									<span>Snapshots</span>
								</Link>
							</li>

							<li className='py-3'>
								<Link href='#trailer-and-clips' className='flex items-center justify-start gap-2'>
									<Image src={ArrowRightWhite} alt='arrow-right-wite' width={20} height={20} className='w-5 h-5'/>
									<span>Trailer & Clips</span>
								</Link>
							</li>

							<li className='py-3'>
								<Link href='#reviews' className='flex items-center justify-start gap-2'>
									<Image src={ArrowRightWhite} alt='arrow-right-wite' width={20} height={20} className='w-5 h-5'/>
									<span>Reviews</span>
								</Link>
							</li>

						</ul>
					</div>
				</section>

				<section className='my-32'>
					<div className='mb-12 flex justify-between items-center'>
						<h3 className='border-l-4 border-[#D13223] pl-3' id='cast-and-crew'>Cast & Crew</h3>
						<Link href={`/movies/${id}/cast-and-crew`} className='text-[#E46D62] flex items-center'>
							<span className='mr-1 text-sm leading-6'>View All</span>
							<Image src={ArrowRight} alt='learn-more' width={16} height={16} className='w-4 h-4 mt-0.5'/>
						</Link>
					</div>

					<div className='grid grid-cols-4 gap-8'>
						<div className='grid grid-rows-250-auto'>
							<Image src={RobertDowneyJR} alt='robert-downey-jr' className='object-cover h-full'/>
							<div className='bg-[#2A2A2A] text-center py-6 px-2 text-xl leading-5'>Robert Downey Jr.</div>
						</div>
						<div className='grid grid-rows-250-auto'>
							<Image src={ChrisEvans} alt='chris-evans' className='object-cover h-full'/>
							<div className='bg-[#2A2A2A] text-center py-6 px-2 text-xl leading-5'>Chris Evans</div>
						</div>
						<div className='grid grid-rows-250-auto'>
							<Image src={RobertDowneyJR} alt='robert-downey-jr' className='object-cover h-full'/>
							<div className='bg-[#2A2A2A] text-center py-6 px-2 text-xl leading-5'>Robert Downey Jr.</div>
						</div>
						<div className='grid grid-rows-250-auto'>
							<Image src={ChrisEvans} alt='chris-evans' className='object-cover h-full'/>
							<div className='bg-[#2A2A2A] text-center py-6 px-2 text-xl leading-5'>Chris Evans</div>
						</div>

						<div className='grid grid-rows-250-auto'>
							<Image src={RobertDowneyJR} alt='robert-downey-jr' className='object-cover h-full'/>
							<div className='bg-[#2A2A2A] text-center py-6 px-2 text-xl leading-5'>Robert Downey Jr.</div>
						</div>
						<div className='grid grid-rows-250-auto'>
							<Image src={ChrisEvans} alt='chris-evans' className='object-cover h-full'/>
							<div className='bg-[#2A2A2A] text-center py-6 px-2 text-xl leading-5'>Chris Evans</div>
						</div>
						<div className='grid grid-rows-250-auto'>
							<Image src={RobertDowneyJR} alt='robert-downey-jr' className='object-cover h-full'/>
							<div className='bg-[#2A2A2A] text-center py-6 px-2 text-xl leading-5'>Robert Downey Jr.</div>
						</div>
						<div className='grid grid-rows-250-auto'>
							<Image src={ChrisEvans} alt='chris-evans' className='object-cover h-full'/>
							<div className='bg-[#2A2A2A] text-center py-6 px-2 text-xl leading-5'>Chris Evans</div>
						</div>
					</div>
				</section>

				<section className='my-32'>
					<h3 className='mb-12 border-l-4 border-[#D13223] pl-3' id='snapshots'>Snapshots</h3>
					<div className='grid grid-cols-2 gap-x-8 gap-y-6'>
						<Image src={ AvengerEndGameImage1 } alt='avenger-end-game-image-1' width={ 592 } height={ 420 } className='w-[592px] h-[420px] object-cover' />
						<Image src={ AvengerEndGameImage1 } alt='avenger-end-game-image-1' width={ 592 } height={ 420 } className='w-[592px] h-[420px] object-cover' />
						<Image src={ AvengerEndGameImage1 } alt='avenger-end-game-image-1' width={ 592 } height={ 420 } className='w-[592px] h-[420px] object-cover' />
						<Image src={ AvengerEndGameImage1 } alt='avenger-end-game-image-1' width={ 592 } height={ 420 } className='w-[592px] h-[420px] object-cover' />
					</div>
				</section>

				<section className='my-32'>
					<h3 className='mb-12 border-l-4 border-[#D13223] pl-3' id='trailer-and-clips'>Trailer & Clips</h3>
					<div className='grid grid-cols-auto-fill-378 gap-8 justify-center'>
						<YoutubeVideoPlayer props={ { videoId: 'TcMBFSGVi1c', opts: { height: '246', width: '378' } } } />
						<YoutubeVideoPlayer props={ { videoId: 'TcMBFSGVi1c', opts: { height: '246', width: '378' } } } />
						<YoutubeVideoPlayer props={ { videoId: 'TcMBFSGVi1c', opts: { height: '246', width: '378' } } } />
					</div>
				</section>

				<section className='my-32'>
					<h3 className='mb-12 border-l-4 border-[#D13223] pl-3' id='reviews'>Reviews</h3>
					<div className='grid grid-cols-2 gap-8'>

						<div className='bg-[#2A2A2A] py-6 px-8'>
							<div className='flex justify-start items-center gap-3 mb-4'>
								<Image src={ProfileIcon} alt='profile-icons' width={59} height={59}
									   className='rounded-full'/>
								<span className='text-white opacity-50'>Maria Russo</span>
							</div>
							<div className='text-[18px] mb-6'>“Where to begin, where to begin! You know a movie is
								outstanding when the end credits alone are more epic than the majority of films released
								in the last 20 years! This film is the pure definition of an emotional roller coaster”
							</div>
							<div className='text-white opacity-50 text-right'>12 Dec 2022</div>
						</div>

						<div className='bg-[#2A2A2A] py-6 px-8'>
							<div className='flex justify-start items-center gap-3 mb-4'>
								<Image src={ProfileIcon} alt='profile-icons' width={59} height={59}
									   className='rounded-full'/>
								<span className='text-white opacity-50'>Maria Russo</span>
							</div>
							<div className='text-[18px] mb-6'>“Where to begin, where to begin! You know a movie is
								outstanding when the end credits alone are more epic than the majority of films released
								in the last 20 years! This film is the pure definition of an emotional roller coaster”
							</div>
							<div className='text-white opacity-50 text-right'>12 Dec 2022</div>
						</div>

						<div className='bg-[#2A2A2A] py-6 px-8'>
							<div className='flex justify-start items-center gap-3 mb-4'>
								<Image src={ProfileIcon} alt='profile-icons' width={59} height={59}
									   className='rounded-full'/>
								<span className='text-white opacity-50'>Maria Russo</span>
							</div>
							<div className='text-[18px] mb-6'>“Where to begin, where to begin! You know a movie is
								outstanding when the end credits alone are more epic than the majority of films released
								in the last 20 years! This film is the pure definition of an emotional roller coaster”
							</div>
							<div className='text-white opacity-50 text-right'>12 Dec 2022</div>
						</div>

						<div className='bg-[#2A2A2A] py-6 px-8'>
							<div className='flex justify-start items-center gap-3 mb-4'>
								<Image src={ProfileIcon} alt='profile-icons' width={59} height={59}
									   className='rounded-full'/>
								<span className='text-white opacity-50'>Maria Russo</span>
							</div>
							<div className='text-[18px] mb-6'>“Where to begin, where to begin! You know a movie is
								outstanding when the end credits alone are more epic than the majority of films released
								in the last 20 years! This film is the pure definition of an emotional roller coaster”
							</div>
							<div className='text-white opacity-50 text-right'>12 Dec 2022</div>
						</div>

					</div>
				</section>
			</section>
		</>
	);
};

export default SingleMoviePage;