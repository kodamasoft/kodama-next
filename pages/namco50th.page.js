import Head from 'next/head';
import Layout from '../components/namco50th/layout';
import PortalCard from '../components/namco50th/portal/portal-card';
import ASELogo from '/public/assets/namco50th/almightysoundexpress/ase-logo.webp';
import GSCLogo from '/public/assets/namco50th/gamesoundcollage/gsc-logo.png';
import cn from '../lib/cn';
import PortalHeader from '../components/namco50th/portal/portal-header';
import { useMemo, useState, useEffect } from 'react';
import PortalPagination from '../components/namco50th/portal/pagination';

const projectInfos = [
	{
		name: 'Almighty Sound Express',
		image: ASELogo,
		href: '/namco50th/almightysoundexpress',
		presentedBy: 'Team Name',
		isDisabled: false,
	},
	{
		name: 'Game Sound Collage',
		image: GSCLogo,
		presentedBy: 'Team Name',
		href: '/namco50th/gamesoundcollage',
		isDisabled: false,
	},
	{
		name: '?????????',
		image: '',
		presentedBy: 'Team Name',
		href: '/namco50th/almightysoundexpress',
		isDisabled: true,
	},
	{
		name: '?????????',
		image: '',
		presentedBy: 'Team Name',
		href: '/namco50th/almightysoundexpress',
		isDisabled: true,
	},
	{
		name: '?????????',
		image: '',
		presentedBy: 'Team Name',
		href: '/namco50th/almightysoundexpress',
		isDisabled: true,
	},
	{
		name: '?????????',
		image: '',
		presentedBy: 'Team Name',
		href: '/namco50th/almightysoundexpress',
		isDisabled: true,
	},
	{
		name: '?????????',
		image: '',
		presentedBy: 'Team Name',
		href: '/namco50th/almightysoundexpress',
		isDisabled: true,
	},
	{
		name: '?????????',
		image: '',
		presentedBy: 'Team Name',
		href: '/namco50th/almightysoundexpress',
		isDisabled: true,
	},
	{
		name: '?????????',
		image: '',
		presentedBy: 'Team Name',
		href: '/namco50th/almightysoundexpress',
		isDisabled: true,
	},
];

export default function Discography() {
	// Page starts at 1, I know this is triggering
	const [currentPage, setCurrentPage] = useState(1);
	const cardsPerPage = 6;
	const totalPages = Math.ceil(projectInfos.length / cardsPerPage);
	const [isDesktop, setIsDesktop] = useState(false);
	const [isShort, setIsShort] = useState(false);

	useEffect(() => {
		// Hopefully no rebound won't lag this out
		const checkIsDesktop = () => {
			setIsDesktop(window.matchMedia('(min-width: 64rem)').matches);
		};

		checkIsDesktop();
		window.addEventListener('resize', checkIsDesktop);

		return () => window.removeEventListener('resize', checkIsDesktop);
	}, []);

	const indexOfLastCard = currentPage * cardsPerPage;
	const indexOfFirstCard = indexOfLastCard - cardsPerPage;
	const currentCards = useMemo(() => {
		return isDesktop
			? projectInfos.slice(indexOfFirstCard, indexOfLastCard)
			: projectInfos;
	}, [isDesktop, indexOfFirstCard, indexOfLastCard]);
	// Page navigation
	const goToNextPage = () => {
		setCurrentPage((prev) => Math.min(prev + 1, totalPages));
	};

	const goToPrevPage = () => {
		setCurrentPage((prev) => Math.max(prev - 1, 1));
	};

	return (
		<>
			<Layout>
				<Head>
					<title>Namco 50th Anniversary</title>
				</Head>
				<div className="w-full h-full">
					<PortalHeader />
					<div
						className={cn(
							'flex flex-col items-center h-full w-full px-4 gap-4',
							'sm:grid sm:grid-cols-2',
							'lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-6 lg:p-8'
						)}
					>
						{/* Album container */}
						{currentCards.map((projectInfo, index) => (
							<PortalCard
								key={index}
								presentedBy={projectInfo.presentedBy}
								name={projectInfo.name}
								image={projectInfo.image}
								href={projectInfo.href}
								disabled={projectInfo.isDisabled}
							/>
						))}
					</div>
					<PortalPagination
						onPageForward={goToNextPage}
						onPageBackward={goToPrevPage}
						className="hidden h-full lg:flex justify-center items-center my-[min(2rem,_3vh)]"
						page={currentPage}
						totalPages={totalPages}
					/>

				</div>
			</Layout>
		</>
	);
}
