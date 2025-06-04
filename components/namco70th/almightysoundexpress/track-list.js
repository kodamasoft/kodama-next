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
			className={cn('py-4 px-2 flex flex-col gap-8', className)}
			{...props}
		>
			<div>
				<h2 className="font-medium text-xl">Track List</h2>
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
