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
	{
		name: 'ZahranW',
		role: 'Artist',
		socials: [
			{
				href: 'https://youtube.com/@ZahranW',
				title: 'YouTube',
				icon: <SiYoutube size={20} />,
			},
		],
	},
	{
		name: 'Kaseboy Advance',
		role: 'Artist',
		socials: [
			{
				href: 'https://kaseboy-advance.bandcamp.com',
				title: 'Bandcamp',
				icon: <SiBandcamp size={20} />,
			},
			{
				href: 'https://soundcloud.com/kaseboy_advance',
				title: 'SoundCloud',
				icon: <SiSoundcloud size={20} />,
			},
		],
	},
	{
		name: 'crazygoji',
		role: 'Artist',
		socials: [
			{
				href: 'https://crazygoji.bandcamp.com',
				title: 'Bandcamp',
				icon: <SiBandcamp size={20} />,
			},
		],
	},
	{
		name: 'kpwu',
		role: 'Artist',
		socials: [
			{
				href: 'https://kpwu.observer',
				title: 'Personal Website',
				icon: <Globe size={20} />,
			},
		],
	},
	{
		name: 'jaxcheese',
		role: 'Artist',
		socials: [
			{
				href: 'https://jaxcheese.bandcamp.com',
				title: 'Bandcamp',
				icon: <SiBandcamp size={20} />,
			},
			{
				href: 'https://jaxcheese.net',
				title: 'Personal Website',
				icon: <Globe size={20} />,
			},
		],
	},
	{
		name: 'ScarletLotusProductions',
		role: 'Artist',
		socials: [
			{
				href: 'https://scarletlotus.carrd.co',
				title: 'Carrd',
				icon: <SiCarrd size={20} />,
			},
		],
	},
	{
		name: 'MasterofDed',
		role: 'Artist',
		socials: [
			{
				href: 'https://ptweb.me/profile/688',
				title: 'PxTune Web Profile',
				icon: <Globe size={20} />,
			},
		],
	},
	{
		name: 'MyuPicks',
		role: 'Artist',
		socials: [
			{
				href: 'https://soundcloud.com/musicalpixels',
				title: 'SoundCloud',
				icon: <SiSoundcloud size={20} />,
			},
			{
				href: 'https://ptweb.me/profile/483',
				title: 'PxTune Web Profile',
				icon: <Globe size={20} />,
			},
		],
	},
	{
		name: 'Garoslaw',
		role: 'Artist',
		socials: [
			{
				href: 'https://soundcloud.com/garoslaw',
				title: 'SoundCloud',
				icon: <SiSoundcloud size={20} />,
			},
		],
	},
	{
		name: 'ehm',
		role: 'Artist',
		socials: [
			{
				href: 'https://soundcloud.com/ehmehshmeh',
				title: 'SoundCloud',
				icon: <SiSoundcloud size={20} />,
			},
			{
				href: 'https://ptweb.me/profile/482',
				title: 'PxTune Web Profile',
				icon: <Globe size={20} />,
			},
		],
	},
	{
		name: 'Snuroo',
		role: 'Artist',
		socials: [
			{
				href: 'https://youtube.com/@snuroo_CK',
				title: 'YouTube',
				icon: <SiYoutube size={20} />,
			},
		],
	},
	{
		name: 'TiffanyHeat',
		role: 'Design',
		socials: [
			{
				href: 'https://https://spacehey.com/tiffanyneat',
				title: 'SpaceHey',
				icon: <Globe size={20} />,
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
