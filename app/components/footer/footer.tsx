import SiteLogo from "@/public/assets/logos/site-logo-gray.svg";
import FacebookLogo from "@/public/assets/icons/facebook.svg";
import TwitterLogo from "@/public/assets/icons/twitter.svg";
import YouTubeLogo from "@/public/assets/icons/youtube.svg";
import InstagramLogo from "@/public/assets/icons/instagram.svg";
import RSSLogo from "@/public/assets/icons/rss.svg";
import Image from "next/image";
import Link from "next/link";

const SiteFooter = () => {
	return (
		<div className='pt-[110px] pb-8 px-6 bg-[#2A2A2A]'>
			<div className='max-w-[1200px] mx-auto'>

				<div className='flex pb-24 mb-8 border-b border-[#DDD]'>
					<div className='w-[50%]'>
						<Image src={SiteLogo} className='-mt-6 mb-11 -ml-6' alt='logo'/>
						<div className='uppercase mb-4'>Follow us</div>

						<div className='flex gap-4'>
							<Image src={FacebookLogo} className='w-[50px] h-[50px]' alt='facebook'/>
							<Image src={TwitterLogo} className='w-[50px] h-[50px]' alt='twitter'/>
							<Image src={YouTubeLogo} className='w-[50px] h-[50px]' alt='youtube'/>
							<Image src={InstagramLogo} className='w-[50px] h-[50px]' alt='instagram'/>
							<Image src={RSSLogo} className='w-[50px] h-[50px]' alt='rss'/>
						</div>
					</div>

					<div className='w-[25%]'>
						<h4 className='uppercase mb-6'>Company</h4>
						<div className='mb-2'>About us</div>
						<div className='mb-2'>Team</div>
						<div className='mb-2'>Careers</div>
						<div className='mb-2'>Culture</div>
						<div className='mb-2'>Community</div>
					</div>

					<div className='w-[25%]'>
						<h4 className='uppercase mb-6'>Explore</h4>
						<div className='mb-2'>
							<Link href='/movies'>Movies</Link>
						</div>
						<div className='mb-2'>TV Shows</div>
						<div className='mb-2'>Events</div>
						<div className='mb-2'>Theatre</div>
						<div className='mb-2'>Celebrities</div>
					</div>
				</div>

				<div className='text-[#DDD]'>© 2022 ScreenTime. All Rights Reserved.Terms of Service  |  Privacy Policy</div>

			</div>
		</div>
	);
};

export default SiteFooter;