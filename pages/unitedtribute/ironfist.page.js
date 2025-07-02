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
		originalArtist: 'Nobuyuki Ohnogi [BNSI]',
		originalSong: 'Loading (Galaga) / Tekken (PS version)',
		startAt: 0, // 0:00
	},
	{
		title: 'Black Winter Night Sky',
		artist: 'Shapeless Cube',
		originalArtist: 'Akira Nishizaki',
		originalSong: 'Black Winter Night Sky from Tekken 2 (PS version)',
		startAt: 30, // 0:30
	},
	{
		title: 'THEME OF JIN',
		artist: 'Splurgy',
		originalArtist: 'Keiichi Okabe [BNSI]',
		originalSong: 'Jin Kazama from Tekken 3 (PS version)',
		startAt: 60, // 1:00
	},
	{
		title: 'Your Sunrise',
		artist: 'Gajrio',
		originalArtist: 'Taku Inoue [BNSI]',
		originalSong: 'Your Sunrise from Pachi-Slot Tekken 3rd: Angel Ver.',
		startAt: 90, // 1:30
	},
	{
		title: 'Jun Dimension',
		artist: 'Griffin P. Breshears',
		originalArtist: 'Yoshie Arakawa [BNSI]',
		originalSong: 'MORNING FIELD from Tekken 2 (PS version)',
		startAt: 120, // 2:00
	},
	{
		title: 'Resolution of the Yoshimitsu Lineage',
		artist: 'ANGELWHISPER',
		originalArtist: 'unknown',
		originalSong: 'Temple Grounds from Tekken Resolute',
		startAt: 150, // 2:30
	},
	{
		title: 'Moonlit Wilderness (C352 Version)',
		artist: 'A M 4 N',
		originalArtist: 'Satoru Kosaki [BNSI]',
		originalSong: 'Moonlit Wilderness from Tekken 5 (all versions)',
		startAt: 180, // 3:00
	},
	{
		title: 'Mystic Force (Abandoned Station Mix)',
		artist: 'ANGELWHISPER',
		originalArtist: 'Keiichi Okabe [MONACA] & Keigo Hoashi [MONACA]',
		originalSong:
			'Mystic Force (Extravagant Underground) from Tekken Tag Tournament 2 (console versions)',
		startAt: 210, // 3:30
	},
	{
		title: 'THE ULTIMATE TOUCH',
		artist: 'Lisui',
		originalArtist: 'Satoru Kosaki [BNSI]',
		originalSong: 'Touch and Go from Tekken 4 (all versions)',
		startAt: 240, // 4:00
	},
	{
		title: 'Lotus Temple',
		artist: 'fusoxide',
		originalArtist: 'Carpainter & Takahiro Eguchi [SuperSweep]',
		originalSong:
			'Temple Entrance from Tekken Mobile, Lotus Hall from Tekken 3D: Prime Edition',
		startAt: 270, // 4:30
	},
	{
		title: 'Lavender Palace',
		artist: 'Robyn A1200',
		originalArtist: 'Go Shiina [BNSI]',
		originalSong:
			'Snow Palace from Tekken 5: Dark Resurrection (all versions)',
		startAt: 300, // 5:00
	},
	{
		title: 'What You Will See -Purgatory-',
		artist: 'ANGELWHISPER',
		originalArtist: 'Nobuyoshi Sano [DETUNE Ltd.] & unknown',
		originalSong:
			'What you will see (Heavenly Garden) from Tekken Tag Tournament 2 (all versions), Unknown Ending from Tekken Tag Tournament 2 (console versions)',
		startAt: 330, // 5:30
	},
	{
		title: 'Boundless Blue',
		artist: 'Monochrome',
		originalArtist: 'Taku Inoue [BNSI]',
		originalSong: 'Moonsiders 1st from Tekken 7 (console versions)',
		startAt: 360, // 6:00
	},
	{
		title: 'Poolside Memories',
		artist: 'Raphtalix',
		originalArtist: 'Hiroshi Okubo [BNSI]',
		originalSong: 'Poolside from Tekken 5 (all versions)',
		startAt: 390, // 6:30
	},
	{
		// ignore these lint error about the quotes, they are intentional
		// eslint-disable-next-line quotes
		title: "Isn't It Past Your Bedtime?",
		artist: 'Junacious',
		originalSong:
			// eslint-disable-next-line quotes
			"Ending (T1), Silent Assassin-cool headed mix (T2), Nina Williams (T3), Nina (T4), NINA&ANNA's ending part1 (T5), Nina's Ending (T6/T7/T8)",
		originalArtist:
			'Various: Yoshie Arakawa [BNSI], Keiichi Okabe [BNSI], Hiroshi Okubo [BNSI], Junichi Nakatsuru [BNSI], Kazuhiro Nakamura [MONACA], Yoshinori Kawamoto [BNSI]',
		startAt: 420, // 7:00
	},
	{
		title: 'plot sin(x+4)',
		artist: 'Viravax',
		originalArtist: 'Yuu Miyake [BNSI]',
		originalSong: 'Draw the Waveform from Tekken 4 (all versions)',
		startAt: 450, // 7:30
	},
	{
		title: 'Dead Person ~ Yoshimitsu',
		artist: 'Dead Person ~ ANGELWHISPER',
		originalArtist: 'Go Shiina [BNSI]',
		originalSong:
			'Dead person-ganryu, Dead person-devil jin, Dead person-jinpachi from Tekken Tag Tournament 2 (console versions)',
		startAt: 480, // 8:00
	},
	{
		title: 'Iron: Combot Evolved',
		originalArtist: 'Akitaka Tohyama [BNSI]',
		artist: 'fusoxide',
		originalSong: 'Combot from Tekken 4 (PS2 version)',
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
					<TrackList
						className="mt-6"
						songList={songList}
						currentIndex={-1}
					/>
					<Credit />
				</div>
				<div className="hidden lg:grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_2fr] gap-x-6 px-4 pt-8 max-w-[1600px] mx-auto">
					<div className="flex flex-col gap-4 col-start-1">
						<Hero />
						<Information />
					</div>
					<div className="flex flex-col col-start-2 gap-8">
						<HeaderInfo className="pt-4 px-4 pb-0 lg:h-full" />
						<div className="w-full h-px shrink-0 bg-namco70-if-stroke/60"></div>
						<TrackList songList={songList} currentIndex={-1} />
						<Credit />
					</div>
				</div>
			</div>
		</Layout>
	);
}
