import Head from 'next/head';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { getTheme } from './themes';

import { Noto_Sans_JP } from 'next/font/google';

const noto = Noto_Sans_JP({
	subsets: ['latin'],
	weight: ['400', '900'],
	variable: '--font-noto',
});

export default function ReleaseLayout({ release }) {
	const { t } = useTranslation('release');
	const { locale } = useRouter();

	// Get theme from release or default to 'default'
	const themeName = release.theme || 'default';
	const theme = getTheme(themeName);

	// Get theme components
	const ReleaseHead = theme.components.ReleaseHead;
	const ReleaseDescription = theme.components.ReleaseDescription;
	const ReleaseCallToAction = theme.components.ReleaseCallToAction;
	const ReleaseTracklist = theme.components.ReleaseTracklist;
	const ReleaseYouTubeEmbed = theme.components.ReleaseYouTubeEmbed;
	const ReleaseCredits = theme.components.ReleaseCredits;
	const ReleaseFooter = theme.components.ReleaseFooter;

	// Handle localized title with fallback
	const getLocalizedTitle = (title) => {
		if (typeof title === 'object' && title !== null) {
			return (
				title[locale] || title.en || title.jp || Object.values(title)[0]
			);
		}
		return title;
	};
	const backgroundColor =
		release.background && release.background.color
			? release.background.color
			: '232426';

	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicons/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicons/favicon-16x16.png"
				/>
				<title>
					{getLocalizedTitle(release.title) + ' - KodamaSounds'}
				</title>
				<meta
					property="og:title"
					content={
						getLocalizedTitle(release.title) + ' - KodamaSounds'
					}
				/>
				<meta name="theme-color" content={'#' + release.color} />
				<meta property="og:image" content={release.cover} />
				<meta
					property="og:description"
					content={t(release.slug + '.desc')}
				/>
				<meta property="og:type" content="website" />
				<style
					dangerouslySetInnerHTML={{
						__html: `
						:root {
							--release-color: #${release.color};
							--background-color: #${backgroundColor};
						}
					`,
					}}
				/>
			</Head>
			<div
				className={`${noto.variable} font-release min-h-screen pb-1 bg-cover bg-center`}
				style={{
					color: `#${release.background?.text_color || 'white'}`,
					backgroundColor: `#${backgroundColor}`,
					backgroundImage: release.background?.image
						? `url(${release.background.image})`
						: 'none',
				}}
			>
				<ReleaseHead
					slug={release.slug}
					title={release.title}
					logo={release.logo}
					header={release.header}
					description={release.description}
					sc_track_id={release.soundcloud_track_id}
					color={release.color}
				/>
				<ReleaseDescription
					cover={release.cover}
					title={release.title}
					circle={release.circle}
					specification={release.specification}
					release_date={release.release_date}
					catalog={release.catalog}
					price={release.price}
					store={release.store}
					booth={release.booth}
				/>
				<ReleaseCallToAction store={release.store} />
				<ReleaseTracklist
					tracklist={release.tracklist}
					suppressHydrationWarning={true}
				/>
				<ReleaseYouTubeEmbed youtube={release.youtube_id} />
				<ReleaseCredits credits={release.credits} />
				<ReleaseFooter
					slug={release.slug}
					footer_string={release.footer}
					title={release.title}
				/>
			</div>
		</>
	);
}
