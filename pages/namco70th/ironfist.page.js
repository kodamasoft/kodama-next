import Information from '../../components/namco70th/ironfist/information';
import Hero from '../../components/namco70th/ironfist/hero';
import Layout from '../../components/namco70th/ironfist/layout';
import TrackList from '../../components/namco70th/ironfist/track-list';
import Credit from '../../components/namco70th/ironfist/credit';
import ProjectLogo from '../../public/assets/namco70th/common/logo-white.svg';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import cn from '../../lib/cn';

const songList = [];

export default function IronFist() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<Layout>
			<div className="relative lg:flex lg:h-dvh namco70-if-header-height">
				<header
					className={cn(
						'sticky flex justify-between top-0 z-10 h-(--header-height) w-full bg-namco70-if-accent py-4 items-center',
						'lg:static lg:h-full lg:w-(--header-height) lg:left-0 lg:flex-col'
					)}
				>
					<ProjectLogo className="h-full w-auto px-4 lg:py-4 lg:px-0 lg:h-auto lg:w-full lg:rotate-270" />

					<nav className="hidden md:flex items-center gap-6 lg:grow namco70-if-vertical-text lg:text-lg">
						<a href="#hero">Home</a>
						<a href="#tracks">Tracks</a>
						<a href="#info">Information</a>
						<a href="#credits">Credits</a>
					</nav>
					<button
						onClick={toggleMenu}
						className="md:hidden p-2"
						aria-label="Toggle menu"
					>
						<Menu size={32} />

						{menuOpen && (
							<div className="absolute top-full left-0 right-0 bg-namco70-if-accent shadow-lg md:hidden">
								<nav className="flex flex-col">
									<a
										href="#hero"
										className="px-4 py-3 hover:bg-namco70-if-accent"
										onClick={() => setMenuOpen(false)}
									>
										Home
									</a>
									<a
										href="#tracks"
										className="px-4 py-3 hover:bg-namco70-ase-accent/10"
										onClick={() => setMenuOpen(false)}
									>
										Tracks
									</a>
									<a
										href="#info"
										className="px-4 py-3 hover:bg-namco70-ase-accent/10"
										onClick={() => setMenuOpen(false)}
									>
										Information
									</a>
									<a
										href="#credits"
										className="px-4 py-3 hover:bg-namco70-ase-accent/10"
										onClick={() => setMenuOpen(false)}
									>
										Credits
									</a>
								</nav>
							</div>
						)}
					</button>
				</header>
				<div className="flex flex-col overflow-auto lg:grow">
					<Hero className="overflow-hidden lg:overflow-visible max-h-dvh lg:w-full lg:h-[80vh]" />
					<TrackList
						id="tracks"
						songList={songList}
						currentIndex={0}
					/>
					<Information />
					<Credit />
				</div>
			</div>
		</Layout>
	);
}
