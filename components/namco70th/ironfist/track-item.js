import cn from '../../../lib/cn';

export default function TrackItem({
	title,
	originalSong,
	artist,
	originalArtist,
	active,
	className,
	index,
	...props
}) {
	return (
		<li
			data-active={active ? 'true' : undefined}
			className={cn('flex group gap-4 lg:gap-6', className)}
			{...props}
		>
			<div className="text-xl md:text-3xl lg:text-5xl opacity-20 min-w-[2ch] text-center">
				{index}
			</div>
			<div className="flex flex-col flex-1 gap-1">
				<span className="group-data-active:font-bold sm:text-2xl font-medium">
					{title}
				</span>
				{originalSong && (
					<span className="italic text-sm sm:text-lg opacity-80">
						<span className="font-semibold">Original Song:</span>{' '}
						{originalSong}
					</span>
				)}
				<span className="italic text-sm sm:text-lg opacity-80">
					<span className="font-semibold">Arranger:</span> {artist}
				</span>
				{originalArtist && (
					<span className="italic text-sm sm:text-lg opacity-80">
						<span className="font-semibold">Original Artist:</span>{' '}
						{originalArtist}
					</span>
				)}
			</div>
		</li>
	);
}
