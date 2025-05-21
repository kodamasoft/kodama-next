import projectsJSON from '/public/assets/projects/projects.json';
import useTranslation from 'next-translate/useTranslation';

export default function ProjectInfo({ slug, children }) {
	const { t, lang } = useTranslation();
	let project = {};
	let category = {};

	// iterate trough the array of sections in the projectsJSON file
	for (let i = 0; i < projectsJSON.length; i++) {
		// if in the projects array, we find a project with the same slug as the one we are looking for, return the project
		for (let j = 0; j < projectsJSON[i].projects.length; j++) {
			// if the project has the same slug as the one we are looking for, return the project
			if (projectsJSON[i].projects[j].slug === slug) {
				category = projectsJSON[i];
				project = projectsJSON[i].projects[j];
				break;
			}
		}
	}

	return (
		<p>
			<strong>{t('projects:project-info.album-title')}:</strong>{' '}
			{t('projects:' + category.cat_slug + '.' + project.slug + '.title')}
			<br />
			<strong>{t('projects:project-info.status')}:</strong>{' '}
			{t('projects:common.statuses.' + project.status)}
			<br />
			<strong>
				{t('projects:project-info.approximate-completion')}:
			</strong>{' '}
			{project.percentage ? project.percentage : ' ??? '}%<br />
			<strong>{t('projects:project-info.current-duration')}:</strong>{' '}
			{project.duration ? project.duration : ' ??? '}
			<br />
			<strong>
				{t('projects:project-info.current-number-of-finished-tracks')}:
			</strong>{' '}
			{project.finished_tracks ? project.finished_tracks : ' ??? '}
			<br />
			<strong>
				{t('projects:project-info.mastering-engineer')}:
			</strong>{' '}
			{project.mastering && project.mastering.engineer
				? project.mastering.engineer
				: ' ??? '}
			<br />
			<strong>{t('projects:project-info.mastering-status')}:</strong>{' '}
			{project.mastering && project.mastering.status
				? t('projects:common.statuses.' + project.mastering.status)
				: ' ??? '}
			<br />
			<strong>
				{t('projects:project-info.artwork-commission')}:
			</strong>{' '}
			{project.artwork_comission
				? t('projects:common.statuses.' + project.artwork_comission)
				: ' ??? '}
			<br />
		</p>
	);
}
