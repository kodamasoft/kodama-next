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
		socials: [
			{
				href: 'https://x.com/EhMehShmeh',
				title: 'X',
				icon: <SiX size={20} />,
			},
			{
				href: 'soundcloud.com/ehmehshmeh',
				title: 'SoundCloud',
				icon: <SiSoundcloud size={20} />,
			},
		],
	},
	{
		name: 'Kaseboy Advance',
		role: 'Artist',
		socials: [
			{
				href: 'https://botnit.bandcamp.com/',
				title: 'Bandcamp',
				icon: <SiBandcamp size={20} />,
			},
		],
	},
	{
		name: 'crazygoji',
		role: 'Artist',
		socials: [
			{
				href: 'https://botnit.bandcamp.com/',
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
				href: 'https://botnit.bandcamp.com/',
				title: 'Bandcamp',
				icon: <SiBandcamp size={20} />,
			},
		],
	},
	{
		name: 'jaxcheese',
		role: 'Artist',
		socials: [
			{
				href: 'https://x.com/fusoxide',
				title: 'X',
				icon: <SiX size={20} />,
			},
			{
				href: 'https://bsky.app/profile/fusoxide.bsky.social',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
	},
	{
		name: 'ScarletLotusProductions',
		role: 'Artist',
		socials: [
			{
				href: 'https://viravax.bandcamp.com/',
				title: 'Bandcamp',
				icon: <SiBandcamp size={20} />,
			},
			{
				href: 'https://soundcloud.com/viravax',
				title: 'SoundCloud',
				icon: <SiSoundcloud size={20} />,
			},
			{
				href: 'https://www.youtube.com/channel/UCz7xLF93bFM7OeczJg5uDcQ',
				title: 'YouTube',
				icon: <SiYoutube size={20} />,
			},
		],
	},
	{
		name: 'MasterofDed',
		role: 'Artist',
		socials: [
			{
				href: 'https://bsky.app/profile/marklincadet.bsky.social',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
	},
	{
		name: 'MyuPicks',
		role: 'Artist',
		socials: [
			{
				href: 'https://bsky.app/profile/marklincadet.bsky.social',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
	},
	{
		name: 'Garoslaw',
		role: 'Artist',
		socials: [
			{
				href: 'https://bsky.app/profile/marklincadet.bsky.social',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
	},
	{
		name: 'ehm',
		role: 'Artist',
		socials: [
			{
				href: 'https://bsky.app/profile/marklincadet.bsky.social',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
	},
	{
		name: 'Snuroo',
		role: 'Artist',
		socials: [
			{
				href: 'https://bsky.app/profile/marklincadet.bsky.social',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
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
