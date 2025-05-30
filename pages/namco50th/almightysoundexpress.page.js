import Image from 'next/image';
import Jacket from '../../public/assets/namco50th/almightysoundexpress/jacket.png';
import Layout from '../../components/namco50th/almightysoundexpress/layout';
import Link from 'next/link';
import MusicPlayer from '../../components/namco50th/music-player';
import { ChevronFirst, ChevronLast, Disc3, Pause, Play } from 'lucide-react';
import SeekBar from '../../components/namco50th/almightysoundexpress/seek-bar';

/** @typedef {import('../../components/namco50th/types').SongItem} SongItem */

const CROSSFADE_URL =
	'https://soundcloud.com/almighty-arrange-project/almighty-sound-express-album-crossfade';

/** @type {SongItem[]} */
const songList = [
	{
		title: 'Almighty Sound Express',
		artist: 'Almighty Arrange Project',
		startAt: 0,
	},
];
export default function AlmightySoundExpress() {
	return (
		<Layout>
			<div
				className="relative"
				style={{ '--header-height': '4rem', '--player-height': '4rem' }}
			>
				{/* Sticky Header */}
				<header className="sticky top-0 z-10 h-(--header-height)"></header>
				{/* Music Player */}
				<div className="h-[calc(100dvh_-_var(--header-height)_-_var(--player-height))] flex flex-col">
					<Image
						className="w-full h-auto object-contain"
						src={Jacket}
						alt={'Almighty Sound Express'}
						loading="lazy"
					/>
					<div className="flex flex-col p-4 gap-4">
						<div className="flex gap-[1ch] items-end">
							<span>Project Name</span>
							<span className="text-xs">
								Presented by Almighty Arrange Project
							</span>
						</div>
						<h1 className="text-3xl ">Almighty Sound Express</h1>
					</div>
				</div>
				<div className="sticky bottom-0 z-10 h-(--player-height)">
					<MusicPlayer
						songList={songList}
						href={CROSSFADE_URL}
						className="flex flex-col h-full"
					>
						<SeekBar />
						<div className="flex items-center justify-between p-2 h-full">
							<div className="flex gap-4 items-center justify-center w-full max-w-1/2 text-sm bg-namco50-ase-accent text-namco50-ase-foreground-1 px-4 py-2 rounded-full">
								<Disc3 className="h-4 w-4 shrink-0" />
								<div className="overflow-hidden">
									<div className="flex gap-[1ch] items-center whitespace-nowrap animate-namco50-ase-marquee">
										<MusicPlayer.Title />
										<span>-</span>
										<MusicPlayer.Artist />
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
