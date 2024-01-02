import Image from "next/image";
import SiteLogo from "@/app/assets/site-logo-black.svg";
import SearchIcon from "@/app/assets/search.svg";
import Link from "next/link";

const PrimaryHeader = () => {
	return (
		<div className='py-1 px-6 shadow-md'>
			<div className='flex items-center max-w-[1200px] mx-auto'>

				<div className='relative w-[25%]'>
					<Image src={SearchIcon} className='pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-0' alt='search' />
					<input className='placeholder-white bg-transparent outline-0 ml-7' type='text' placeholder='SEARCH' />
				</div>

				<Link href='/' className='w-[50%]'>
					<Image src={SiteLogo} className='w-[224px] h-[84px] mx-auto' alt='logo' />
				</Link>

				<div className='flex justify-end w-[25%]'>
					<Link href='/'>
						<div className='mr-5'>SIGN IN</div>
					</Link>

					<Link href='/'>
						<div>ENG</div>
					</Link>
				</div>

			</div>
		</div>
	);
};

export default PrimaryHeader;