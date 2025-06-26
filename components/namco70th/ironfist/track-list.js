import cn from '../../../lib/cn';
import TrackItem from './track-item';

export default function TrackList({
	songList = [],
	className,
	currentIndex = 0,
	...props
}) {
	return (
		<div className={cn('p-4 flex flex-col gap-8', className)} {...props}>
			<div>
				<h1 className="text-3xl font-bold">Track List</h1>
			</div>
			<ul className="flex flex-col gap-4">
				{songList.map((track, index) => {
					return (
						<TrackItem
							active={index === currentIndex} // Assuming the first track is active
							title={track.title}
							artist={track.artist}
							key={track.title}
						/>
					);
				})}
			</ul>
		</div>
	);
}
