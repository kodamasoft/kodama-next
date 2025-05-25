import Link from 'next/link';
import Image from 'next/image';
import cn from '../../../lib/cn';

export default function PortalCard({ name, image, href, disabled }) {
	return (
		<Link
			href={href}
			className={cn(
				'w-full',
				disabled ? 'pointer-events-none opacity-40' : 'cursor-pointer'
			)}
		>
			<div
				className={cn(
					'w-full border-3 border-namco50-p-stroke',
					!disabled && 'hover:border-namco50-p-stroke-focused'
				)}
			>
				{/* Cover image */}
				<div className="relative w-full h-20 px-4 py-2">
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
				<div className="flex flex-col items-center justify-center w-full h-full bg-namco50-p-background">
					<div className="flex flex-col items-center justify-center py-4 font-namco50-mono text-lg">
						<span>{name}</span>
						<span className="text-namco50-p-foreground/60">
							{disabled ? '???????????' : 'Click to Enter'}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
