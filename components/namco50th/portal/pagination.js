import cn from '../../../lib/cn';

export default function PortalPagination({
	className,
	page,
	totalPages,
	onPageForward,
	onPageBackward,
}) {
	const disableForward = page >= totalPages;
	const disableBackward = page <= 1;

	return (
		<div className={cn('flex gap-4 font-namco50-mono', className)}>
			<button
				disabled={disableBackward}
				onClick={onPageBackward}
				className={cn(
					'decoration-none flex items-center justify-center w-12 h-12 text-5xl',
					disableBackward && 'opacity-50'
				)}
			>
				<i className="hn hn-angle-left"></i>
			</button>
			<div className="flex gap-2 justify-center items-center text-4xl">
				<span>{page}</span>
				<span>/</span>
				<span>{totalPages}</span>
			</div>

			<button
				disabled={disableForward}
				onClick={onPageForward}
				className={cn(
					'decoration-none flex items-center justify-center w-12 h-12 text-5xl',
					disableForward && 'opacity-50'
				)}
			>
				<i className="hn hn-angle-right"></i>
			</button>
		</div>
	);
}
