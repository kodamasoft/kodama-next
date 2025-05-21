import Layout from '../components/layout';
import Head from 'next/head';
import Container from '../components/container';
import Header from '../components/header';
import ProseContainer from '../components/prose-container';
import MoreStories from '../components/more-stories';
import Trans from 'next-translate/Trans';

import Link from 'next/link';
import Image from 'next/image';

import { getAllPosts } from '../lib/api';
import { WEBSITE_NAME } from '../lib/constants';

import KodamaSoftMascot from '../public/assets/kodamasoft.png';
import KodamaSoundsMascot from '../public/assets/kodamasounds.png';

import screen1 from '../public/assets/games/kodamacomet/screen1.png';
import screen2 from '../public/assets/games/kodamacomet/screen2.png';
import screen3 from '../public/assets/games/kodamacomet/screen3.png';
import screen4 from '../public/assets/games/kodamacomet/screen4.png';

export default function Index({ filteredPosts }) {
	return (
		<>
			<Layout>
				<Head>
					<title>{WEBSITE_NAME}</title>
				</Head>

				<Container>
					<Header />

					<div className="container pt-10 px-6 mx-auto">
						<ProseContainer>
							<p>
								<Trans
									i18nKey="common:home.description"
									components={{
										strong: <strong />,
										a: <Link href="/discord" />,
									}}
								/>
							</p>
						</ProseContainer>

						<div className="md:grid md:grid-cols-2 md:divide-x max-w-5xl mx-auto mt-10 divide-white/20">
							<div className="prose md:prose-md prose-invert md:px-4 pb-4 md:pb-0 prose-h3:font-normal prose-h3:italic prose-h2:text-3xl md:prose-h2:text-4xl">
								<h2 className="text-center mb-2">
									<Trans i18nKey="common:home.soft.title" />
								</h2>
								<h3 className="opacity-60 text-center">
									<Trans i18nKey="common:home.soft.lead" />
								</h3>
								<Image
									src={KodamaSoftMascot}
									alt="KodamaSoft Mascot"
									style={{
										maxHeight: '350px',
										margin: 'auto',
										height: '100%',
										width: 'auto',
									}}
								/>
								<p>
									<Trans i18nKey="common:home.soft.description" />
								</p>
								<div className="grid grid-cols-2 gap-4 mt-8 not-prose">
									<Image src={screen1} alt="Screenshot 1" />
									<Image src={screen2} alt="Screenshot 2" />
									<Image src={screen3} alt="Screenshot 3" />
									<Image src={screen4} alt="Screenshot 4" />
								</div>
							</div>
							<div className="prose md:prose-md prose-invert md:px-4 prose-h3:font-normal prose-h3:italic prose-h2:text-3xl md:prose-h2:text-4xl">
								<h2 className="text-center mb-2">
									<Trans i18nKey="common:home.sounds.title" />
								</h2>
								<h3 className="opacity-60 text-center">
									<Trans i18nKey="common:home.sounds.lead" />
								</h3>
								<Image
									src={KodamaSoundsMascot}
									alt="KodamaSounds Mascot"
									style={{
										maxHeight: '350px',
										margin: 'auto',
										height: '100%',
										width: 'auto',
									}}
								/>
								<p>
									<Trans i18nKey="common:home.sounds.description" />
								</p>
								<p>
									<Trans
										i18nKey="common:home.sounds.link"
										components={{
											a: <Link href="/discography" />,
										}}
									/>
								</p>
								<p>
									<Trans i18nKey="common:home.sounds.games" />
								</p>
							</div>
						</div>

						{filteredPosts.length > 0 && (
							<MoreStories posts={filteredPosts} />
						)}
					</div>
				</Container>
			</Layout>
		</>
	);
}

export async function getStaticProps({ locale }) {
	let allPosts = getAllPosts(
		['title', 'date', 'slug', 'author', 'locale', 'public'],
		locale
	);

	let filteredPosts = allPosts.filter((post) => post.public !== false);

	return {
		props: { filteredPosts },
	};
}
