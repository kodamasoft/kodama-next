import Image from 'next/image';
import Logo from '../../../public/assets/namco70th/ironfist/if-logo.png';
import cn from '../../../lib/cn';
export default function HeaderInfo({ className, ...props }) {
	return (
		<div class={cn('flex gap-4 w-full h-32', className)} {...props}>
			<Image
				alt="Iron Fist Logo"
				src={Logo}
				className="h-full w-auto object-contain lg:hidden"
			/>
			<div className="flex flex-col justify-between">
				<div className="flex flex-col text-lg font-semibold">
					<span>Technomarina</span>
					<span className="text-xl">
						Tekken: The Iron Fist Tributes
					</span>
				</div>
				<span className="text-base opacity-80">
					A Tekken arrange album
				</span>
			</div>
		</div>
	);
}
