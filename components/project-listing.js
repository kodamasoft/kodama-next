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
			case 'completed':
				styles += ' bg-purple-500/70';
				break;
			case 'ongoing':
				styles += ' bg-green-500/70';
				break;
			case 'accepting':
				styles += ' bg-yellow-600/70';
				break;
			case 'cancelled':
				styles += ' bg-red-500/70';
				break;
			case 'about-to-release':
				styles += ' bg-orange-500/70';
				break;
			default:
				styles += ' bg-gray-500/70';
				break;
		}
		return styles;
	}

	return (
		<div 
			className={'flex flex-col text-center no-underline not-prose md:max-w-2xl mx-auto content-center rounded-xl my-5 transition relative hover:-translate-y-1' }
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundColor: project.color + '44',
			}}>
			<Link
				href={'/projects/' + project.slug}
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

				<div className='flex-col flex'>
					<div className='flex flex-row justify-evenly gap-2'>
						<div className='p-2'>
							<p>
								Project duration
							</p>
							<p>{project.duration}</p>
						</div>

						<div className='p-2'>
							<p>
								Project status
							</p>
							<span className={statusBadgeStyles(project.status)}>
								{status}
							</span>{' '}
						</div>

						<div className='p-2'>
							<p>
								Finished tracks
							</p>
							<p>{project.finished_tracks}</p>
						</div>
					</div>

					<div className='flex flex-row justify-evenly gap-2'>
						<div className='p-2'>
							<p>
								Illust/design status
							</p>
							<p>{project.artwork_comission}</p>
						</div>
						<div className='p-2'>
							<p>
								Mastering status
							</p>
							<p>{project.mastering.status}</p>
						</div>
					</div>

					{deadline && (
						<div className='p-2'>
						<p>
							Deadline : {deadline}
						</p>
						</div>
					)}
					{releaseDate && (
						<div className='p-2'>
						<p>
							Release date : {releaseDate}
						</p>
						</div>
					)}
				</div>
			</Link>
		</div>
	);
}
