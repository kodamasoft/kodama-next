import HrefButton from '../href-button';
import Image from 'next/image';
import Jacket from '../../../public/assets/namco70th/ironfist/if-jacket.webp';
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
		<div className="p-4 flex flex-col gap-6" {...props}>
			<div className="flex gap-2 items-center">
				<h1 className="text-3xl font-bold sm:text-4xl text-shadow-lg">
					Information
				</h1>
				<div className="h-0.5 w-full bg-namco70-if-foreground/60" />
			</div>
			<div>
				<h2 className="opacity-60 sm:text-2xl">Total songs</h2>
				<p className="text-xl sm:text-4xl">18</p>
			</div>
			<div>
				<h2 className="opacity-60 sm:text-2xl">Release date</h2>
				<p className="text-xl sm:text-4xl">2025.06.27</p>
			</div>

			<div className="flex flex-col gap-4 sm:mt-6">
				{linkData.map((link) => (
					<HrefButton key={link.title} {...link} variant="if" />
				))}
			</div>
		</div>
	);
}
