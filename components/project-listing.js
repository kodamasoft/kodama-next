import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useState, useEffect } from 'react';

export default function ProjectListing({ project, category, bgImage }) {
	const { t, lang } = useTranslation();

	const [status, setStatus] = useState('');
	const [deadline, setDeadline] = useState('');
	const [releaseDate, setReleaseDate] = useState('');

	useEffect(() => {
		setStatus(t('projects:common.statuses.' + project.status));

		if (project.deadline)
			setDeadline(
				t(
					new Date(project.deadline).toLocaleDateString(lang, {
						year: 'numeric',
						month: 'short',
						day: 'numeric',
					})
				)
			);
	}, [project, t, lang]);

	useEffect(() => {
		setStatus(t('projects:common.statuses.' + project.status));

		if (project.releaseDate)
			setReleaseDate(
				t(
					new Date(project.releaseDate).toLocaleDateString(lang, {
						year: 'numeric',
						month: 'short',
						day: 'numeric',
					})
				)
			);
	}, [project, t, lang]);

	function statusBadgeStyles(status) {
		let styles =
			'inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded-full text-base';

		switch (status) {
			case 'gen-released':
				styles += ' bg-blue-500/70';
				break;
			case 'gen-open':
				styles += ' bg-green-600/70';
				break;
			case 'gen-cancelled':
				styles += ' bg-red-500/70';
				break;
			case 'gen-delayed':
				styles += ' bg-red-200/70';
				break;
			case 'gen-closed':
				styles += ' bg-orange-500/70';
				break;
			case 'about-to-release':
				styles += ' bg-orange-500/70';
				break;
			case 'gen-unreleased':
				styles += ' bg-yellow-500/70';
				break;
			case 'gen-announced':
				styles += ' bg-teal-500/70';
				break;
			case 'illust-notstarted':
				styles += ' bg-red-500/70';
				break;
			case 'illust-inprogress':
				styles += ' bg-orange-500/70';
				break;
			case 'illust-design':
				styles += ' bg-yellow-500/70';
				break;
			case 'illust-layout':
				styles += ' bg-teal-500/70';
				break;
			case 'illust-complete-digital':
				styles += ' bg-blue-500/70';
				break;
			case 'illust-complete-physical':
				styles += ' bg-blue-500/70';
				break;
			case 'master-notstarted':
				styles += ' bg-red-500/70';
				break;
			case 'master-inprogress':
				styles += ' bg-orange-500/70';
				break;
			case 'master-complete':
				styles += ' bg-blue-500/70';
				break;
			default:
				styles += ' bg-gray-500/70';
				break;
		}
		return styles;
	}

	return (
		<div
			className={
				'flex flex-col text-center no-underline not-prose md:max-w-2xl mx-auto content-center rounded-xl my-5 transition relative hover:-translate-y-1'
			}
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundColor: project.color + '44',
			}}
		>
			<Link
				href={
					project.status === 'gen-released'
						? `/releases/${project.slug}`
						: `/projects/${project.slug}`
				}
				passHref
				key={project.slug}
				className={
					'flex flex-col text-center no-underline text-white not-prose md:max-w-2xl px-10 py-5 content-center rounded-xl transition relative'
				}
				style={{
					backdropFilter: 'blur(3px) brightness(0.6)',
				}}
			>
				<h3 className="text-2xl font-semibold underline mt-0">
					{t(
						'projects:' +
							category.cat_slug +
							'.' +
							project.slug +
							'.title'
					)}
				</h3>
				<p className="font-normal text-base py-2">
					{t('projects:common.themes')}:{' '}
					{t(
						'projects:' +
							category.cat_slug +
							'.' +
							project.slug +
							'.themes'
					)}
				</p>

				<div className="flex-col flex">
					<div className="flex flex-row justify-evenly gap-2">
						<div className="p-2 flex-1/3">
							<p className="font-bold text-xl">
								{t('projects:project-info.current-duration')}
							</p>
							<p className="text-green-400 text-xl font-bold">
								{project.duration}
							</p>
						</div>

						<div className="p-2 flex-1/3">
							<p className="font-bold text-xl">
								{t('projects:project-info.status')}
							</p>
							<span className={statusBadgeStyles(project.status)}>
								{status}
							</span>{' '}
						</div>

						<div className="p-2 flex-1/3">
							<p className="font-bold text-xl">
								{t(
									'projects:project-info.current-number-of-finished-tracks'
								)}
							</p>
							<p className="text-red-400 text-xl font-bold">
								{project.finished_tracks}
							</p>
						</div>
					</div>

					<div className="flex flex-row justify-evenly gap-2">
						<div className="p-2 flex-1/3">
							<p className="font-bold text-xl">
								{t('projects:project-info.artwork-commission')}
							</p>
							<span className={statusBadgeStyles(project.status)}>
								{t(
									'projects:common.statuses.' +
										project.artwork_commission
								)}
							</span>{' '}
						</div>
						<div className="p-2 flex-1/3">
							<p className="font-bold text-xl">
								{t('projects:project-info.mastering-status')}
							</p>
							<span className={statusBadgeStyles(project.status)}>
								{t(
									'projects:common.statuses.' +
										project.mastering.status
								)}
							</span>{' '}
						</div>
					</div>

					<div className="flex flex-row justify-evenly gap-2">
						{deadline && (
							<div className="p-2">
								<p className="font-bold text-xl">
									Deadline :{' '}
									<span className="text-yellow-200">
										{deadline}
									</span>
								</p>
							</div>
						)}
						{releaseDate && (
							<div className="p-2">
								<p className="font-bold text-xl">
									Release date :{' '}
									<span className="text-blue-500">
										{releaseDate}
									</span>
								</p>
							</div>
						)}
					</div>
				</div>
			</Link>
		</div>
	);
}
