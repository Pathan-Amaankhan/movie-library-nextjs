import Link from "next/link";
import Image from "next/image";
import ArrowRight from "@/public/assets/icons/arrow-right.svg";
import CelebrityData from "@/app/components/celebrities/interface";

interface Props {
	key: number,
	data: CelebrityData,
}

const Celebrity = ( { key, data }: Props ) => {
	return (
		<div className='bg-[#2A2A2A] flex' key={ key }>
			<Link href={`/celebrities/${data.id}`} className='w-1/4'>
				<Image src={ data.image } alt={ data.alt ?? '' } className='object-cover w-full h-full'/>
			</Link>
			<div className='w-3/4 py-8 px-6'>
				<h3 className='mb-2'>
					{ data.name }
					{ data.as && <span className='leading-10 text-2xl'> ({data.as})</span> }
				</h3>
				<p className='mb-2 text-white opacity-50'>Born - { data.birthDate }</p>
				<p className='mb-2'>{ data.about }</p>
				<Link href={`/celebrities/${data.id}`} className='flex items-center'>
					<span className='mr-1 text-sm leading-6 text-[#E46D62]'>Learn more</span>
					<Image src={ArrowRight} alt='learn-more' width={16} height={16} className='w-4 h-4 mt-0.5'/>
				</Link>
			</div>
		</div>
	);
};

export default Celebrity;