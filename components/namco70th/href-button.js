import { cva } from 'class-variance-authority';
import cn from '../../lib/cn';
import Link from 'next/link';

const buttonVariant = cva(
	'inline-flex items-center justify-center whitespace-nowrap w-full h-full py-4',
	{
		variants: {
			variant: {
				default: 'text-white bg-black hover:text-black hover:bg-white',
				ase: 'bg-namco70-ase-background text-namco70-ase-foreground hover:bg-namco70-ase-accent hover:text-namco70-ase-foreground-1 border-namco70-ase-stroke rounded-lg border hover:border-namco70-ase-accent uppercase font-medium',
				gsc: 'border border-namco70-gsc-stroke',
				if: 'border border-namco70-if-stroke text-lg bg-namco70-if-foreground/20',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

export default function HrefButton({
	href = '',
	title,
	className = '',
	buttonClassName = '',
	variant = 'default',
	...props
}) {
	return (
		<Link href={href} className={cn(className)} {...props}>
			<button
				data-slot="button"
				className={cn(buttonVariant({ variant, buttonClassName }))}
			>
				{title}
			</button>
		</Link>
	);
}
