import Image from 'next/image';
import Logo from '../../../public/assets/namco70th/ironfist/if-logo.png';
import cn from '../../../lib/cn';

export default function HeaderInfo({ className, ...props }) {
	return (
		<div className={cn('flex gap-4 w-full h-32', className)} {...props}>
			<Image
				alt="Iron Fist Logo"
				src={Logo}
				className="h-full w-auto object-contain lg:hidden"
			/>
			<div className="flex flex-col justify-between lg:gap-6 w-full">
				<div className="flex flex-col text-lg sm:text-2xl font-semibold">
					<span className="opacity-70">Technomarina</span>
					<span className="text-xl sm:text-4xl text-shadow-lg">
						Tekken: The Iron Fist Tributes
					</span>
				</div>
				<div className="flex justify-between w-full">
					<span className="text-sm sm:text-lg opacity-70">
						A Tekken arrange album
					</span>
					<span className="text-sm sm:text-lg opacity-70 uppercase">
						TCHM-1002
					</span>
				</div>
			</div>
		</div>
	);
}
