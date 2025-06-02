import cn from '../../../lib/cn';
export default function TrackItem({ title, artist, active }) {
	return (
		<li
			data-active={active}
			className={cn(
				'flex px-2 group bg-namco70-ase-background data-active:bg-namco70-ase-accent'
			)}
		>
			<div className="flex flex-col flex-1 gap-1">
				<span>{title}</span>
				<span className="text-sm">{artist}</span>
			</div>
		</li>
	);
}
