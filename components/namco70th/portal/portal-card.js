import Link from 'next/link';
import Image from 'next/image';
import cn from '../../../lib/cn';

export default function PortalCard({
	name,
	image,
	href,
	disabled,
	presentedBy,
	releasedAt,
}) {
	return (
		<Link
			href={href}
			className={cn(
				'w-full h-full font-namco70-mono',
				disabled ? 'pointer-events-none opacity-40' : 'cursor-pointer'
			)}
		>
			<div
				className={cn(
					'w-full h-full border-3 border-namco70-p-stroke grid grid-cols-1  grid-rows-[auto_auto_1fr]',
					!disabled && 'hover:border-namco70-p-stroke-focused'
				)}
			>
				<div className="flex flex-col items-center w-full h-full bg-namco70-p-background text-lg lg:text-xl text-namco70-p-foreground p-2 lg:p-3">
					<span className="text-center">
						Presented by {presentedBy}
					</span>
					{releasedAt && (
						<span className="text-namco70-p-foreground/60">
							Released at {releasedAt}
						</span>
					)}
				</div>
				{/* Cover image */}
				<div className="relative w-full h-20 lg:h-32 px-4 py-2">
					{image ? (
						<Image
							className="w-full h-full object-contain"
							src={image}
							alt={name}
							loading="lazy"
						/>
					) : (
						<div className="w-full h-full" />
					)}
				</div>
				<div className="flex flex-col items-center justify-center w-full h-full bg-namco70-p-background">
					<div className="flex flex-col items-center justify-center lg:gap-2 py-4 lg:py-3.5 text-lg lg:text-2xl">
						<span className="max-w-[40ch] text-center">{name}</span>
						<span className="text-namco70-p-foreground/60">
							{disabled ? '???????????' : 'Click to Enter'}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
