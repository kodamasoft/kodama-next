import Credit from '../../components/namco70th/gamesoundcollage/credit';
import Hero from '../../components/namco70th/gamesoundcollage/hero';
import Information from '../../components/namco70th/gamesoundcollage/information';
import Layout from '../../components/namco70th/gamesoundcollage/layout';
import TrackList from '../../components/namco70th/gamesoundcollage/track-list';
import MusicPlayer from '../../components/namco70th/music-player';
import ProjectLogo from '../../public/assets/namco70th/common/logo-white.svg';
import {
	Menu,
	Disc3,
	ChevronFirst,
	Play,
	Pause,
	ChevronLast,
} from 'lucide-react';
import { useState } from 'react';
import cn from '../../lib/cn';

const songList = [
	{
		title: 'Gee Bee Melody',
		artist: 'ZahranW',
		startAt: 0, // 0:00
	},
	{
		title: 'No Diggity Dug',
		artist: 'Kaseboy Advance',
		startAt: 19, // 0:19
	},
	{
		title: 'Galaga',
		artist: 'crazygoji',
		startAt: 34, // 0:34
	},
	{
		title: 'SUBMERSION4374 (Dragon Spirit - Dark Castle)',
		artist: 'kpwu',
		startAt: 48, // 0:48
	},
	{
		title: 'Tales of Namco Waltzes, op. 82 (Toy Pop/Valkyrie no Densetsu)',
		artist: 'jaxcheese',
		startAt: 58, // 0:58
	},
	{
		title: 'Mappy 64',
		artist: 'ScarletLotusProductions',
		startAt: 69, // 1:09
	},
	{
		title: 'Nova Rally Racing (New Rally-X)',
		artist: 'MasterofDed',
		startAt: 82, // 1:22
	},
	{
		title: 'Valkyrie no Densetsu - Theme of Lava Cave',
		artist: 'ZahranW',
		startAt: 93, // 1:33
	},
	{
		title: 'night attack!! (Metal Hawk - BGM 4)',
		artist: 'Garoslaw',
		startAt: 107, // 1:47
	},
	{
		title: 'Tower of Druaga - Name Entry',
		artist: 'jaxcheese',
		startAt: 119, // 1:59
	},
	{
		title: 'Steel Gunner - Laboratory',
		artist: 'MyuPicks',
		startAt: 137, // 2:17
	},
	{
		title: 'Burning Force - Bay Yard',
		artist: 'ZahranW',
		startAt: 150, // 2:30
	},
	{
		title: 'the skies remember (Burning Force - Sarinuka Sands)',
		artist: 'ehm',
		startAt: 159, // 2:39
	},
	{
		// eslint-disable-next-line prettier/prettier
		title: "The Land of the Queen (Märchen Maze - Queen's Land)",
		artist: 'Snuroo',
		startAt: 170, // 2:50,
	},
	{
		title: 'Playing Games Forever (Multicade menu music)',
		artist: 'MasterofDed',
		startAt: 184, // 3:04
	},
];

export default function GameSoundCollage() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<Layout>
			<div
				className="relative"
				style={{ '--header-height': '4rem', '--player-height': '4rem' }}
			>
				{/* Sticky Header */}
				<header className="sticky flex justify-between top-0 z-10 h-(--header-height) w-full bg-namco70-gsc-background/80 py-4 items-center">
					<ProjectLogo className="h-full w-auto px-4" />

					<nav className="hidden md:flex items-center gap-6">
						<a href="#hero">Home</a>
						<a href="#tracks">Tracks</a>
						<a href="#info">Information</a>
						<a href="#credits">Credits</a>
					</nav>
					<button
						onClick={toggleMenu}
						className="md:hidden p-2"
						aria-label="Toggle menu"
					>
						<Menu size={32} />

						{menuOpen && (
							<div className="absolute top-full left-0 right-0 bg-namco70-gsc-background/80 shadow-lg md:hidden">
								<nav className="flex flex-col">
									<a
										href="#hero"
										className="px-4 py-3 hover:bg-namco70-ase-accent/10"
										onClick={() => setMenuOpen(false)}
									>
										Home
									</a>
									<a
										href="#tracks"
										className="px-4 py-3 hover:bg-namco70-ase-accent/10"
										onClick={() => setMenuOpen(false)}
									>
										Tracks
									</a>
									<a
										href="#info"
										className="px-4 py-3 hover:bg-namco70-ase-accent/10"
										onClick={() => setMenuOpen(false)}
									>
										Information
									</a>
									<a
										href="#credits"
										className="px-4 py-3 hover:bg-namco70-ase-accent/10"
										onClick={() => setMenuOpen(false)}
									>
										Credits
									</a>
								</nav>
							</div>
						)}
					</button>
				</header>

				<div className="namco70-gsc-container bg-namco70-gsc-background/80 flex flex-col gap-8">
					<Hero id="hero" />
					<TrackList
						id="tracks"
						songList={songList}
						currentIndex={0}
					/>
					<Information id="info" />
					<Credit id="credit" />
				</div>

				<MusicPlayer
					className={cn(
						'fixed bottom-0 z-10 h-(--player-height) w-full bg-namco70-gsc-background/80 grid grid-cols-[1fr_auto] grid-rows-1',
						'lg:bg-transparent lg:grid-cols-[auto_1fr_auto]'
					)}
				>
					<div className="flex gap-4 items-center w-full px-2 lg:bg-namco70-gsc-background/80 lg:col-start-1 lg:col-end-1">
						<Disc3 className="h-4 w-4 shrink-0" />
						<div className="overflow-hidden">
							<div className="flex gap-[1ch] items-center whitespace-nowrap animate-namco70-gsc-marquee">
								<MusicPlayer.Artist />
								<span>-</span>
								<MusicPlayer.Title />
							</div>
						</div>
					</div>
					<div className="flex gap-2 items-center lg:bg-namco70-gsc-background/80 lg:col-start-3 lg:col-end-3 lg:px-4">
						<MusicPlayer.Duration />
						<MusicPlayer.Prev>
							<ChevronFirst className="h-full w-full" />
						</MusicPlayer.Prev>
						<MusicPlayer.Play>
							<Play className="h-full w-full" />
						</MusicPlayer.Play>
						<MusicPlayer.Pause>
							<Pause className="h-full w-full" />
						</MusicPlayer.Pause>

						<MusicPlayer.Next>
							<ChevronLast className="h-full w-full" />
						</MusicPlayer.Next>
					</div>
				</MusicPlayer>
			</div>
		</Layout>
	);
}
