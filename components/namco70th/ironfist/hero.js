import cn from '../../../lib/cn';
import Character from '../../../public/assets/namco70th/ironfist/if-hero-char.png';
import Image from 'next/image';
export default function Hero({ className, ...props }) {
	return (
		<div
			className={cn(
				'bg-namco70-if-hero-background h-full lg:flex flex-row justify-center',
				className
			)}
			{...props}
		>
			<div className="flex flex-col font-medium px-6 py-4 lg:self-center justify-center lg:translate-y-1/2 lg:translate-x-1/4">
				<h1 className="text-base drop-shadow-xs md:text-3xl xl:text-4xl md:drop-shadow-md">
					Tekken: The Iron Fist Tributes
				</h1>
				<span className="text-sm drop-shadow-xs md:text-base xl:text-xl md:drop-shadow-md lg:whitespace-nowrap">
					an arrange album of music from Tekken games
				</span>
			</div>
			<Image
				src={Character}
				role="presentation"
				className="w-auto h-auto max-h-[90vh] object-contain m-auto lg:m-0 lg:w-max aspect-square"
				alt="Character"
			/>
		</div>
	);
}
