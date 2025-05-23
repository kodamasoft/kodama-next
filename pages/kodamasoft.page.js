import Layout from '../components/layout';
import Head from 'next/head';
import Container from '../components/container';
import Header from '../components/header';
import ProseContainer from '../components/prose-container';
import DateFormatter from '../components/date-formatter';
import Image from 'next/image';

import gamesJson from '/public/assets/games/releases.json';

import { WEBSITE_NAME } from '../lib/constants';

export default function Discography() {
	function buttonContent(link) {
		switch (link) {
			case 'steam':
				return 'Steam';
			case 'itch':
				return 'Itch.io';
			case 'google':
				return 'Google Play';
			case 'apple':
				return 'Apple Store';
			case 'amazon':
				return 'Amazon Store';
			case 'microsoft':
				return 'Microsoft Store';
			case 'nintendo':
				return 'Nintendo Store';
			case 'sony':
				return 'Sony Store';
			case 'website':
				return 'Website';
			default:
				return link;
		}
	}
	return (
		<>
			<Layout>
				<Head>
					<title>{WEBSITE_NAME}</title>
				</Head>
				<Container>
					<Header />

					<ProseContainer className="mt-10 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-2 prose-p:mt-0 prose-p:mb-2 prose-img:mt-2 prose-img:mb-2">
						{Object.keys(gamesJson).map((key) => (
							<div key={key}>
								<h2>{gamesJson[key].title}</h2>
								<div className="flex flex-wrap gap-4">
									{/* cover image */}
									<Image
										src={
											'/assets/games/illustrations/' +
											key +
											'.png'
										}
										alt={gamesJson[key].title}
										width={250}
										height={250}
										quality={100}
										className="rounded-md object-contain"
									/>

									{/* release description */}
									<div>
										<p>
											<span>
												Catalog:{' '}
												{gamesJson[key].catalog}
											</span>{' '}
											<br />
											{/* if release is correct iso timestamp, show it, else show the raw string */}
											<span>
												Release:{' '}
												{Date.parse(
													gamesJson[key].releaseDate
												) ? (
													<DateFormatter
														dateString={
															gamesJson[key]
																.releaseDate
														}
													/>
												) : (
													gamesJson[key].releaseDate
												)}
											</span>{' '}
											{gamesJson[key]
												.originalReleaseDate ? (
												<small className="italic">
													{' '}
													(Original:{' '}
													{Date.parse(
														gamesJson[key]
															.originalReleaseDate
													) ? (
														<DateFormatter
															dateString={
																gamesJson[key]
																	.originalReleaseDate
															}
														/>
													) : (
														gamesJson[key]
															.originalReleaseDate
													)}
													)
												</small>
											) : null}{' '}
											<br />
											<span>
												Genre: {gamesJson[key].genre}
											</span>
										</p>

										{/* links */}
										{gamesJson[key].links ? (
											<div className="flex flex-wrap gap-4 mt-0 not-prose">
												{Object.keys(
													gamesJson[key].links
												).map((link) => (
													<a
														href={
															gamesJson[key]
																.links[link]
														}
														className="not-prose kodama_btn kodama_btn--primary"
														key={key + '-' + link}
														target="_blank"
														rel="noopener noreferrer"
													>
														{buttonContent(link)}
													</a>
												))}
											</div>
										) : null}
									</div>
								</div>
							</div>
						))}
					</ProseContainer>
				</Container>
			</Layout>
		</>
	);
}
