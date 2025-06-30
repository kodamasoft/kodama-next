import cn from '../../../lib/cn';
import TrackItem from './track-item';

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
		</div>
	);
}
