import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { lmFontVars } from './la-mulana-fonts';

const PS2P = "var(--font-press-start-2p, 'Press Start 2P', monospace)"; // eslint-disable-line quotes
const STM =
	"var(--font-share-tech-mono, 'Share Tech Mono', 'Courier New', monospace)"; // eslint-disable-line quotes

export default function LaMulanaDescription({
	cover,
	title,
	circle,
	specification,
	release_date,
	catalog,
	price,
	store,
}) {
	const { locale } = useRouter();

	const getLocalizedTitle = (t) => {
		if (typeof t === 'object' && t !== null)
			return t[locale] || t.en || t.jp || Object.values(t)[0];
		return t;
	};

	const storeLinks = store
		? Object.entries(store).map(([key, item]) => ({ key, ...item }))
		: [];

	const metaRows = [
		{ label: 'Title', value: getLocalizedTitle(title) },
		{
			label: 'Circle',
			value: (
				<Link
					href={circle.link}
					style={{ color: '#e8b840', textDecoration: 'none' }}
				>
					{circle.name}
				</Link>
			),
		},
		{ label: 'Specification', value: specification },
		{ label: 'Release Date', value: release_date },
		{ label: 'Catalog', value: catalog },
		{ label: 'Price', value: price },
		{
			label: 'Store',
			value: (
				<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
					{storeLinks.map(({ key, name, link }) => (
						<li key={key} style={{ marginBottom: '0.2rem' }}>
							<span
								style={{
									color: '#c8a060',
									opacity: 0.7,
									marginRight: '0.3em',
								}}
							>
								&gt;
							</span>
							{link ? (
								<a
									href={link}
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: '#e8b840',
										textDecoration: 'none',
									}}
								>
									{name}
								</a>
							) : (
								<span style={{ color: '#d4c4a0' }}>{name}</span>
							)}
						</li>
					))}
				</ul>
			),
		},
	];

	return (
		<section
			className={lmFontVars}
			style={{
				background:
					'radial-gradient(ellipse at 60% 40%, #5a3e1b 0%, #3a2810 45%, #1e1508 100%)',
				padding: '4rem 3rem 3rem',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* CRT scanlines overlay */}
			<div
				aria-hidden="true"
				style={{
					position: 'absolute',
					inset: 0,
					backgroundImage:
						'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
					pointerEvents: 'none',
					zIndex: 0,
				}}
			/>

			<div
				className="lm-desc-grid"
				style={{
					maxWidth: 960,
					margin: '0 auto',
					display: 'grid',
					gridTemplateColumns: 'min(320px, 100%) 1fr',
					gap: '3.5rem',
					alignItems: 'start',
					position: 'relative',
					zIndex: 1,
				}}
			>
				{/* Cover art */}
				<div style={{ position: 'relative' }}>
					<Link
						href={cover}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={cover}
							alt={getLocalizedTitle(title) + ' cover art'}
							width={768}
							height={768}
							quality={100}
							priority
							style={{
								width: '100%',
								height: 'auto',
								display: 'block',
								boxShadow:
									'0 0 0 2px #7a5828, 0 0 0 4px #3a2810, 0 8px 32px rgba(0,0,0,0.7)',
							}}
						/>
					</Link>
					{/* Worn-edge vignette */}
					<div
						aria-hidden="true"
						style={{
							position: 'absolute',
							inset: 0,
							boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
							pointerEvents: 'none',
						}}
					/>
				</div>

				{/* Metadata */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						paddingTop: '0.25rem',
					}}
				>
					{metaRows.map(({ label, value }, i) => (
						<div
							key={label}
							style={{
								padding: '0.9rem 0',
								borderBottom: '1px solid rgba(160,120,64,0.25)',
								borderTop:
									i === 0
										? '1px solid rgba(160,120,64,0.25)'
										: undefined,
								display: 'flex',
								flexDirection: 'column',
								gap: '0.3rem',
							}}
						>
							<span
								style={{
									fontFamily: PS2P,
									fontSize: '0.44rem',
									letterSpacing: '0.2em',
									color: '#c8a060',
									textTransform: 'uppercase',
								}}
							>
								{label}
							</span>
							<span
								style={{
									fontFamily: STM,
									fontSize: '0.88rem',
									color: '#d4c4a0',
									lineHeight: 1.5,
								}}
							>
								{value}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
