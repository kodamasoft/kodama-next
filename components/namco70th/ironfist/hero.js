import cn from '../../../lib/cn';
import Character from '../../../public/assets/namco70th/ironfist/if-hero-char.png';
import Image from 'next/image';
export default function Hero({ className, ...props }) {
	return (
		<div
			className={cn('bg-namco70-if-hero-background', className)}
			{...props}
		>
			<div className="flex flex-col font-medium px-4 py-2">
				<h1 className="text-base drop-shadow-xs">
					Tekken: The Iron Fist Tributes
				</h1>
				<span className="text-sm drop-shadow-xs">
					an arrange album of music from Tekken games
				</span>
			</div>
			<Image
				src={Character}
				role="presentation"
				className="w-full h-auto object-contain"
				alt="Character"
			/>
		</div>
	);
}
