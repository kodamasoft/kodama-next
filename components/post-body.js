import markdownStyles from './markdown-styles.module.css';
import ProseContainer from './prose-container';

export default function PostBody({ content }) {
	return (
		<ProseContainer>
			<div
				className={markdownStyles['markdown']}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</ProseContainer>
	);
}
