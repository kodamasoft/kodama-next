import ProseContainer from '../components/prose-container';
import PostPreview from '../components/post-preview';
import useTranslation from 'next-translate/useTranslation';

export default function MoreStories({ posts }) {
	const { t } = useTranslation('common');

	return (
		<ProseContainer className="mt-7">
			<h2>{t('home.blog_header')}</h2>

			<div className="grid md:grid-cols-2 gap-4 not-prose">
				{posts.map((post) => (
					<PostPreview
						key={post.slug}
						title={post.title}
						date={post.date}
						author={post.author}
						slug={post.slug}
					/>
				))}
			</div>
		</ProseContainer>
	);
}
