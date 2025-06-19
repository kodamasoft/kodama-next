import HrefButton from '../href-button';
import Image from 'next/image';
import Jacket from '../../../public/assets/namco70th/gamesoundcollage/gsc-jacket.png';
import { Calendar, User } from 'lucide-react';

const linkData = [
	{
		href: 'https://almightyarrangeproject.bandcamp.com/album/almighty-sound-express',
		title: 'Bandcamp',
	},
	{
		href: 'https://www.youtube.com/watch?v=j1KoamGQUiE',
		title: 'YouTube',
	},
];

export default function Information({ ...props }) {
	return (
		<div className="p-4 flex flex-col gap-8" {...props}>
			<div>
				<h2 className="font-medium text-2xl">Information</h2>
			</div>
			<div className="w-full">
				<Image
					className="w-full h-auto object-contain rounded-lg"
					src={Jacket}
					alt={'Almighty Sound Express'}
					loading="lazy"
				/>
			</div>
			<div className="flex flex-col gap-4">
				<h3 className="font-bold text-2xl col-span-2 text-uppercase">
					Game Sound Collage
				</h3>
				<div className="flex gap-2 flex-wrap">
					<div className="flex items-center gap-2 mr-8">
						<User className="h-4 w-4" />
						<span className="text-sm whitespace-nowrap">
							PXTunes
						</span>
					</div>
					<div className="flex items-center gap-2">
						<Calendar className="h-4 w-4" />
						<span className="text-sm whitespace-nowrap">
							2025.06.01
						</span>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				{linkData.map((link) => (
					<HrefButton key={link.title} {...link} variant="gsc" />
				))}
			</div>
		</div>
	);
}
