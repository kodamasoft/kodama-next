import { lmFontVars } from './la-mulana-fonts';

const PS2P = "var(--font-press-start-2p, 'Press Start 2P', monospace)";

export default function LaMulanaCallToAction() {
	return (
		<div
			className={lmFontVars}
			style={{
				background: '#252525',
				borderTop: '1px solid #333',
				borderBottom: '1px solid #111',
				textAlign: 'center',
				padding: '1rem 2rem',
			}}
		>
			<span
				style={{
					fontFamily: PS2P,
					fontSize: '0.6rem',
					letterSpacing: '0.25em',
					color: '#888',
					textTransform: 'uppercase',
				}}
			>
				Available June 27th
			</span>
		</div>
	);
}
