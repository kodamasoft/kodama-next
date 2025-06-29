import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';

import Container from '../components/container';
import Header from '../components/header';
import ProseContainer from '../components/prose-container';
import Image from 'next/image';

import staffJson from '/public/assets/staff/stafflist.json';

import { WEBSITE_NAME } from '../lib/constants';

import {
	FaBandcamp,
	FaSoundcloud,
	FaYoutube,
	FaTwitter,
	FaSpotify,
	FaApple,
	FaInstagram,
	FaGlobe,
	FaPatreon,
} from 'react-icons/fa';
import VGMDBIcon from '../public/assets/icons/vgmdb.svg';
import BskyIcon from '../public/assets/icons/bsky.svg';

export default function Staff({}) {
	const socialOrder = [
		'twitter',
		'bsky',
		'patreon',
		'vgmdb',
		'bandcamp',
		'soundcloud',
		'spotify',
		'apple',
		'instagram',
		'youtube',
		'website',
	];
	return (
		<>
			<Layout>
				<Head>
					<title>{WEBSITE_NAME}</title>
				</Head>

				<Container>
					<Header />

					<div className="container pt-10 px-6 mx-auto">
						<ProseContainer>
							<h2>Staff</h2>
						</ProseContainer>
						<div className="max-w-4xl mx-auto font-medium">
							{staffJson.map((staff, index) =>
								typeof staff._legacy === 'undefined' ? (
									<div key={index} className="mb-10">
										<div className="flex flex-col md:grid md:grid-cols-[150px_1fr] gap-4">
											<div className="">
												<Image
													src={
														'/assets/staff/pictures/kodama_' +
														staff._collabId +
														'.png'
													}
													alt={staff.name}
													className="w-full rounded-lg"
													width={150}
													height={150}
												/>
											</div>
											<div className="">
												<h3 className="text-xl font-bold mb-2">
													{staff.name}
												</h3>
												<p className="mb-2">
													{staff.role}
												</p>
												<ul className="flex flex-col gap-1 mb-2">
													{staff.realName && (
														<li>
															Real name:{' '}
															{staff.realName}
														</li>
													)}
													{staff.pronouns && (
														<li>
															Pronouns:{' '}
															{staff.pronouns}
														</li>
													)}
													{staff.dateOfBirth && (
														<li>
															Date of birth:{' '}
															{staff.dateOfBirth}
														</li>
													)}
													{staff.placeOfBirth && (
														<li>
															Place of birth:{' '}
															{staff.placeOfBirth}
														</li>
													)}
												</ul>
											</div>
											<p className="col-span-2 my-2 w-full">
												{staff.description}
											</p>
										</div>

										{staff.socials && (
											<div className="flex w-full justify-start flex-row gap-4 my-4">
												{socialOrder.map(
													(social, index) => {
														if (
															staff.socials[
																social
															]
														) {
															return (
																<Link
																	key={index}
																	href={
																		staff
																			.socials[
																			social
																		]
																	}
																	className="text-4xl hover:scale-105 transition"
																>
																	{social ===
																		'vgmdb' && (
																		<VGMDBIcon className="w-8 h-8" />
																	)}
																	{social ===
																		'bsky' && (
																		<BskyIcon className="w-8 h-8" />
																	)}
																	{social ===
																		'bandcamp' && (
																		<FaBandcamp />
																	)}
																	{social ===
																		'soundcloud' && (
																		<FaSoundcloud />
																	)}
																	{social ===
																		'patreon' && (
																		<FaPatreon />
																	)}
																	{social ===
																		'twitter' && (
																		<FaTwitter />
																	)}
																	{social ===
																		'youtube' && (
																		<FaYoutube />
																	)}
																	{social ===
																		'instagram' && (
																		<FaInstagram />
																	)}
																	{social ===
																		'website' && (
																		<FaGlobe />
																	)}
																	{social ===
																		'apple' && (
																		<FaApple />
																	)}
																	{social ===
																		'spotify' && (
																		<FaSpotify />
																	)}
																</Link>
															);
														}
														return null;
													}
												)}
											</div>
										)}
									</div>
								) : null
							)}
						</div>
						<ProseContainer>
							<h2>Former Staff</h2>
							{staffJson.map((staff, index) =>
								typeof staff._legacy !== 'undefined' ? (
									<div key={index}>
										{staff.name} ({staff.role},{' '}
										{staff.legacyStatus})
									</div>
								) : null
							)}
						</ProseContainer>
					</div>
				</Container>
			</Layout>
		</>
	);
}
