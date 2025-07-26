import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';

import Container from '../components/container';
import Header from '../components/header';
import ProseContainer from '../components/prose-container';
import CtaButton from '../components/project/cta-button';

import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import ProjectListing from '../components/project-listing';
import projectsJson from '/public/assets/projects/projects.json';

import { WEBSITE_NAME } from '../lib/constants';

export default function Projects({ filteredPosts }) {
	const { t, lang } = useTranslation();

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
							<h2>{t('common:projects.presentation.title')}</h2>
							<p>
								{t('common:projects.presentation.description')}
							</p>
							<CtaButton
								link="/projects/faq"
								icon="book"
								className="mt-4 mx-auto"
							>
								<span>{t('projects:faq-cta')}</span>
							</CtaButton>

							<div>
								{projectsJson.map(function (category) {
									return (
										<>
											<h2>
												{t(
													'projects:' +
														category.cat_slug +
														'.name'
												)}
											</h2>
											<p>
												{t(
													'projects:' +
														category.cat_slug +
														'.desc'
												)}
											</p>

											{category.projects.map(
												function (project) {
													return (
														<ProjectListing
															project={project}
															category={category}
															key={project.slug}
														/>
													);
												}
											)}
										</>
									);
								})}
							</div>

							<h2>{t('common:projects.goals.title')}</h2>
							<ul>
								<li>
									{t('common:projects.goals.points.1.title')}
								</li>
							</ul>
							<p>
								{t(
									'common:projects.goals.points.1.description'
								)}
							</p>
							<ul>
								<li>
									{t('common:projects.goals.points.2.title')}
								</li>
							</ul>
							<p>
								{t(
									'common:projects.goals.points.2.description'
								)}
							</p>
							<ul>
								<li>
									{t('common:projects.goals.points.3.title')}
								</li>
							</ul>
							<p>
								{t(
									'common:projects.goals.points.3.description'
								)}
							</p>
							<ul>
								<li>
									{t('common:projects.goals.points.4.title')}
								</li>
							</ul>
							<p>
								{t(
									'common:projects.goals.points.4.description'
								)}
							</p>
						</ProseContainer>
					</div>
				</Container>
			</Layout>
		</>
	);
}
