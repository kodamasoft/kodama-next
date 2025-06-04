import Layout from '../../components/namco70th/almightysoundexpress/layout';
import MusicPlayer from '../../components/namco70th/music-player';
import { ChevronFirst, ChevronLast, Disc3, Pause, Play } from 'lucide-react';
import SeekBar from '../../components/namco70th/almightysoundexpress/seek-bar';
import Hero from '../../components/namco70th/almightysoundexpress/hero';
import TrackList from '../../components/namco70th/almightysoundexpress/track-list';
import { useState } from 'react';
import Information from '../../components/namco70th/almightysoundexpress/information';
import HrefButton from '../../components/namco70th/href-button';

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

	const handleTrackChange = (index) => {
		setActiveTrackIndex(index);
	};

	return (
		<Layout>
			<div
				className="relative"
				style={{ '--header-height': '4rem', '--player-height': '4rem' }}
			>
				{/* Sticky Header */}
				<header className="sticky top-0 z-10 h-(--header-height)"></header>
				<Hero className="h-[calc(100dvh_-_var(--header-height)_-_var(--player-height))]" />
				<TrackList
					songList={songList}
					currentIndex={activeTrackIndex}
				/>
				{/* Information Section */}
				<Information />

				<div className="sticky bottom-0 z-10 h-(--player-height) bg-namco70-ase-background">
					<MusicPlayer
						onTrackChange={handleTrackChange}
						songList={songList}
						href={CROSSFADE_URL}
						className="flex flex-col h-full"
					>
						<SeekBar />
						<div className="flex items-center justify-between p-2 h-full">
							<div className="flex gap-4 items-center justify-center w-full max-w-1/2 text-sm bg-namco70-ase-accent text-namco70-ase-foreground-1 px-4 py-2 rounded-full">
								<Disc3 className="h-4 w-4 shrink-0" />
								<div className="overflow-hidden">
									<div className="flex gap-[1ch] items-center whitespace-nowrap animate-namco70-ase-marquee">
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
