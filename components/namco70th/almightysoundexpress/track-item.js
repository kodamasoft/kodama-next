import cn from '../../../lib/cn';
export default function TrackItem({ title, artist, active }) {
	return (
		<li
			data-active={active ? 'true' : undefined}
			className={cn(
				'flex px-4 py-2 group bg-namco70-ase-background data-active:bg-namco70-ase-accent rounded-full data-active:text-namco70-ase-foreground-1'
			)}
		>
			<div className="flex flex-col flex-1 gap-1">
				<span className="group-data-active:font-bold">{title}</span>
				<span className="italic text-sm">{artist}</span>
			</div>
		</li>
	);
}
