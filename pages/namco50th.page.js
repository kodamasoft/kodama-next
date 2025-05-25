import Head from 'next/head';
import Layout from '../components/namco50th/layout';
import PortalCard from '../components/namco50th/portal/portal-card';
import ASELogo from '/public/assets/namco50th/almightysoundexpress/ase-logo.webp';

const projectInfos = [
	{
		name: 'Almighty Sound Express',
		image: ASELogo,
		href: '/namco50th/almightysoundexpress',
		isDisabled: false,
	},
	{
		name: '?????????',
		image: '',
		href: '/namco50th/almightysoundexpress',
		isDisabled: true,
	},
];

export default function Discography() {
	return (
		<>
			<Layout>
				<Head>
					<title>Namco 50th Anniversary</title>
				</Head>
				<div className="w-full h-full">
					<div className="flex flex-col items-center h-full w-full px-4 gap-4">
						{/* Album container */}
						{projectInfos.map((projectInfo, index) => (
							<PortalCard
								key={index}
								name={projectInfo.name}
								image={projectInfo.image}
								href={projectInfo.href}
								disabled={projectInfo.isDisabled}
							/>
						))}
					</div>
				</div>
			</Layout>
		</>
	);
}
