import { SiX } from '@icons-pack/react-simple-icons';
import CreditItem from './credit-item';

const credits = [
	{
		name: 'Banbeucmas',
		role: 'Web Design',
		socials: [
			{
				href: 'https://x.com/Banbeucams',
				title: 'X',
				icon: <SiX size={16} />,
			},
		],
	},
];
export default function Credit() {
	return (
		<div className="p-4 flex flex-col gap-8">
			<div>
				<h2 className="font-medium text-2xl">Credit</h2>
			</div>
			<div className="flex flex-col gap-4">
				{credits.map((credit) => (
					<CreditItem key={credit.name} {...credit} />
				))}
			</div>
		</div>
	);
}
