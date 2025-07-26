import Link from 'next/link';
import { useRouter } from 'next/router';

import collaboratorsJson from '/_collaborators.json';
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
import BoothSVG from '../../../public/assets/icons/booth.svg';
import PixivSVG from '../../../public/assets/icons/pixiv.svg';
import FanboxSVG from '../../../public/assets/icons/fanbox.svg';
import VgmdbSVG from '../../../public/assets/icons/vgmdb.svg';
import BskySVG from '../../../public/assets/icons/bsky.svg';

export default function ReleaseTracklist({ credits }) {
	function LinkIcon(props) {
		const link = props['linkObj'];

		if (link.toString().includes('bandcamp')) {
			return <FaBandcamp className={props.className} />;
		} else if (
			link.toString().includes('youtube') ||
			link.toString().includes('youtu.be')
		) {
			return <FaYoutube className={props.className} />;
		} else if (
			link.toString().includes('twitter') ||
			link.toString().includes('x.com')
		) {
			return <FaTwitter className={props.className} />;
		} else if (link.toString().includes('soundcloud')) {
			return <FaSoundcloud className={props.className} />;
		} else if (link.toString().includes('vgmdb')) {
			return <VgmdbSVG className={props.className} />;
		} else if (link.toString().includes('booth.pm')) {
			return <BoothSVG className={props.className} />;
		} else if (link.toString().includes('pixiv')) {
			return <PixivSVG className={props.className} />;
		} else if (link.toString().includes('fanbox.cc')) {
			return <FanboxSVG className={props.className} />;
		} else if (link.toString().includes('spotify')) {
			return <FaSpotify className={props.className} />;
		} else if (link.toString().includes('apple')) {
			return <FaApple className={props.className} />;
		} else if (link.toString().includes('patreon')) {
			return <FaPatreon className={props.className} />;
		} else if (link.toString().includes('bsky.app')) {
			return <BskySVG className={props.className} />;
		} else {
			return <FaGlobe className={props.className} />;
		}
	}
	const { locale } = useRouter();

	return (
		<section className="container mx-auto my-16">
			<h2 className="text-2xl text-center uppercase mb-8 font-black">
				{' '}
				credit{' '}
			</h2>
			<table className="table-auto w-full">
				<thead className="hidden md:table-header-group">
					<tr>
						<th className="px-4 py-2">Name</th>
						<th className="px-4 py-2">Role</th>
						<th className="px-4 py-2">Link</th>
					</tr>
				</thead>
				<tbody className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-4 md:table-row-group md:p-0 md:border-t border-[#666]">
					{Object.entries(credits).map((creditJSON) => {
						const tdClass =
							'md:border-b border-[#666] md:p-4 md:pl-8';

						let collaboratorInfo =
							collaboratorsJson[creditJSON[1].id];

						if (collaboratorInfo === undefined) {
							return (
								<tr
									key={creditJSON[0]}
									className="flex flex-col gap-4 w-auto pb-4 mb-4 border-b border-[#666] sm:border-0 md:m-0 md:table-row md:w-full"
								>
									<td className={tdClass + ' text-red-600'}>
										{creditJSON[1].id}
									</td>
									<td className={tdClass}>
										{creditJSON[1].role}
									</td>
									<td className={tdClass}></td>
								</tr>
							);
						}

						return (
							<tr
								key={creditJSON[0]}
								className="flex flex-col gap-4 w-auto pb-4 mb-4 border-b border-[#666] sm:border-0 md:m-0 md:table-row md:w-full"
							>
								<td className={tdClass}>
									{typeof collaboratorInfo.name === 'object'
										? collaboratorInfo.name[locale]
										: collaboratorInfo.name}
								</td>
								<td className={`text-white/50 ${tdClass}`}>
									{creditJSON[1].role}
								</td>
								<td className={tdClass}>
									<div className="flex flex-wrap gap-4">
										{collaboratorInfo.links &&
											Object.entries(
												collaboratorInfo.links
											)
												.sort((a, b) => {
													if (a[0] < b[0]) {
														return -1;
													}
													if (a[0] > b[0]) {
														return 1;
													}
													return 0;
												})
												.map((link) => {
													return (
														<Link
															href={link[1]}
															passHref
															target="_blank"
															key={link[0]}
														>
															<LinkIcon
																className="min-w-6 w-auto fw-bold h-6 hover:text-(--release-color) focus:text-(--release-color) transition-all duration-300 ease-in-out"
																linkObj={
																	link[1]
																}
															/>
														</Link>
													);
												})}
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</section>
	);
}
