import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import ReleaseLayout from '../../components/release/album/layout';

import { getAllReleases, getReleaseBySlug } from '../../lib/api';

export default function Release({ release }) {
	const router = useRouter();
	if (!router.isFallback && !release?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return <ReleaseLayout release={release} />;
}

export async function getStaticProps({ params }) {
	const release = getReleaseBySlug(params.slug);

	return {
		props: {
			release: {
				...release,
			},
		},
	};
}

export async function getStaticPaths({ locales, locale }) {
	const releases = getAllReleases();

	const path = (locale) =>
		releases.map((post) => ({
			params: {
				slug: post.slug,
				locale,
			},
		}));

	const paths = locales.map((locale) => path(locale)).flat();

	return {
		paths: paths,
		fallback: 'blocking',
	};
}
