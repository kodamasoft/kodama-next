import {
	SiBandcamp,
	SiCarrd,
	SiSoundcloud,
	SiX,
	SiYoutube,
} from '@icons-pack/react-simple-icons';
import CreditItem from './credit-item';
import { Globe } from 'lucide-react';

const credits = [
	// Production Team
	{
		name: 'fusoxide',
		role: 'Director & Producer',
		socials: [],
	},
	{
		name: 'Lisui',
		role: 'Cover Art',
		socials: [],
	},
	{
		name: 'Erika Rivers',
		role: 'Logo & Artist',
		socials: [],
	},

	// Artists
	{
		name: 'Shapeless Cube',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'Splurgy',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'Gajrio',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'Griffin P. Breshears',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'ANGELWHISPER',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'A M 4 N',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'Robyn A1200',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'Monochrome',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'junacious',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'Viravax',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'Dead Person ~ ANGELWHISPER',
		role: 'Artist',
		socials: [],
	},

	{
		name: 'Banbeucmas',
		role: 'Web Design',
		socials: [
			{
				href: 'https://x.com/Banbeucams',
				title: 'X',
				icon: <SiX size={20} />,
			},

			{
				href: 'https://banbeu.com',
				title: 'Personal Website',
				icon: <Globe size={20} />,
			},
		],
	},
];
export default function Credit({ ...props }) {
	return (
		<div className="p-4 flex flex-col gap-4" {...props}>
			<div>
				<h2 className="font-bold text-3xl">Credit</h2>
			</div>
			<div className="flex flex-col">
				{credits.map((credit) => (
					<CreditItem key={credit.name} {...credit} />
				))}
			</div>
		</div>
	);
}
