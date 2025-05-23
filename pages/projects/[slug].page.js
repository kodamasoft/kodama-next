import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

import Layout from '../../components/layout';
import Header from '../../components/header';
import Container from '../../components/container';

import WrappableParagraph from '../../components/project/title-with-content';
import CtaButton from '../../components/project/cta-button';
import AlbumListing from '../../components/album-listing';
import ProjectInformation from '../../components/project-information';

import { getProjectBySlug, getProjectSlugs } from '../../lib/api';
import { WEBSITE_NAME } from '../../lib/constants';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import ProseContainer from '../../components/prose-container';

export default function Project({ project }) {
	const components = {
		WrappableParagraph,
		CtaButton,
		AlbumListing,
		ProjectInformation,
	};

	const router = useRouter();
	if (!router.isFallback && !project) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<Layout>
			<Header />
			{router.isFallback ? (
				<p>Loading…</p>
			) : (
				<Container className="container pt-10 px-6 mx-auto">
					<article>
						<Head>
							<title>{WEBSITE_NAME}</title>
						</Head>
						<ProseContainer>
							<MDXRemote {...project} components={components} />
						</ProseContainer>
					</article>
				</Container>
			)}
		</Layout>
	);
}

export async function getStaticProps({ params, locale }) {
	const project = getProjectBySlug(params.slug, locale);
	const content = await serialize(project);

	return {
		props: {
			project: content,
		},
	};
}

export async function getStaticPaths({ locales, locale }) {
	//cf. https://stackoverflow.com/questions/68234001/internationalizaton-of-next-js-website-through-subpath-not-working-on-sub-direct

	const projects = getProjectSlugs();
	const path = () =>
		projects.map((project) => ({
			params: {
				// remove the .mdx extension
				slug: project.replace(/\.mdx$/, '').replace(/\.jp$/, ''),
				// for the locale, if the file ends with .jp.mdx, then it's japanese, otherwise it's english
				locale: project.endsWith('.jp.mdx') ? 'jp' : 'en',
			},
		}));

	const paths = locales.reduce((acc, locale) => {
		return [...acc, ...path(locale)];
	}, []);

	return {
		paths: paths,
		fallback: 'blocking',
	};
}
