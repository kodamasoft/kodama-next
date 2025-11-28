import Layout from '../components/layout';
import Head from 'next/head';
import Container from '../components/container';
import Header from '../components/header';
import Link from 'next/link';
import Image from 'next/image';
import collaboratorsData from '../_collaborators.json';
import commentsData from '../yggdrasil-comments.json';
import {
	FaBandcamp,
	FaGlobe,
	FaYoutube,
	FaSoundcloud,
	FaTwitter,
	FaSpotify,
	FaApple,
	FaPatreon,
} from 'react-icons/fa';
import BoothSVG from '../public/assets/icons/booth.svg';
import PixivSVG from '../public/assets/icons/pixiv.svg';
import FanboxSVG from '../public/assets/icons/fanbox.svg';
import VgmdbSVG from '../public/assets/icons/vgmdb.svg';
import BskySVG from '../public/assets/icons/bsky.svg';

export default function YggdrasilComments() {
	const getArtistLinks = (artistId) => {
		if (!artistId || !collaboratorsData[artistId]) return null;
		return collaboratorsData[artistId].links || null;
	};

	const LinkIcon = ({ link, className }) => {
		if (link.toString().includes('bandcamp')) {
			return <FaBandcamp className={className} />;
		} else if (
			link.toString().includes('youtube') ||
			link.toString().includes('youtu.be')
		) {
			return <FaYoutube className={className} />;
		} else if (
			link.toString().includes('twitter') ||
			link.toString().includes('x.com')
		) {
			return <FaTwitter className={className} />;
		} else if (link.toString().includes('soundcloud')) {
			return <FaSoundcloud className={className} />;
		} else if (link.toString().includes('vgmdb')) {
			return <VgmdbSVG className={className} />;
		} else if (link.toString().includes('booth.pm')) {
			return <BoothSVG className={className} />;
		} else if (link.toString().includes('pixiv')) {
			return <PixivSVG className={className} />;
		} else if (link.toString().includes('fanbox.cc')) {
			return <FanboxSVG className={className} />;
		} else if (link.toString().includes('spotify')) {
			return <FaSpotify className={className} />;
		} else if (link.toString().includes('apple')) {
			return <FaApple className={className} />;
		} else if (link.toString().includes('patreon')) {
			return <FaPatreon className={className} />;
		} else if (link.toString().includes('bsky.app')) {
			return <BskySVG className={className} />;
		} else {
			return <FaGlobe className={className} />;
		}
	};

	const yggdrasilArtists = commentsData.filter(
		(item) => !item.section || item.section.includes('YGGDRASIL')
	);
	const otherArtists = commentsData.filter(
		(item) => item.section && item.section.includes('OTHER')
	);

	return (
		<>
			<Layout>
				<Head>
					<title>YGGDRASIL - Artist Comments | KodamaSounds</title>
				</Head>

				<Container>
					<Header />

					<div className="container pt-10 px-6 mx-auto max-w-4xl">
						<h1 className="text-4xl font-bold mb-2">YGGDRASIL</h1>
						<p className="text-lg opacity-80 mb-12">
							5th Anniversary Artist Comments
						</p>

						<div className="space-y-12">
							{yggdrasilArtists.length > 0 && (
								<section>
									<h2 className="text-2xl font-semibold mb-6">
										From YGGDRASIL Artists
									</h2>
									<div className="space-y-8">
										{yggdrasilArtists.map((item, index) => {
											const links = getArtistLinks(
												item.artistId
											);
											const hasLinks =
												links &&
												Object.keys(links).length > 0;

											return (
												<div
													key={index}
													className="border-b border-white/10 pb-8 last:border-0"
												>
													{item.comment && (
														<p className="text-white/90 mb-4 leading-relaxed whitespace-pre-line">
															{item.comment}
														</p>
													)}
													<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
														<p className="text-lg font-semibold">
															<span className="text-white/60">
																—
															</span>{' '}
															{item.name}
														</p>
														{hasLinks && (
															<div className="flex flex-wrap gap-4">
																{Object.entries(
																	links
																)
																	.sort(
																		(
																			a,
																			b
																		) => {
																			if (
																				a[0] <
																				b[0]
																			)
																				return -1;
																			if (
																				a[0] >
																				b[0]
																			)
																				return 1;
																			return 0;
																		}
																	)
																	.map(
																		([
																			key,
																			url,
																		]) => {
																			if (
																				!url ||
																				url ===
																					'link'
																			)
																				return null;
																			return (
																				<Link
																					href={
																						url
																					}
																					key={
																						key
																					}
																					target="_blank"
																					rel="noopener noreferrer"
																					className="text-white/70 hover:text-white transition-colors"
																				>
																					<LinkIcon
																						link={
																							url
																						}
																						className="w-6 h-6"
																					/>
																				</Link>
																			);
																		}
																	)}
															</div>
														)}
													</div>
												</div>
											);
										})}
									</div>
								</section>
							)}

							{otherArtists.length > 0 && (
								<section>
									<h2 className="text-2xl font-semibold mb-6">
										Other Artists
									</h2>
									<div className="space-y-8">
										{otherArtists.map((item, index) => {
											const links = getArtistLinks(
												item.artistId
											);
											const hasLinks =
												links &&
												Object.keys(links).length > 0;

											return (
												<div
													key={index}
													className="border-b border-white/10 pb-8 last:border-0"
												>
													{item.comment ===
													'[insert gronyan here]' ? (
														<div className="mb-4">
															<Image
																src="/assets/gronyan.png"
																alt="Gronyan"
																width={50}
																height={50}
																className="rounded-lg"
															/>
														</div>
													) : (
														<p className="text-white/90 mb-4 leading-relaxed whitespace-pre-line">
															{item.comment}
														</p>
													)}
													<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
														<p className="text-lg font-semibold">
															<span className="text-white/60">
																—
															</span>{' '}
															{item.name}
														</p>
														{hasLinks && (
															<div className="flex flex-wrap gap-4">
																{Object.entries(
																	links
																)
																	.sort(
																		(
																			a,
																			b
																		) => {
																			if (
																				a[0] <
																				b[0]
																			)
																				return -1;
																			if (
																				a[0] >
																				b[0]
																			)
																				return 1;
																			return 0;
																		}
																	)
																	.map(
																		([
																			key,
																			url,
																		]) => {
																			if (
																				!url ||
																				url ===
																					'link'
																			)
																				return null;
																			return (
																				<Link
																					href={
																						url
																					}
																					key={
																						key
																					}
																					target="_blank"
																					rel="noopener noreferrer"
																					className="text-white/70 hover:text-white transition-colors"
																				>
																					<LinkIcon
																						link={
																							url
																						}
																						className="w-6 h-6"
																					/>
																				</Link>
																			);
																		}
																	)}
															</div>
														)}
													</div>
												</div>
											);
										})}
									</div>
								</section>
							)}
						</div>
					</div>
				</Container>
			</Layout>
		</>
	);
}
