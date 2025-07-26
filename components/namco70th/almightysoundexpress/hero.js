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
				className="w-full h-auto object-cover lg:hidden overflow-hidden"
				src={Jacket}
				alt={'Almighty Sound Express'}
				loading="lazy"
			/>
			<div className="flex flex-col py-4 px-2 gap-6 info lg:justify-center lg:items-center">
				<div className="flex flex-col">
					<span className="text-lg lg:text-xl lg:text-center xl:text-2xl">
						United Tribute Arrange Force
					</span>
					<span className="text-xs italic lg:text-center xl:text-xl">
						Presented by Almighty Arrange Project
					</span>
				</div>
				<h1 className="text-2xl font-bold lg:text-[2.5vw] ">
					Almighty Sound Express
				</h1>
			</div>
		</div>
	);
}
