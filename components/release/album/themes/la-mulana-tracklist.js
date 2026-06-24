import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import LaMulanaTrack from './la-mulana-track';
import { lmFontVars } from './la-mulana-fonts';

const LM = {
	black: '#000000',
	cyan: '#74d7ee',
	white: '#d4d4d4',
	amber: '#cccc77',
	green: '#3eb849',
	dkgreen: '#1c5c1c',
};

const PS2P = "var(--font-press-start-2p, 'Press Start 2P', monospace)"; // eslint-disable-line quotes
const STM =
	"var(--font-share-tech-mono, 'Share Tech Mono', 'Courier New', monospace)"; // eslint-disable-line quotes

function TrackDialog({ title, artist, aboutText, onClose }) {
	const closeBtnRef = useRef(null);

	useEffect(() => {
		closeBtnRef.current?.focus();
	}, []);

	return (
		<div
			className="lm-overlay-enter"
			role="dialog"
			aria-modal="true"
			aria-labelledby="lm-dialog-title"
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose();
			}}
			style={{
				position: 'fixed',
				inset: 0,
				background: 'rgba(0,0,0,0.85)',
				zIndex: 1000,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '1.5rem',
			}}
		>
			<div
				className="lm-dialog-enter"
				style={{
					background: LM.black,
					border: `1px solid ${LM.green}`,
					maxWidth: 580,
					width: '100%',
					maxHeight: '85vh',
					display: 'flex',
					flexDirection: 'column',
					boxShadow: `0 0 0 1px ${LM.dkgreen}, 0 0 50px rgba(62,184,73,0.12)`,
				}}
			>
				{/* Header */}
				<div
					style={{
						padding: '14px 18px 12px',
						borderBottom: `1px solid ${LM.dkgreen}`,
						display: 'flex',
						alignItems: 'flex-start',
						justifyContent: 'space-between',
						gap: 12,
						flexShrink: 0,
					}}
				>
					<div>
						<div
							id="lm-dialog-title"
							style={{
								fontFamily: STM,
								fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
								color: LM.white,
								lineHeight: 1.4,
							}}
						>
							{title}
						</div>
						<div
							style={{
								fontFamily: PS2P,
								fontSize: '0.44rem',
								color: LM.amber,
								letterSpacing: '0.15em',
								textTransform: 'uppercase',
								marginTop: 4,
							}}
						>
							About this track — comment by{' '}
							<span style={{ color: LM.cyan }}>{artist}</span>
						</div>
					</div>
					<button
						ref={closeBtnRef}
						className="lm-modal-close"
						onClick={onClose}
						aria-label="Close"
						style={{
							background: 'none',
							border: 'none',
							color: LM.cyan,
							opacity: 0.6,
							cursor: 'pointer',
							fontSize: '1.2rem',
							lineHeight: 1,
							flexShrink: 0,
							padding: '2px 6px',
							fontFamily: 'monospace',
							transition: 'opacity 0.15s, color 0.15s',
						}}
					>
						✕
					</button>
				</div>

				{/* Scrollable body */}
				<div
					style={{
						overflowY: 'auto',
						padding: '1.25rem 1.5rem 1.5rem',
					}}
				>
					<p
						style={{
							fontFamily: STM,
							fontSize: '0.77rem',
							color: LM.white,
							lineHeight: 1.85,
							opacity: 0.9,
							margin: 0,
						}}
					>
						{aboutText}
					</p>
				</div>
			</div>
		</div>
	);
}

export default function LaMulanaTracklist({
	tracklist,
	bonus_tracklist,
	scene,
}) {
	const { locale } = useRouter();
	const [dialog, setDialog] = useState(null);

	const openDialog = (info) => setDialog(info);
	const closeDialog = () => setDialog(null);

	useEffect(() => {
		if (!dialog) return;
		const onKey = (e) => {
			if (e.key === 'Escape') closeDialog();
		};
		document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	}, [dialog]);

	const tracks = Object.entries(tracklist).sort(
		(a, b) => Number(a[0]) - Number(b[0])
	);
	const bonusTracks = bonus_tracklist
		? Object.entries(bonus_tracklist).sort(
				(a, b) => Number(a[0]) - Number(b[0])
			)
		: null;

	const tracklistContent = (
		<>
			{/* Section header */}
			<div
				style={{
					textAlign: 'center',
					padding: '3.3rem 1.65rem 1.65rem',
					position: 'relative',
					zIndex: 1,
				}}
			>
				<h2
					style={{
						fontFamily: PS2P,
						fontSize: 'clamp(0.55rem, 1.32vw, 0.77rem)',
						fontWeight: 400,
						letterSpacing: '0.2em',
						color: LM.amber,
						textTransform: 'uppercase',
						textShadow: `2px 2px 0 ${LM.black}, -1px 0 0 ${LM.black}`,
						margin: 0,
					}}
				>
					Tracklist
				</h2>
			</div>

			{/* Main tracks */}
			<ul
				style={{
					listStyle: 'none',
					padding: '0.55rem 0 0',
					margin: 0,
					position: 'relative',
					zIndex: 1,
				}}
			>
				{tracks.map((track) => (
					<LaMulanaTrack
						key={track[0]}
						track={track}
						openDialog={openDialog}
					/>
				))}
			</ul>

			{/* Bonus tracks */}
			{bonusTracks && (
				<>
					<div
						style={{
							padding: '1.65rem 1.65rem 0.55rem',
							display: 'flex',
							alignItems: 'center',
							gap: '1rem',
							position: 'relative',
							zIndex: 1,
						}}
					>
						<div
							style={{
								flex: 1,
								height: 1,
								background: LM.dkgreen,
							}}
						/>
						<span
							style={{
								fontFamily: PS2P,
								fontSize: '0.44rem',
								color: LM.amber,
								letterSpacing: '0.25em',
								textTransform: 'uppercase',
								whiteSpace: 'nowrap',
								opacity: 0.8,
							}}
						>
							Bonus Tracks
						</span>
						<div
							style={{
								flex: 1,
								height: 1,
								background: LM.dkgreen,
							}}
						/>
					</div>
					<ul
						style={{
							listStyle: 'none',
							padding: '0 0 4.4rem',
							margin: 0,
							position: 'relative',
							zIndex: 1,
						}}
					>
						{bonusTracks.map((track, i) => (
							<LaMulanaTrack
								key={track[0]}
								track={track}
								displayNum={String(tracks.length + i + 1)}
								openDialog={openDialog}
							/>
						))}
					</ul>
				</>
			)}

			{!bonusTracks && <div style={{ paddingBottom: '4.4rem' }} />}
		</>
	);

	return (
		<>
			<div
				className={lmFontVars}
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr minmax(320px, 600px) 1fr',
					backgroundColor: LM.black,
					position: 'relative',
				}}
			>
				{/* Left pillar */}
				<div
					aria-hidden="true"
					style={{
						overflow: 'hidden',
						position: 'sticky',
						top: 0,
						height: '100vh',
						alignSelf: 'flex-start',
						display: 'flex',
						alignItems: 'flex-end',
						justifyContent: 'flex-end',
					}}
				>
					<Image
						src={scene.pillar_left}
						alt=""
						width={384}
						height={384}
						unoptimized
						style={{
							width: 'auto',
							maxWidth: 384,
							height: 'auto',
							maxHeight: '100vh',
							imageRendering: 'pixelated',
							display: 'block',
						}}
					/>
				</div>

				{/* Center column */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						position: 'relative',
						backgroundColor: LM.black,
					}}
				>
					{scene?.face_bg && (
						<div
							aria-hidden="true"
							style={{
								position: 'absolute',
								inset: 0,
								display: 'flex',
								alignItems: 'flex-end',
								justifyContent: 'center',
								pointerEvents: 'none',
								zIndex: 0,
							}}
						>
							<Image
								src={scene.face_bg}
								alt=""
								width={260}
								height={260}
								unoptimized
								style={{
									width: 260,
									maxWidth: '100%',
									imageRendering: 'pixelated',
									opacity: 0.15,
								}}
							/>
						</div>
					)}
					{tracklistContent}
				</div>

				{/* Right pillar */}
				<div
					aria-hidden="true"
					style={{
						overflow: 'hidden',
						position: 'sticky',
						top: 0,
						height: '100vh',
						alignSelf: 'flex-start',
						display: 'flex',
						alignItems: 'flex-end',
						justifyContent: 'flex-start',
					}}
				>
					<Image
						src={scene.pillar_right}
						alt=""
						width={384}
						height={384}
						unoptimized
						style={{
							width: 'auto',
							maxWidth: 384,
							height: 'auto',
							maxHeight: '100vh',
							imageRendering: 'pixelated',
							display: 'block',
						}}
					/>
				</div>
			</div>

			{/* About this track lightbox */}
			{dialog && (
				<TrackDialog
					title={dialog.title}
					artist={dialog.artist}
					aboutText={dialog.aboutText}
					onClose={closeDialog}
				/>
			)}
		</>
	);
}
