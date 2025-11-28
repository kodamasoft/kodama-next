import React from 'react';
import ReleaseTrack from '../release-track';

// Background colors for each disc
const discColors = [
	'#2c0d0d', // DISC1: DEVOTION - dark red matching the release background
	'#1a0d2c', // DISC2: MALICE - dark purple
	'#0d2c1a', // DISC3: MALICE - dark green
	'#2c1a0d', // DISC4: MALICE - dark brown/orange
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
						className="w-full mb-8 rounded-lg overflow-hidden"
						style={{
							backgroundColor: disc.bgColor,
						}}
					>
						{disc.discName && (
							<h3 className="text-lg text-center font-bold mb-4 pt-6 px-4">
								{disc.discName}
							</h3>
						)}
						<div className="px-4 pb-6">
							{disc.tracks.map((track) => (
								<ReleaseTrack key={track[0]} track={track} />
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
