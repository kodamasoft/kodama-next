import cn from '../../../lib/cn';
import Image from 'next/image';
import Jacket from '../../../public/assets/namco70th/almightysoundexpress/jacket.png';

export default function Hero({ className, ...props }) {
	return (
		<div className={cn('flex flex-col', className)} {...props}>
			<Image
				className="w-full h-auto object-contain"
				src={Jacket}
				alt={'Almighty Sound Express'}
				loading="lazy"
			/>
			<div className="flex flex-col py-4 px-2 gap-6">
				<div className="flex flex-col">
					<span className="text-lg">
						United Tribute Arrange Force
					</span>
					<span className="text-xs italic">
						Presented by Almighty Arrange Project
					</span>
				</div>
				<h1 className="text-3xl">Almighty Sound Express</h1>
			</div>
		</div>
	);
}
