import React from 'react';
import {getCelebrities} from "@/app/celebrities/utils";
import CelebrityData from "@/app/components/celebrities/interface";
import {notFound} from "next/navigation";
import Image from "next/image";
import ArrowRightWhite from "@/public/assets/icons/arrow-right-white.svg";
import AvengerEndGameImage1 from "@/public/assets/images/avenger-end-game-image-1.png";
import YoutubeVideoPlayer from "@/app/components/misc/youtube-video-player";
import Movie from "@/app/components/movies/movie";
import {getMoviesData} from "@/app/movies/utils";
import MovieData from "@/app/components/movies/interface";
import Link from "next/link";

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

const SingleCelebrityPage = async ( { params }: Props ) => {

	const id = parseInt( params.id );

	const celebrityData: CelebrityData|undefined = getCelebrities().find( ( celebrity: CelebrityData ) => celebrity.id === id );

	if ( ! celebrityData ) {
		notFound();
	}

	return (
		<section className='max-w-[1200px] mx-auto my-9'>

			<section className='flex gap-32'>
				<Image src={celebrityData.image} alt={celebrityData.alt ?? ''} width={488} height={572}
					   className='w-5/12 object-cover h-[572px]'/>

				<div className='w-7/12'>
					<h2 className='mt-16 mb-6'>{celebrityData.name}</h2>

					<div className='text-[18px]'>
						<div className='grid grid-cols-[176px_auto] mb-4'>
							<span>Occupation:</span>
							<span>Actor, Director, Producer</span>
						</div>
						<div className='grid grid-cols-[176px_auto] mb-4'>
							<span>Born:</span>
							<span>13 June 1981 (age 41 years)</span>
						</div>
						<div className='grid grid-cols-[176px_auto] mb-4'>
							<span>Birthplace:</span>
							<span>Boston, Massachusetts, United States</span>
						</div>
						<div className='grid grid-cols-[176px_auto] mb-4'>
							<span>Socials:</span>
							<span></span>
						</div>
					</div>
				</div>
			</section>

			<section className='flex gap-32 my-32'>
				<div className='w-4/6'>
					<h3 className='mb-12 border-l-4 border-[#D13223] pl-3' id='about'>About</h3>
					<div>
						<p>Christopher Robert Evans (born June 13, 1981) is an American actor. He began his career with
							roles in television series such as Opposite Sex in 2000. Following appearances in several
							teen films, including 2001&apos;s Not Another Teen Movie, he gained attention for his portrayal
							of Marvel Comics character the Human Torch in Fantastic Four (2005) and Fantastic Four: Rise
							of the Silver Surfer (2007). Evans made further appearances in film adaptations of comic
							books and graphic novels: TMNT (2007), Scott Pilgrim vs. the World (2010), and Snowpiercer
							(2013).</p>
						<p>Evans gained wider recognition for his portrayal of Steve Rogers / Captain America in several
							Marvel Cinematic Universe films, from Captain America: The First Avenger (2011) to Avengers:
							Endgame (2019). His work in the franchise established him as one of the world&apos;s highest-paid
							actors.</p>
						<p>Aside from comic book roles, Evans has starred in the drama Gifted (2017), the mystery film
							Knives Out (2019), and the television miniseries Defending Jacob (2020). He made his
							directorial debut in 2014 with the romantic drama Before We Go, which he also produced and
							starred in. Evans made his Broadway debut in the 2018 revival of Kenneth Lonergan&apos;s play
							Lobby Hero, which earned him a Drama League Award nomination.</p>
					</div>
				</div>

				<div className='px-8 pt-6 pb-3 bg-[#2A2A2A] w-72 h-fit'>
					<h3 className='mb-5'>Quick Links</h3>
					<ul className='text-[18px] leading-8'>

						<li className='py-3'>
							<Link href='#about' className='flex items-center justify-start gap-2'>
								<Image src={ArrowRightWhite} alt='arrow-right-wite' width={20} height={20}
									   className='w-5 h-5'/>
								<span>About</span>
							</Link>
						</li>

						<li className='py-3'>
							<Link href='#popular-movies' className='flex items-center justify-start gap-2'>
								<Image src={ArrowRightWhite} alt='arrow-right-wite' width={20} height={20}
									   className='w-5 h-5'/>
								<span>Popular Movies</span>
							</Link>
						</li>

						<li className='py-3'>
							<Link href='#snapshots' className='flex items-center justify-start gap-2'>
								<Image src={ArrowRightWhite} alt='arrow-right-wite' width={20} height={20}
									   className='w-5 h-5'/>
								<span>Snapshots</span>
							</Link>
						</li>

						<li className='py-3'>
							<Link href='#videos' className='flex items-center justify-start gap-2'>
								<Image src={ArrowRightWhite} alt='arrow-right-wite' width={20} height={20}
									   className='w-5 h-5'/>
								<span>Videos</span>
							</Link>
						</li>

					</ul>
				</div>
			</section>

			<section className='my-32'>
				<h3 className='mb-12 border-l-4 border-[#D13223] pl-3' id='popular-movies'>Popular Movies</h3>
				<div className='grid grid-cols-3 gap-6'>
					{ ( await getMoviesData() )?.movies?.slice(0,3).map( ( movie: MovieData ) => <Movie movie={movie} key={movie.id}/> ) }
				</div>
			</section>

			<section className='my-32'>
				<h3 className='mb-12 border-l-4 border-[#D13223] pl-3' id='snapshots'>Snapshots</h3>
				<div className='grid grid-cols-2 gap-x-8 gap-y-6'>
					<Image src={AvengerEndGameImage1} alt='avenger-end-game-image-1' width={592} height={420}
						   className='w-[592px] h-[420px] object-cover'/>
					<Image src={AvengerEndGameImage1} alt='avenger-end-game-image-1' width={592} height={420}
						   className='w-[592px] h-[420px] object-cover'/>
					<Image src={AvengerEndGameImage1} alt='avenger-end-game-image-1' width={592} height={420}
						   className='w-[592px] h-[420px] object-cover'/>
					<Image src={AvengerEndGameImage1} alt='avenger-end-game-image-1' width={592} height={420}
						   className='w-[592px] h-[420px] object-cover'/>
				</div>
			</section>

			<section className='my-32'>
				<h3 className='mb-12 border-l-4 border-[#D13223] pl-3' id='videos'>Videos</h3>
				<div className='grid grid-cols-auto-fill-378 gap-8 justify-center'>
					<YoutubeVideoPlayer props={{videoId: 'JerVrbLldXw', opts: {height: '246', width: '378'}}}/>
					<YoutubeVideoPlayer props={{videoId: 'YP-UetX2qX0', opts: {height: '246', width: '378'}}}/>
					<YoutubeVideoPlayer props={{videoId: 'QwievZ1Tx-8', opts: {height: '246', width: '378'}}}/>
				</div>
			</section>

		</section>
	);
};

export default SingleCelebrityPage;