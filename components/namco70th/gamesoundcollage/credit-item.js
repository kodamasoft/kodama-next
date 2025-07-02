import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip';

export default function CreditItem({
	name = 'Unknown Artist',
	role = 'Unknown Role',
	socials = [],
}) {
	return (
		<div className="flex justify-between py-4 border-b border-namco70-p-stroke/60">
			<div className="flex gap-4 items-center">
				<span>{name}</span>
				<div className="flex gap-2 items-center">
					{socials.map((social) => (
						<Tooltip key={social.href}>
							<TooltipTrigger asChild>
								<Link
									className="flex gap-2 opacity-60 hover:opacity-100 transition-opacity duration-200"
									target="_blank"
									rel="noopener noreferrer"
									href={social.href}
									aria-label={social.title}
								>
									{social.icon}
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<span>{social.title}</span>
							</TooltipContent>
						</Tooltip>
					))}
				</div>
			</div>
			<div>
				<span>{role}</span>
			</div>
		</div>
	);
}
