import {
	SiBandcamp,
	SiBluesky,
	SiSoundcloud,
	SiX,
	SiYoutube,
} from '@icons-pack/react-simple-icons';
import CreditItem from './credit-item';

const credits = [
	{
		name: 'ZahranW',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'Kaseboy Advance',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'crazygoji',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'kpwu',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'jaxcheese',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'ScarletLotusProductions',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'MasterofDed',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'MyuPicks',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'Garoslaw',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'ehm',
		role: 'Artist',
		socials: [],
	},
	{
		name: 'Snuroo',
		role: 'Artist',
		socials: [],
	},
	{
		name: '_pulstar',
		role: 'Design',
		socials: [
			{
				href: 'https://x.com/_pulstar',
				title: 'X',
				icon: <SiX size={20} />,
			},
			{
				href: 'https://bsky.app/profile/pulstar.bsky.social',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
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
		],
	},
];
export default function Credit({ ...props }) {
	return (
		<div className="p-4 flex flex-col gap-4" {...props}>
			<div>
				<h2 className="font-medium text-2xl">Credit</h2>
			</div>
			<div className="flex flex-col">
				{credits.map((credit) => (
					<CreditItem key={credit.name} {...credit} />
				))}
			</div>
		</div>
	);
}
