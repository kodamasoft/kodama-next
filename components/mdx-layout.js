import Head from 'next/head';

import Layout from './layout';
import Header from './header';
import ProseContainer from './prose-container';
import { WEBSITE_NAME } from '../lib/constants';

export default function ProjectLayout({ title, children }) {
	return (
		<Layout>
			<Head>
				<title>
					{title ? title + '-' + WEBSITE_NAME : WEBSITE_NAME}
				</title>
			</Head>
			<Header />
			<div className="container pt-10 px-6 mx-auto">
				<ProseContainer>{children}</ProseContainer>
			</div>
		</Layout>
	);
}
