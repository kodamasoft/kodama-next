import cn from '../../../lib/cn';
import Jacket from '../../../public/assets/namco70th/ironfist/if-jacket.webp';
import Image from 'next/image';
import HeaderInfo from './header-info';
export default function Hero({ className, ...props }) {
	return (
		<div className={cn('flex flex-col gap-4 p-4', className)} {...props}>
			<Image
				alt="Iron Fist Jacket"
				src={Jacket}
				className="w-full h-auto object-contain rounded-lg"
				loading="eager"
			/>
			<HeaderInfo className="lg:hidden" />
		</div>
	);
}
