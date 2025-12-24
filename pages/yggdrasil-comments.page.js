import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import collaboratorsData from '../_collaborators.json';
import commentsData from '../yggdrasil-comments.json';
import { Source_Serif_4 } from 'next/font/google';
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

const sourceSerif = Source_Serif_4({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	variable: '--font-source-serif',
});

const getLinkIcon = (link) => {
	const linkStr = link.toString().toLowerCase();
	if (linkStr.includes('bandcamp')) return FaBandcamp;
	if (linkStr.includes('youtube') || linkStr.includes('youtu.be'))
		return FaYoutube;
	if (linkStr.includes('twitter') || linkStr.includes('x.com'))
		return FaTwitter;
	if (linkStr.includes('soundcloud')) return FaSoundcloud;
	if (linkStr.includes('vgmdb')) return VgmdbSVG;
	if (linkStr.includes('booth.pm')) return BoothSVG;
	if (linkStr.includes('pixiv')) return PixivSVG;
	if (linkStr.includes('fanbox.cc')) return FanboxSVG;
	if (linkStr.includes('spotify')) return FaSpotify;
	if (linkStr.includes('apple')) return FaApple;
	if (linkStr.includes('patreon')) return FaPatreon;
	if (linkStr.includes('bsky.app')) return BskySVG;
	return FaGlobe;
};

const LinkIcon = ({ link, className }) => {
	const IconComponent = getLinkIcon(link);
	return <IconComponent className={className} />;
};

const CommentContent = ({ comment }) => {
	if (comment === '[insert gronyan here]') {
		return (
			<div className="mb-4">
				<Image
					src="/assets/gronyan.png"
					alt="Gronyan"
					width={50}
					height={50}
					className="rounded-lg hover:animate-spin transition-transform"
				/>
			</div>
		);
	}
	return (
		<p className="mb-4 leading-relaxed whitespace-pre-line">{comment}</p>
	);
};

const ArtistLinks = ({ links }) => {
	if (!links || Object.keys(links).length === 0) return null;

	const validLinks = Object.entries(links)
		.filter(([, url]) => url && url !== 'link')
		.sort(([a], [b]) => a.localeCompare(b));

	if (validLinks.length === 0) return null;

	return (
		<div className="flex flex-wrap gap-4">
			{validLinks.map(([key, url]) => (
				<Link
					href={url}
					key={key}
					target="_blank"
					rel="noopener noreferrer"
					className="opacity-70 hover:opacity-100 transition-opacity"
					style={{ color: '#5C4033' }}
				>
					<LinkIcon link={url} className="w-6 h-6" />
				</Link>
			))}
		</div>
	);
};

const CommentItem = ({ item, getArtistLinks }) => {
	const links = getArtistLinks(item.artistId);

	return (
		<div className="border-b border-[#5C4033]/20 pb-8 last:border-0">
			{item.comment && <CommentContent comment={item.comment} />}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
				<p className="text-lg font-semibold">
					<span className="opacity-60">—</span> {item.name}
				</p>
				<ArtistLinks links={links} />
			</div>
		</div>
	);
};

const CommentsSection = ({ title, items, getArtistLinks }) => {
	if (items.length === 0) return null;

	return (
		<section>
			<h2 className="text-2xl font-semibold mb-6">{title}</h2>
			<div className="space-y-8">
				{items.map((item, index) => (
					<CommentItem
						key={index}
						item={item}
						getArtistLinks={getArtistLinks}
					/>
				))}
			</div>
		</section>
	);
};

export default function YggdrasilComments() {
	const getArtistLinks = (artistId) => {
		if (!artistId || !collaboratorsData[artistId]) return null;
		return collaboratorsData[artistId].links || null;
	};

	const sections = [
		{
			title: 'FROM YGGDRASIL STAFF',
			items: commentsData.filter(
				(item) => !item.section || item.section.includes('YGGDRASIL')
			),
		},
		{
			title: 'Other Artists',
			items: commentsData.filter(
				(item) => item.section && item.section.includes('OTHER')
			),
		},
		{
			title: 'Special Thanks',
			items: commentsData.filter(
				(item) =>
					item.section && item.section.includes('SPECIAL THANKS')
			),
		},
		{
			title: 'Final Comment',
			items: commentsData.filter(
				(item) => item.section && item.section.includes('FINAL COMMENT')
			),
		},
	];

	return (
		<>
			<Head>
				<title>YGGDRASIL - Artist Comments | KodamaSounds</title>
			</Head>

			<div
				className={`${sourceSerif.variable} ${sourceSerif.className} min-h-screen`}
				style={{
					backgroundColor: '#F5F5DC',
					color: '#5C4033',
				}}
			>
				<div className="container pt-8 px-6 mx-auto max-w-4xl pb-12">
					<div className="mb-8">
						<Link
							href="/"
							className="text-[#5C4033] hover:text-[#8B6F47] transition-colors underline"
						>
							← Home
						</Link>
					</div>

					<h1 className="text-4xl font-bold mb-2">YGGDRASIL</h1>
					<p className="text-lg opacity-80 mb-12">
						5th Anniversary Artist Comments
					</p>

					<div className="space-y-12">
						{sections.map((section) => (
							<CommentsSection
								key={section.title}
								title={section.title}
								items={section.items}
								getArtistLinks={getArtistLinks}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
