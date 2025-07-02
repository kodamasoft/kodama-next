import Layout from '../../components/namco70th/ironfist/layout';
import { useState } from 'react';
import Image from 'next/image';
import ProjectLogo from '../../public/assets/namco70th/common/logo-white.svg';
import Hero from '../../components/namco70th/ironfist/hero';
import Information from '../../components/namco70th/ironfist/information';
import TrackList from '../../components/namco70th/ironfist/track-list';
import Credit from '../../components/namco70th/ironfist/credit';
import HeaderInfo from '../../components/namco70th/ironfist/header-info';
import Link from 'next/link';
const songList = [
	{
		title: 'Push Start to Tekken',
		artist: 'Erika Rivers',
		startAt: 0, // 0:00
	},
	{
		title: 'Black Winter Night Sky',
		artist: 'Shapeless Cube',
		startAt: 30, // 0:30
	},
	{
		title: 'THEME OF JIN',
		artist: 'Splurgy',
		startAt: 60, // 1:00
	},
	{
		title: 'Your Sunrise',
		artist: 'Gajrio',
		startAt: 90, // 1:30
	},
	{
		title: 'Jun Dimension',
		artist: 'Griffin P. Breshears',
		startAt: 120, // 2:00
	},
	{
		title: 'Resolution of the Yoshimitsu Lineage',
		artist: 'ANGELWHISPER',
		startAt: 150, // 2:30
	},
	{
		title: 'Moonlit Wilderness (C352 Version)',
		artist: 'A M 4 N',
		startAt: 180, // 3:00
	},
	{
		title: 'Mystic Force (Abandoned Station Mix)',
		artist: 'ANGELWHISPER',
		startAt: 210, // 3:30
	},
	{
		title: 'THE ULTIMATE TOUCH',
		artist: 'Lisui',
		startAt: 240, // 4:00
	},
	{
		title: 'Lotus Temple',
		artist: 'fusoxide',
		startAt: 270, // 4:30
	},
	{
		title: 'Lavender Palace',
		artist: 'Robyn A1200',
		startAt: 300, // 5:00
	},
	{
		title: 'What You Will See -Purgatory-',
		artist: 'ANGELWHISPER',
		startAt: 330, // 5:30
	},
	{
		title: 'Boundless Blue',
		artist: 'Monochrome',
		startAt: 360, // 6:00
	},
	{
		title: 'Poolside Memories',
		artist: 'Raphtalix',
		startAt: 390, // 6:30
	},
	{
		title: "Isn't It Past Your Bedtime?",
		artist: 'Junacious',
		startAt: 420, // 7:00
	},
	{
		title: 'plot sin(x+4)',
		artist: 'Viravax',
		startAt: 450, // 7:30
	},
	{
		title: 'Dead Person ~ Yoshimitsu',
		artist: 'Dead Person ~ ANGELWHISPER',
		startAt: 480, // 8:00
	},
	{
		title: 'Iron: Combot Evolved',
		artist: 'fusoxide',
		startAt: 510, // 8:30
	},
];

export default function IronFist() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<Layout>
			<div className="namco70-if-header-height">
				<header className="sticky flex justify-between top-0 z-10 h-(--header-height) w-full bg-namco70-if-accent-2 py-4 items-center">
					<Link
						href="/unitedtribute"
						alt="Back to Home Page"
						className="h-full w-auto"
					>
						<ProjectLogo className="h-full w-auto px-4" />
					</Link>
				</header>
				<div className="lg:hidden">
					<Hero />
					<Information />
					<TrackList className="mt-6" songList={songList} />
					<Credit />
				</div>
				<div className="hidden lg:grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_2fr] gap-x-6 px-4 pt-8 max-w-[1600px] mx-auto">
					<div className="flex flex-col gap-4 col-start-1">
						<Hero />
						<Information />
					</div>
					<div className="flex flex-col col-start-2 gap-8">
						<HeaderInfo className="p-4" />
						<div className="w-full h-px bg-namco70-if-stroke/60"></div>
						<TrackList songList={songList} />
						<Credit />
					</div>
				</div>
			</div>
		</Layout>
	);
}
