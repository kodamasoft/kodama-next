import cn from '../../../lib/cn';
export default function TrackItem({
	title,
	artist,
	active,
	className,
	...props
}) {
	return (
		<li
			data-active={active ? 'true' : undefined}
			className={cn('flex group', className)}
			{...props}
		>
			<div className="flex flex-col flex-1 gap-1">
				<span className="group-data-active:font-bold group-data-active:text-namco70-gsc-accent">
					{title}
				</span>
				<span className="italic text-sm group-data-active:text-namco70-gsc-accent/80">
					{artist}
				</span>
			</div>
		</li>
	);
}
