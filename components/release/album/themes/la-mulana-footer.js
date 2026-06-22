import Link from 'next/link';
import { useRouter } from 'next/router';
import { lmFontVars } from './la-mulana-fonts';

const STM =
	'var(--font-share-tech-mono, \'Share Tech Mono\', \'Courier New\', monospace)';
const PS2P = "var(--font-press-start-2p, 'Press Start 2P', monospace)";

const LM = {
	black: '#000000',
	white: '#d4d4d4',
	amber: '#cccc77',
	dkgreen: '#1c5c1c',
};

export default function LaMulanaFooter({ title, slug, footer_string }) {
	const { locale } = useRouter();

	const getLocalized = (val) => {
		if (typeof val === 'object' && val !== null)
			return val[locale] || val.en || val.jp || Object.values(val)[0];
		return val;
	};

	return (
		<footer
			className={lmFontVars}
			style={{
				background: LM.black,
				borderTop: `1px solid ${LM.dkgreen}`,
				padding: '2rem 2.5rem',
				display: 'flex',
				alignItems: 'flex-end',
				justifyContent: 'space-between',
				gap: '2rem',
				flexWrap: 'wrap',
			}}
		>
			<div
				style={{
					fontFamily: STM,
					fontSize: '0.65rem',
					color: LM.white,
					opacity: 0.5,
					lineHeight: 1.9,
					letterSpacing: '0.04em',
				}}
			>
				<Link
					href={'/releases/' + slug}
					style={{
						display: 'block',
						fontFamily: STM,
						fontSize: '0.72rem',
						color: LM.amber,
						opacity: 1,
						letterSpacing: '0.08em',
						marginBottom: '0.4rem',
						textDecoration: 'none',
					}}
				>
					{getLocalized(title)}
				</Link>
				&copy; 2026 KodamaSounds &amp; Enga Musica. All rights reserved.
				<br />
				LA-MULANA &copy; NIGORO. LA-MULANA is a trademark of NIGORO.
				{footer_string && (
					<p
						style={{
							marginTop: '1rem',
							maxWidth: '42rem',
							fontSize: '0.6rem',
						}}
					>
						{getLocalized(footer_string)}
					</p>
				)}
			</div>

			<div
				style={{
					fontFamily: STM,
					fontSize: '0.6rem',
					color: LM.white,
					opacity: 0.35,
					letterSpacing: '0.06em',
					textAlign: 'right',
					whiteSpace: 'nowrap',
				}}
			>
				Design inspired by{' '}
				<Link
					href="https://sanographix.github.io/tokusetsu3/"
					target="_blank"
					rel="noopener noreferrer"
					style={{
						color: 'inherit',
						textDecoration: 'none',
						borderBottom: '1px solid rgba(212,212,212,0.2)',
					}}
				>
					SANOGRAPHIX.NET
				</Link>
			</div>
		</footer>
	);
}
