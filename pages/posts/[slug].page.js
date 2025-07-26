import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

import Layout from '../../components/layout';
import Header from '../../components/headerBlogPosts';
import Container from '../../components/container';
import PostHeader from '../../components/post-header';
import PostBody from '../../components/post-body';

import { getPostBySlug, getAllPosts } from '../../lib/api';
import { WEBSITE_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Post({ post, preview }) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	console.log(post.slug);
	console.log(post.twin.slug);

	return (
		<Layout preview={preview}>
			<Header slug={post.slug} twinSlug={post.twin.slug} />
			{router.isFallback ? (
				<p>Loading…</p>
			) : (
				<Container className="container pt-10 px-6 mx-auto">
					<article>
						<Head>
							<title>
								{post.title} | {WEBSITE_NAME}
							</title>
						</Head>
						<PostHeader
							title={post.title}
							date={post.date}
							author={post.author}
							twin={post.twin}
						/>
						<PostBody content={post.content} />
					</article>
				</Container>
			)}
		</Layout>
	);
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'author',
		'locale',
		'content',
		'twin',
	]);
	const content = await markdownToHtml(post.content || '');

	let twinSlug = null;
	if (post.twin) {
		twinSlug = getPostBySlug(post.twin, ['title', 'slug', 'locale']);
	}

	return {
		props: {
			post: {
				...post,
				content,
				twin: twinSlug,
			},
		},
	};
}

export async function getStaticPaths({ locales, locale }) {
	//cf. https://stackoverflow.com/questions/68234001/internationalizaton-of-next-js-website-through-subpath-not-working-on-sub-direct

	const posts = getAllPosts(['slug']);

	const path = (locale) =>
		posts.map((post) => ({
			params: {
				slug: post.slug,
			},
			locale,
		}));

	const paths = locales.map((locale) => path(locale)).flat();

	return {
		paths: paths,
		fallback: false,
	};
}
