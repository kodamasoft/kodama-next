import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import ReleaseNav from './release-nav';

// `header.blur` (px) and `header.brightness` (0–1) soften the header art
// behind the logo. Inline because Tailwind cannot generate classes built from
// runtime values.
function getHeaderFilter(header) {
	if (header.blur == null && header.brightness == null) {
		return undefined;
	}
	return {
		filter: `blur(${header.blur ?? 0}px) brightness(${header.brightness ?? 1})`,
	};
}

export default function ReleaseHead({
	slug,
	title,
	logo,
	header,
	sc_track_id,
	color,
	layout = {},
	hidden = new Set(),
}) {
	// `layout.logo_height` (px) resizes the box the logo is fitted into.
	const logoBox = layout.logo_height
		? { height: `${layout.logo_height}px` }
		: undefined;

	const { t } = useTranslation('release');
	const { locale } = useRouter();

	// Handle localized title with fallback
	const getLocalizedTitle = (title) => {
		if (typeof title === 'object' && title !== null) {
			return (
				title[locale] || title.en || title.jp || Object.values(title)[0]
			);
		}
		return title;
	};

	return (
		<>
			<div className={header ? 'mx-auto' : 'container mx-auto'}>
				{header ? (
					<div className="w-full h-full relative overflow-hidden">
						{header.image || header.video ? (
							<div
								className={`absolute w-full h-full ${header.fade === false ? '' : 'mask-b-from-80%'}`}
							>
								{header.image && (
									<Image
										alt={getLocalizedTitle(title)}
										src={header.image}
										fill={true}
										priority={true}
										quality={90}
										className="z-2 object-cover scale-110"
										style={getHeaderFilter(header)}
									/>
								)}
								{header.video && (
									//  div with fadeout mask on the bottom
									<video
										className="w-full h-full object-cover object-center absolute top-0 left-0 z-3 scale-110"
										autoPlay
										loop
										muted
										plays
										src={header.video}
									></video>
								)}
							</div>
						) : (
							<></>
						)}

						<div className="md:container relative mx-auto z-10">
							<ReleaseNav className="bg-[#232426] md:bg-transparent" />
							<div
								className="relative w-[800px] h-[500px] max-w-full mx-auto"
								style={logoBox}
							>
								<Image
									src={logo}
									height="340"
									width="1000"
									alt="Logo"
									priority={true}
									className="object-contain object-center p-6 md:relative -top-14 w-[1000px] h-[500px] max-w-full mx-auto drop-shadow-[0_0_5px_rgba(0,0,0,0.75)]"
									quality={100}
									style={logoBox}
								/>
							</div>
						</div>
					</div>
				) : (
					<>
						<ReleaseNav />
						<div
							className="relative w-[800px] h-[500px] max-w-full mx-auto"
							style={logoBox}
						>
							<Image
								src={logo}
								height="340"
								width="1000"
								alt="Logo"
								priority={true}
								className="object-contain object-center p-6 md:relative -top-14 w-[1000px] h-[500px] max-w-full mx-auto"
								quality={100}
								style={logoBox}
							/>
						</div>
					</>
				)}
			</div>

			<div className="container mx-auto">
				{!hidden.has('blurb') && (
					<div className="my-16">
						{slug === 'la-mulana' ? (
							<p className="text-center text-sm font-jennerikExtraBold my-4">
								{t(slug + '.desc')}
							</p>
						) : (
							<p className="text-center text-sm my-4">
								{t(slug + '.desc')}
							</p>
						)}
					</div>
				)}

				{sc_track_id && !hidden.has('soundcloud') && (
					<div>
						<iframe
							width="100%"
							height="166"
							scrolling="no"
							frameBorder="no"
							allow="autoplay"
							src={
								'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' +
								sc_track_id +
								'&color=%23' +
								color +
								'&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
							}
						></iframe>
					</div>
				)}
			</div>
		</>
	);
}
