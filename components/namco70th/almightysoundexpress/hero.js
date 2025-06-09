import cn from '../../../lib/cn';
import Image from 'next/image';
import Jacket from '../../../public/assets/namco70th/almightysoundexpress/jacket.png';

export default function Hero({ className, ...props }) {
	return (
		<div
			className={cn('flex flex-col namco70-ase-hero', className)}
			{...props}
		>
			<Image
				className="w-full h-auto object-cover lg:hidden"
				src={Jacket}
				alt={'Almighty Sound Express'}
				loading="lazy"
			/>
			<div className="flex flex-col py-4 px-2 gap-6 info">
				<div className="flex flex-col">
					<span className="text-lg">
						United Tribute Arrange Force
					</span>
					<span className="text-xs italic">
						Presented by Almighty Arrange Project
					</span>
				</div>
				<h1 className="text-2xl font-bold">Almighty Sound Express</h1>
			</div>
		</div>
	);
}
