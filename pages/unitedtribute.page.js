import Head from 'next/head';
import Layout from '../components/namco70th/portal/layout';
import PortalCard from '../components/namco70th/portal/portal-card';
import ASELogo from '/public/assets/namco70th/almightysoundexpress/ase-logo.webp';
import GSCLogo from '/public/assets/namco70th/gamesoundcollage/gsc-logo.png';
import IFLogo from '/public/assets/namco70th/ironfist/if-logo.png';
import cn from '../lib/cn';
import PortalHeader from '../components/namco70th/portal/portal-header';
import { useMemo, useState, useEffect, useLayoutEffect } from 'react';
import PortalPagination from '../components/namco70th/portal/pagination';
import PortalEntrance from '../components/namco70th/portal/entrance';
import KTMLogo from '/public/assets/namco70th/katamari/ktm-logo.webp';
import SoraLogo from '/public/assets/namco70th/sorasuite/sora-logo.png';
import SSLogo from '/public/assets/namco70th/speedstars/ss-logo.png';

const projectInfos = [
	{
		name: 'Almighty Sound Express',
		image: ASELogo,
		href: '/unitedtribute/almightysoundexpress',
		releasedAt: '2025.06.01',
		presentedBy: 'Almighty Arrange Project',
		isDisabled: false,
	},
	{
		name: 'Game Sound Collage',
		image: GSCLogo,
		presentedBy: 'Pxtunes',
		releasedAt: '2025.06.01',

		href: '/unitedtribute/gamesoundcollage',
		isDisabled: false,
	},
	{
		name: 'Tekken: The Iron Fist Tributes',
		image: IFLogo,
		releasedAt: '2025.06.27',
		presentedBy: 'Technomarina',
		href: '/unitedtribute/ironfist',
		isDisabled: false,
	},
	{
		name: 'Eternal Katamari Original Soundtrack Vol. 1 ~ "Katamari Quality Damacy"',
		image: KTMLogo,
		presentedBy: 'SiIvaGunner Fusion Records',
		releasedAt: '2025.07.06',
		href: 'https://sgfr.highquality.rip/sgfr-c0003/index.html',
		isDisabled: false,
	},
	{
		name: 'STAFFcirc vol. 11 - SORA SUITE',
		image: SoraLogo,
		presentedBy: 'STAFFcirc',
		releasedAt: '2025.07.31',
		href: 'https://sexytoadsandfrogsfriendcircle.bandcamp.com/album/staffcirc-vol-11-sora-suite',
		isDisabled: false,
	},
	{
		name: 'SpeedSTARS -a Ridge Racer tribute album-',
		image: SSLogo,
		presentedBy: 'COUNTERFEST RECORDS',
		releasedAt: '2025.09.01',
		href: 'https://counterfest.kodamasoft.net/releases/speedstars',
		isDisabled: false,
	},
	{
		name: '?????????',
		image: '',
		presentedBy: '?????????',
		href: '/unitedtribute/almightysoundexpress',
		isDisabled: true,
	},
	{
		name: '?????????',
		image: '',
		presentedBy: '?????????',
		href: '/unitedtribute/almightysoundexpress',
		isDisabled: true,
	},
	{
		name: '?????????',
		image: '',
		presentedBy: '?????????',
		href: '/unitedtribute/almightysoundexpress',
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
	const [isEntranceVisible, setEntranceVisibility] = useState(true);

	useEffect(() => {
		const hasSeenEntrace = sessionStorage.getItem('hasSeenEntrance');
		if (hasSeenEntrace === 'true') {
			setEntranceVisibility(false);
		}
	}, []);

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

	const handleEntranceClick = () => {
		sessionStorage.setItem('hasSeenEntrance', 'true');
		setEntranceVisibility(false);
	};

	return (
		<>
			<Layout>
				<Head>
					<title>NAMCO 70th Anniversary</title>
				</Head>
				<PortalEntrance
					className={cn(
						'absolute z-10 opacity-100 transition-opacity duration-500',
						!isEntranceVisible && 'opacity-0 pointer-events-none'
					)}
					onClick={handleEntranceClick}
				/>
				<div
					className={cn(
						'w-full h-full flex flex-col',
						isEntranceVisible && 'hidden'
					)}
				>
					<PortalHeader />
					<div
						className={cn(
							'flex flex-col items-center h-full w-full px-4 gap-4',
							'md:grid md:grid-cols-2',
							'xl:grid-cols-3 xl:grid-rows-2 xl:gap-y-6 xl:p-8'
						)}
					>
						{/* Album container */}
						{currentCards.map((projectInfo, index) => (
							<PortalCard
								key={index}
								presentedBy={projectInfo.presentedBy}
								name={projectInfo.name}
								releasedAt={projectInfo.releasedAt}
								image={projectInfo.image}
								href={projectInfo.href}
								disabled={projectInfo.isDisabled}
							/>
						))}
					</div>
					<PortalPagination
						onPageForward={goToNextPage}
						onPageBackward={goToPrevPage}
						className="hidden lg:flex justify-center items-center my-[min(2rem,_3vh)]"
						page={currentPage}
						totalPages={totalPages}
					/>
				</div>
			</Layout>
		</>
	);
}
