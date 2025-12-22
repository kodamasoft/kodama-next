import React from 'react';
import ReleaseTrack from '../release-track';
import Image from 'next/image';
import Link from 'next/link';

// Background colors for each disc
const discColors = [
	{
		// DISC1: FLORAISON
		primary: '#00ff00',
		background: 'rgba(37, 31, 27, 0.8)',
	},
	{
		// DISC2: ASCENSION - pink
		primary: '#d475b5',
		background: 'rgba(137, 199, 242, 0.6)',
		color: '#000000',
	},
	{
		// DISC3: INSPIRATION - blue
		primary: '#03feff',
		background: 'rgba(0, 0, 0, 0.9)',
	},
	{
		// DISC4: RECRÉATION - red
		primary: '#f80828',
		background: 'rgba(9, 51, 145, 0.9)',
	},
];

export default function YggdrasilTracklist({ tracklist }) {
	const processTracklist = (list) => {
		if (Array.isArray(list) && list.length > 0 && list[0]._isMultiDisc) {
			// Multi-disc case
			let discNames = list[0]._discNames;
			return list.slice(1).map((disc, discIndex) => ({
				discName: discNames[discIndex],
				tracks: Object.entries(disc).sort(
					(a, b) => Number(a[0]) - Number(b[0])
				),
				bgColor: discColors[discIndex] || discColors[0],
				coverPath: `/assets/discography/covers/0022~${discIndex + 1}.png`,
				headerPath: `/assets/discography/headers/0022~${discIndex + 1}.jpg`,
				logoPath: `/assets/discography/logos/0022~${discIndex + 1}.png`,
			}));
		} else {
			// Single disc case
			return [
				{
					discName: null,
					tracks: Object.entries(list).sort(
						(a, b) => Number(a[0]) - Number(b[0])
					),
					bgColor: discColors[0],
					coverPath: '/assets/discography/covers/0022.png',
					headerPath: '/assets/discography/headers/0022.png',
					logoPath: '/assets/discography/logos/0022.png',
				},
			];
		}
	};

	const processedTracklist = processTracklist(tracklist);

	return (
		<section className="mx-auto my-16">
			<h2 className="text-2xl text-center uppercase mb-8 font-black">
				tracklist
			</h2>
			<div className="w-full">
				{processedTracklist.map((disc, discIndex) => (
					<div
						key={discIndex}
						className="w-full overflow-hidden relative"
						style={{
							backgroundImage: `url(${disc.headerPath})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							backgroundAttachment: 'fixed',
						}}
					>
						<div
							className="backdrop-blur-lg max-w-4xl mx-auto"
							style={{
								backgroundColor: disc.bgColor.background,
								color: disc.bgColor.color,
							}}
						>
							<div className="relative flex flex-col items-center pt-6 px-4">
								<Link
									href={disc.coverPath}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										src={disc.coverPath}
										alt={disc.discName || ''}
										width={400}
										height={100}
										className="mb-4 object-contain cursor-pointer transition duration-200 ease-in-out hover:opacity-70"
										onClick={(e) => {
											if (e.button === 1) {
												// 1 is the middle mouse button
												e.preventDefault();
											}
										}}
									/>
								</Link>
								{disc.logoPath && (
									<Image
										src={disc.logoPath}
										alt="Album logo"
										width={450}
										height={100}
										className="mb-4 object-contain"
									/>
								)}
							</div>
							<div
								className="relative pb-6"
								style={{
									'--release-color': disc.bgColor.primary,
								}}
							>
								{disc.tracks.map((track) => (
									<ReleaseTrack
										key={track[0]}
										track={track}
									/>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
