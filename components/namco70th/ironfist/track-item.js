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
				<span className="group-data-active:font-bold">{title}</span>
				<span className="italic text-sm">{artist}</span>
			</div>
		</li>
	);
}
