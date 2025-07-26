import Layout from '../../components/namco70th/almightysoundexpress/layout';
import MusicPlayer from '../../components/namco70th/music-player';
import {
	ChevronFirst,
	ChevronLast,
	Disc3,
	Pause,
	Play,
	Menu,
} from 'lucide-react';
import SeekBar from '../../components/namco70th/almightysoundexpress/seek-bar';
import Hero from '../../components/namco70th/almightysoundexpress/hero';
import TrackList from '../../components/namco70th/almightysoundexpress/track-list';
import { useRef, useState, useEffect } from 'react';
import Information from '../../components/namco70th/almightysoundexpress/information';
import HrefButton from '../../components/namco70th/href-button';
import Credit from '../../components/namco70th/almightysoundexpress/credit';
import cn from '../../lib/cn';
import Jacket from '../../public/assets/namco70th/almightysoundexpress/jacket.png';
import Image from 'next/image';
import ProjectLogo from '../../public/assets/namco70th/common/logo-white.svg';
import Link from 'next/link';

/** @typedef {import('../../components/namco70th/types').SongItem} SongItem */

const CROSSFADE_URL =
	'https://soundcloud.com/almighty-arrange-project/almighty-sound-express-album-crossfade';

/** @type {SongItem[]} */
const songList = [
	{
		title: 'Enter NAMCO',
		artist: 'Almighty Arrange Project',
		startAt: 0, // 0:00
	},
	{
		title: 'Turbulent Flow',
		artist: 'Rapid Riddims',
		startAt: 19, // 0:19
	},
	{
		title: 'PROJECT-GYNOTAI[file-21]__CEREBRAL_TEST_01',
		artist: 'ANGELWHISPER',
		startAt: 34, // 0:34
	},
	{
		title: 'Ghoul Psypanic',
		artist: 'fusoxide',
		startAt: 48, // 0:48
	},
	{
		title: 'To John',
		artist: 'Muscises',
		startAt: 58, // 0:58
	},
	{
		title: 'Echoes Beneath The Waves',
		artist: 'Aquatic Enigmas',
		startAt: 69, // 1:09
	},
	{
		title: 'numan athletics 2 type beat',
		artist: 'may rosencratz',
		startAt: 82, // 1:22
	},
	{
		title: 'Cold Sleep Stage (Genesis Remix)',
		artist: 'Muscises',
		startAt: 93, // 1:33
	},
	{
		title: 'Stereo Test',
		artist: 'ANGELWHISPER',
		startAt: 107, // 1:47
	},
	{
		title: 'Panic In The Park (Instrumental)',
		artist: 'Nightmare2UrDream',
		startAt: 119, // 1:59
	},
	{
		title: 'Hellharmony (Genesis Remix)',
		artist: 'Muscises',
		startAt: 137, // 2:17
	},
	{
		title: 'The Ascension',
		artist: 'Viravax',
		startAt: 150, // 2:30
	},
	{
		title: 'AUX-day - Hyper Butch ehm - the sand forgets',
		artist: 'windfvcker & Rammy',
		startAt: 159, // 2:39
	},
	{
		title: 'Acid Trial Project',
		artist: 'ANGELWHISPER',
		startAt: 170, // 2:50
	},
	{
		title: 'Jazz Shadows In City Light',
		artist: 'Neon Serenade',
		startAt: 184, // 3:04
	},
	{
		title: 'Throwaway Troupe',
		artist: 'marklincadet',
		startAt: 200, // 3:20
	},
];

// Should have used a store for tracklist -_-'
export default function AlmightySoundExpress() {
	const [activeTrackIndex, setActiveTrackIndex] = useState(0);
	const [menuOpen, setMenuOpen] = useState(false);
	const contentRef = useRef(null);

	const handleTrackChange = (index) => {
		setActiveTrackIndex(index);
	};

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	// Add event listener for wheel events
	useEffect(() => {
		const handleWheel = (e) => {
			if (window.innerWidth >= 1024 && contentRef.current) {
				// Prevent default scrolling behavior
				e.preventDefault();

				// Scroll the right column
				contentRef.current.scrollBy({
					top: e.deltaY,
					behavior: 'auto',
				});
			}
		};

		// Add event listener to the window
		window.addEventListener('wheel', handleWheel, { passive: false });

		return () => {
			window.removeEventListener('wheel', handleWheel);
		};
	}, []);

	return (
		<Layout>
			<div
				className="relative lg:flex lg:flex-row lg:h-dvh"
				style={{ '--header-height': '4rem', '--player-height': '4rem' }}
			>
				{/* Sticky Header */}
				<header className="sticky flex justify-between top-0 z-10 h-(--header-height) lg:w-full lg:fixed bg-namco70-ase-background px-4 border-b border-b-namco70-p-stroke/60">
					<Link
						href="/unitedtribute"
						alt="Back to Home Page"
						className="h-full w-auto"
					>
						<ProjectLogo className="h-full w-auto py-2" />
					</Link>

					<nav className="hidden md:flex items-center gap-6">
						<a
							href="#hero"
							className="hover:text-namco70-ase-accent transition-colors"
						>
							Home
						</a>
						<a
							href="#tracks"
							className="hover:text-namco70-ase-accent transition-colors"
						>
							Tracks
						</a>
						<a
							href="#info"
							className="hover:text-namco70-ase-accent transition-colors"
						>
							Information
						</a>
						<a
							href="#credits"
							className="hover:text-namco70-ase-accent transition-colors"
						>
							Credits
						</a>
					</nav>
					<button
						onClick={toggleMenu}
						className="md:hidden p-2"
						aria-label="Toggle menu"
					>
						<Menu size={32} />

						{menuOpen && (
							<div className="absolute top-full left-0 right-0 bg-namco70-ase-background shadow-lg md:hidden">
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
				<div
					ref={contentRef}
					className={cn(
						'flex flex-col lg:order-2 overflow-auto lg:w-1/3 xl:w-1/2 lg:min-w-[512px] lg:mt-(--header-height) transition-[width] duration-500 relative overflow-x-hidden overscroll-contain'
					)}
				>
					<Hero
						id="hero"
						className={cn(
							'h-[calc(100dvh_-_var(--header-height)_-_var(--player-height))] -scroll-pt-16 overflow-hidden',
							'lg:grow lg:shrink-0 lg:h-[calc(100dvh_-_var(--header-height))] lg:justify-center lg:items-center'
						)}
					/>
					<TrackList
						id="tracks"
						songList={songList}
						currentIndex={activeTrackIndex}
					/>
					{/* Information Section */}
					<Information id="info" />
					<Credit id="credits" />
				</div>

				<div
					className={cn(
						'sticky bottom-0 z-10 h-(--player-height) bg-namco70-ase-background',
						'lg:flex lg:flex-col lg:z-0 lg:w-full lg:h-full lg:pt-(--header-height) lg:flex-1 lg:overflow-hidden',
						'lg:relative lg:order-1'
					)}
				>
					<Image
						className="w-full h-auto object-cover hidden lg:block lg:shrink-0"
						src={Jacket}
						alt={'Almighty Sound Express'}
						loading="lazy"
					/>
					<MusicPlayer
						onTrackChange={handleTrackChange}
						songList={songList}
						href={CROSSFADE_URL}
						className="flex flex-col h-full player bg-namco70-ase-background lg:h-(--player-height) lg:absolute lg:bottom-0 lg:left-0 lg:w-full"
					>
						<SeekBar />
						<div className="flex items-center justify-between p-2 h-full lg:gap-6">
							<div className="flex gap-4 items-center w-full max-w-1/2 lg:max-w-max text-sm bg-namco70-ase-accent text-namco70-ase-foreground-1 px-4 py-2 rounded-full">
								<Disc3 className="h-4 w-4 shrink-0" />
								<div className="overflow-hidden">
									<div className="flex gap-[1ch] items-center whitespace-nowrap animate-namco70-ase-marquee lg:animate-none">
										<MusicPlayer.Artist />
										<span>-</span>
										<MusicPlayer.Title />
									</div>
								</div>
							</div>
							<div className="flex gap-2 items-center">
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
						</div>
					</MusicPlayer>
				</div>
			</div>
		</Layout>
	);
}
