import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import ReleaseNav from '../release-nav';

const LAYERS = [
	{
		key: 'bg',
		src: '/assets/discography/headers/KSEM-0001/bg.png',
		alt: 'Background',
		priority: true,
		fit: 'contain',
	},
	{
		key: 'lighting',
		src: '/assets/discography/headers/KSEM-0001/lighting.png',
		alt: '',
		priority: true,
		fit: 'contain',
	},
	{
		key: 'char-2',
		src: '/assets/discography/headers/KSEM-0001/char-2.png',
		alt: 'Character 2',
		priority: false,
		fit: 'contain',
	},
	{
		key: 'char-3',
		src: '/assets/discography/headers/KSEM-0001/char-3.png',
		alt: 'Character 3',
		priority: false,
		fit: 'contain',
	},
	{
		key: 'char-1',
		src: '/assets/discography/headers/KSEM-0001/char-1.png',
		alt: 'Character 1',
		priority: false,
		fit: 'contain',
	},
	{
		key: 'main',
		src: '/assets/discography/headers/KSEM-0001/main.png',
		alt: 'Main character',
		priority: false,
		fit: 'contain',
	},
	{
		key: 'subtitle-bg',
		src: '/assets/discography/headers/KSEM-0001/subtitle-bg.png',
		alt: 'Subtitle background',
		priority: false,
		fit: 'contain',
	},
	{
		key: 'subtitle-staff',
		src: '/assets/discography/headers/KSEM-0001/subtitle-notes.png',
		alt: 'Subtitle background',
		priority: false,
		fit: 'contain',
	},
	{
		key: 'subtitle-text',
		src: '/assets/discography/headers/KSEM-0001/subtitle-text.png',
		alt: 'Subtitle text',
		priority: false,
		fit: 'contain',
	},
	{
		key: 'logo',
		src: '/assets/discography/headers/KSEM-0001/logo.png',
		alt: 'Logo',
		priority: false,
		fit: 'contain',
	},
];

export default function LaMulanaHead({ slug, sc_track_id, color }) {
	const { t } = useTranslation('release');
	const coverRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const cover = coverRef.current;
		if (!cover) return;

		const images = Array.from(cover.querySelectorAll('img'));
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.25 }
		);

		const promises = images.map((img) => {
			if (img.complete && img.naturalWidth > 0) return Promise.resolve();
			return new Promise((resolve) => {
				img.addEventListener('load', resolve, { once: true });
				img.addEventListener('error', resolve, { once: true });
			});
		});

		Promise.all(promises).then(() => observer.observe(cover));

		return () => observer.disconnect();
	}, []);

	return (
		<>
			{/* ── ANIMATED ALBUM COVER ── */}
			<div
				ref={coverRef}
				className={`la-mulana-cover relative w-full overflow-hidden${isVisible ? ' is-visible' : ''}`}
				style={{ height: '100svh' }}
			>
				{/* Layers */}
				{LAYERS.map(({ key, src, alt, priority, fit }) => (
					<div
						key={key}
						className={`la-mulana-cover-layer la-mulana-cover-layer-${key}`}
						aria-hidden={alt === '' ? true : undefined}
					>
						<Image
							src={src}
							alt={alt}
							fill
							priority={priority}
							className={
								fit === 'contain'
									? 'object-contain'
									: 'object-cover'
							}
							sizes="100vw"
						/>
					</div>
				))}

				{/* Navigation — overlaid */}
				<div className="absolute top-0 inset-x-0 z-30 pt-4">
					<ReleaseNav
						extraLogo={
							<Link
								href="https://bsky.app/profile/engamusica.bsky.social"
								target="_blank"
							>
								<Image
									src="/assets/enga-musica-logo.png"
									width={70}
									height={70}
									alt="Enga Musica"
									quality={100}
								/>
							</Link>
						}
					/>
				</div>

				{/* Top fade */}
				<div
					className="absolute top-0 inset-x-0 z-20 pointer-events-none"
					style={{
						height: '120px',
						background:
							'linear-gradient(to bottom, var(--background-color) 0%, transparent 100%)',
					}}
				/>
				{/* Bottom fade */}
				<div
					className="absolute bottom-0 inset-x-0 z-20 pointer-events-none"
					style={{
						height: '220px',
						background:
							'linear-gradient(to bottom, transparent 0%, var(--background-color) 100%)',
					}}
				/>
			</div>

			{/* ── DESCRIPTION + SOUNDCLOUD ── */}
			<div className="container mx-auto">
				<div className="my-12 max-w-2xl mx-auto text-center px-4">
					<p
						className="text-sm leading-relaxed italic whitespace-pre-line"
						style={{ fontFamily: 'var(--font-lora), serif' }}
					>
						{t(slug + '.desc')}
					</p>
				</div>

				{sc_track_id && (
					<div className="mb-4">
						<iframe
							width="100%"
							height="166"
							scrolling="no"
							frameBorder="no"
							allow="autoplay"
							src={
								'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' +
								sc_track_id +
								'&color=%23' +
								color +
								'&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
							}
						/>
					</div>
				)}
			</div>
		</>
	);
}
