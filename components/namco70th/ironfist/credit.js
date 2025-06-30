import {
	SiBandcamp, SiBluesky, SiInstagram,
	SiCarrd,
	SiSoundcloud,
	SiX,
	SiYoutube, SiLinktree,
} from '@icons-pack/react-simple-icons';
import CreditItem from './credit-item';
import { Globe } from 'lucide-react';

const credits = [
	// Production Team
	{
		name: 'fusoxide',
		role: 'Director & Producer',
		socials: [
			{
				href: 'https://fusoxide.bandcamp.com',
				title: 'Bandcamp',
				icon: <SiBandcamp size={20} />,
			},
			{
				href: 'https://soundcloud.com/fusoxide',
				title: 'SoundCloud',
				icon: <SiSoundcloud size={20} />,
			},
			{
				href: 'https://bsky.app/profile/fusoxide.bsky.social',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
	},
	{
		name: 'Lisui',
		role: 'Cover Art',
		socials: [
			{
				href: 'https://x.com/lisui_',
				title: 'X',
				icon: <SiX size={20} />,
			},
		],
	},
	{
		name: 'Erika Rivers',
		role: 'Logo & Artist',
		socials: [
			{
				href: 'https://soundcloud.com/subitomelody',
				title: 'SoundCloud',
				icon: <SiSoundcloud size={20} />,
			},
			{
				href: 'https://bsky.app/profile/erikarivers.bsky.social',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
	},

	// Artists
	{
		name: 'Shapeless Cube',
		role: 'Artist',
		socials: [
			{
				href: 'https://www.shapelesscube.com',
				title: 'Website',
				icon: <Globe size={20} />,
			},
			{
				href: 'https://soundcloud.com/shapelesscube',
				title: 'SoundCloud',
				icon: <SiSoundcloud size={20} />,
			},
			{
				href: 'https://bsky.app/profile/shapelesscube.bsky.social',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
	},
	{
		name: 'Splurgy',
		role: 'Artist',
		socials: [
			{
				href: 'https://soundcloud.com/splurgyishere',
				title: 'SoundCloud',
				icon: <SiSoundcloud size={20} />,
			},
			{
				href: 'https://bsky.app/profile/splurgy.bsky.social',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
	},
	{
		name: 'Gajrio',
		role: 'Artist',
		socials: [
			{
				href: 'https://gajrio.bandcamp.com/',
				title: 'Bandcamp',
				icon: <SiBandcamp size={20} />,
			},
			{
				href: 'https://soundcloud.com/gajrio',
				title: 'SoundCloud',
				icon: <SiSoundcloud size={20} />,
			},
			{
				href: 'https://www.instagram.com/gajrio.tunes/',
				title: 'Instagram',
				icon: <SiBluesky size={20} />,
			},
		],
	},
	{
		name: 'Griffin P. Breshears',
		role: 'Artist',
		socials: [
			{
				href: 'https://www.griffinpb.com/',
				title: 'Website',
				icon: <Globe size={20} />,
			},
			{
				href: 'https://www.youtube.com/@griffinpbreshears',
				title: 'YouTube',
				icon: <SiYoutube size={20} />,
			},
			{
				href: 'https://www.instagram.com/griffinpbreshearsmusic/',
				title: 'Instagram',
				icon: <SiInstagram size={20} />,
			},
		],
	},
	{
		name: 'ANGELWHISPER',
		role: 'Artist',
		socials: [
			{
				href: 'https://angelwhisper.bandcamp.com',
				title: 'Bandcamp',
				icon: <SiBandcamp size={20} />,
			},
			{
				href: 'https://www.youtube.com/@ANGELWHISPERonline',
				title: 'YouTube',
				icon: <SiYoutube size={20} />,
			},
			{
				href: 'https://bsky.app/profile/angelwhisperonline.bsky.social',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
	},
	{
		name: 'A M 4 N',
		role: 'Artist',
		socials: [
			{
				href: 'https://am4nfm.bandcamp.com',
				title: 'Bandcamp',
				icon: <SiBandcamp size={20} />,
			},
			{
				href: 'https://www.youtube.com/@fm_am4n',
				title: 'YouTube',
				icon: <SiYoutube size={20} />,
			},
			{
				href: 'https://bsky.app/profile/am4n.bsky.social',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
	},
	{
		name: 'Robyn A1200',
		role: 'Artist',
		socials: [
			{
				href: 'https://robyns.work',
				title: 'Website',
				icon: <Globe size={20} />,
			},
			{
				href: 'https://robynmusak.bandcamp.com',
				title: 'Bandcamp',
				icon: <SiBandcamp size={20} />,
			},
			{
				href: 'https://bsky.app/profile/robyns.work',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
	},
	{
		name: 'Monochrome',
		role: 'Artist',
		socials: [
			{
				href: 'https://vgen.co/monochromemedia',
				title: 'VGen',
				icon: <Globe size={20} />,
			},
			{
				href: 'https://monochromemedia.bandcamp.com/',
				title: 'Bandcamp',
				icon: <SiBandcamp size={20} />,
			},
			{
				href: 'https://bsky.app/profile/monochromemedia.bsky.social',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
	},
	{
		name: 'Junacious',
		role: 'Artist',
		socials: [
			{
				href: 'https://www.foriio.com/junacious',
				title: 'Foriio',
				icon: <Globe size={20} />,
			},
			{
				href: 'https://soundcloud.com/junacious',
				title: 'SoundCloud',
				icon: <SiSoundcloud size={20} />,
			},
			{
				href: 'https://www.instagram.com/junacious/',
				title: 'Instagram',
				icon: <SiInstagram size={20} />,
			},
		],
	},
	{
		name: 'Viravax',
		role: 'Artist',
		socials: [
			{
				href: 'https://linktr.ee/viravax',
				title: 'Linktree',
				icon: <SiLinktree size={20} />,
			},
			{
				href: 'https://viravax.bandcamp.com',
				title: 'Bandcamp',
				icon: <SiBandcamp size={20} />,
			},
			{
				href: 'https://bsky.app/profile/viravax.me',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
	},
	{
		name: 'Dead Person ~ ANGELWHISPER',
		role: 'Artist',
		socials: [
			{
				href: 'https://angelwhisper.bandcamp.com',
				title: 'Bandcamp',
				icon: <SiBandcamp size={20} />,
			},
			{
				href: 'https://www.youtube.com/@ANGELWHISPERonline',
				title: 'YouTube',
				icon: <SiYoutube size={20} />,
			},
			{
				href: 'https://bsky.app/profile/angelwhisperonline.bsky.social',
				title: 'Bluesky',
				icon: <SiBluesky size={20} />,
			},
		],
	},
	{
		name: 'Raphtalix',
		role: 'Artist',
		socials: [
			{
				href: 'https://www.youtube.com/@Raphtalix',
				title: 'YouTube',
				icon: <SiYoutube size={20} />,
			},
			{
				href: 'https://soundcloud.com/raphtalix',
				title: 'SoundCloud',
				icon: <SiSoundcloud size={20} />,
			},
			{
				href: 'https://bsky.app/profile/raphtalix.bsky.social',
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
		<div className="p-4 flex flex-col gap-4.5" {...props}>
			<div>
				<h2 className="font-bold text-3xl sm:text-4xl text-shadow-lg">
					Credit
				</h2>
			</div>
			<div className="flex flex-col">
				{credits.map((credit) => (
					<CreditItem key={credit.name} {...credit} />
				))}
			</div>
		</div>
	);
}
