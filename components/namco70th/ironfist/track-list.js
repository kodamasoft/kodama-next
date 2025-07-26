import cn from '../../../lib/cn';
import TrackItem from './track-item';
import MusicPlayer from '../music-player';
import SeekBar from './seek-bar';
import { ChevronFirst, ChevronLast, Pause, Play, Disc3 } from 'lucide-react';

export default function TrackList({
	songList = [],
	className,
	currentIndex = 0,
	...props
}) {
	return (
		<div
			className={cn('p-4 flex flex-col gap-4.5 sm:gap-6', className)}
			{...props}
		>
			<div>
				<h1 className="text-3xl sm:text-4xl font-bold text-shadow-lg">
					Track List
				</h1>
			</div>
			<ul className="flex flex-col gap-8">
				{songList.map((track, index) => {
					return (
						<TrackItem
							active={index === currentIndex} // Assuming the first track is active
							title={track.title}
							artist={track.artist}
							index={index + 1}
							originalSong={track.originalSong}
							originalArtist={track.originalArtist}
							key={track.title}
						/>
					);
				})}
			</ul>
			<MusicPlayer
				songList={songList}
				href="https://soundcloud.com/technomarina/tekken-the-iron-fist-tributes-crossfade/"
				className="mt-6 w-full h-12 lg:h-16 bg-namco70-if-foreground text-namco70-if-accent-3 flex items-center justify-between gap-4 lg:gap-6 px-4"
			>
				<div className="flex gap-2 items-center justify-center lg:mt-1 mt-1">
					<Disc3 className="size-5 lg:size-6 lg:mb-1.5 mb-1 shrink-0" />
					<MusicPlayer.Duration className="whitespace-nowrap text-xl lg:text-2xl leading-none" />
				</div>
				<SeekBar className="w-full h-0.5" />
				<div className="flex gap-2 items-center">
					<MusicPlayer.Prev>
						<ChevronFirst className="h-full w-full size-5 lg:size-6" />
					</MusicPlayer.Prev>
					<MusicPlayer.Play>
						<Play className="h-full w-full size-5 lg:size-6" />
					</MusicPlayer.Play>
					<MusicPlayer.Pause>
						<Pause className="h-full w-full size-5 lg:size-6" />
					</MusicPlayer.Pause>

					<MusicPlayer.Next>
						<ChevronLast className="h-full w-full size-5 lg:size-6" />
					</MusicPlayer.Next>
				</div>
			</MusicPlayer>
		</div>
	);
}
