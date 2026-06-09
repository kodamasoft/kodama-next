import React from 'react';
import ReleaseTrack from './release-track';

export default function ReleaseTracklist({ tracklist }) {
	const processTracklist = (list) => {
		if (Array.isArray(list) && list.length > 0 && list[0]._isMultiDisc) {
			// Multi-disc case
			let discNames = list[0]._discNames;
			return list.slice(1).map((disc, discIndex) => ({
				discName: discNames[discIndex],
				tracks: Object.entries(disc).sort(
					(a, b) => Number(a[0]) - Number(b[0])
				),
			}));
		} else {
			// Single disc case
			return [
				{
					discName: null,
					tracks: Object.entries(list).sort(
						(a, b) => Number(a[0]) - Number(b[0])
					),
				},
			];
		}
	};
	const processedTracklist = processTracklist(tracklist);
	const isMultiDisc = processedTracklist.length > 1;

	return (
		<section className="mx-auto my-16">
			<h2 className="text-2xl text-center uppercase mb-8 font-black">
				tracklist
			</h2>
			<div
				className={`w-auto ${isMultiDisc ? 'flex flex-wrap justify-center md:gap-8' : ''}`}
			>
				{processedTracklist.map((disc, discIndex) => (
					<div
						key={discIndex}
						className={`${isMultiDisc ? 'w-full md:w-[30%] mb-8 mx-4 relative' : 'w-full'}`}
					>
						{disc.discName && (
							<h3 className="text-lg text-center font-bold mb-4">
								{disc.discName}
							</h3>
						)}
						{disc.tracks.map((track) => (
							<ReleaseTrack key={track[0]} track={track} />
						))}
					</div>
				))}
			</div>
		</section>
	);
}
