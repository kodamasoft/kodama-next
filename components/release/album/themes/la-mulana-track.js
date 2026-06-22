import { useState } from 'react';
import { useRouter } from 'next/router';

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

function parseDescription(description) {
	if (!description) return { credits: [], aboutText: null, links: [] };
	const credits = [];
	let aboutText = null;
	const links = [];

	for (const line of description) {
		if (!line) continue;
		const trimmed = line.trim();
		if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
			links.push(trimmed);
		} else if (trimmed.startsWith('• ')) {
			const content = trimmed.slice(2);
			const colonIdx = content.indexOf(':');
			if (colonIdx !== -1) {
				const role = content.slice(0, colonIdx).trim();
				const value = content.slice(colonIdx + 1).trim();
				if (role.toLowerCase() === 'about this track') {
					aboutText = value;
				} else {
					credits.push({ role, value });
				}
			} else {
				const byMatch = content.match(/^(.+?\bby\b) (.+)$/i);
				if (byMatch) {
					credits.push({ role: byMatch[1], value: byMatch[2] });
				} else {
					credits.push({ role: '', value: content });
				}
			}
		}
	}

	return { credits, aboutText, links };
}

export default function LaMulanaTrack({ track, openDialog }) {
	const { locale } = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const trackNum = track[0];
	const trackData = track[1];
	const title =
		typeof trackData.title === 'object'
			? trackData.title[locale]
			: trackData.title;
	const artist =
		typeof trackData.artist === 'object'
			? trackData.artist[locale]
			: trackData.artist;
	const { credits, aboutText, links } = parseDescription(
		trackData.description
	);

	const hasCredits = credits.length > 0 || links.length > 0 || !!aboutText;

	const toggle = () => {
		if (hasCredits) setIsOpen((o) => !o);
	};

	return (
		<li style={{ borderBottom: `1px solid ${LM.dkgreen}` }}>
			{/* Track header — click to collapse/expand */}
			<div
				role={hasCredits ? 'button' : undefined}
				tabIndex={hasCredits ? 0 : undefined}
				onClick={toggle}
				onKeyDown={(e) => {
					if (hasCredits && (e.key === 'Enter' || e.key === ' ')) {
						e.preventDefault();
						toggle();
					}
				}}
				className={hasCredits ? 'lm-track-header' : ''}
				aria-expanded={hasCredits ? isOpen : undefined}
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '1.1rem',
					padding: '1.1rem 1.65rem',
					cursor: hasCredits ? 'pointer' : 'default',
					userSelect: 'none',
					transition: 'background 0.15s',
					position: 'relative',
					zIndex: 1,
				}}
			>
				{/* Track number */}
				<span
					style={{
						fontFamily: PS2P,
						fontSize: '0.61rem',
						color: LM.amber,
						letterSpacing: '0.05em',
						minWidth: '2.2rem',
						flexShrink: 0,
						lineHeight: 1.6,
					}}
				>
					{trackNum.padStart(2, '0')}
				</span>

				{/* Title + artist */}
				<div style={{ flex: 1, minWidth: 0 }}>
					<div
						style={{
							fontFamily: STM,
							fontSize: 'clamp(0.88rem, 1.98vw, 1.1rem)',
							color: LM.white,
							letterSpacing: '0.04em',
							lineHeight: 1.4,
						}}
					>
						{title}
					</div>
					{artist && (
						<div
							style={{
								fontFamily: STM,
								fontSize: '0.72rem',
								color: LM.green,
								letterSpacing: '0.08em',
								marginTop: '0.28rem',
							}}
						>
							{artist}
						</div>
					)}
				</div>

				{/* Arrow — rotates when open */}
				{hasCredits && (
					<span
						style={{
							width: 22,
							height: 22,
							flexShrink: 0,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: LM.amber,
							transition:
								'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
							transform: isOpen ? 'rotate(90deg)' : 'none',
						}}
					>
						<svg
							viewBox="0 0 24 24"
							width={14}
							height={14}
							fill="none"
							stroke="currentColor"
							strokeWidth={2.5}
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<polyline points="9 18 15 12 9 6" />
						</svg>
					</span>
				)}
			</div>

			{/* Credits panel — collapses via grid-template-rows */}
			{hasCredits && (
				<div
					style={{
						display: 'grid',
						gridTemplateRows: isOpen ? '1fr' : '0fr',
						transition:
							'grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
					}}
				>
					<div style={{ overflow: 'hidden' }}>
						<div
							style={{
								padding:
									'0.28rem 1.65rem 1.38rem calc(1.65rem + 2.2rem + 1.1rem)',
								borderLeft: `2px solid ${LM.green}`,
								margin: '0 1.65rem 0.55rem calc(1.65rem + 2.2rem + 0.55rem)',
							}}
						>
							{credits.map(({ role, value }, i) => (
								<div
									key={i}
									style={{
										display: 'flex',
										gap: '0.83rem',
										marginBottom: '0.44rem',
										lineHeight: 1.5,
									}}
								>
									{role && (
										<span
											style={{
												fontFamily: PS2P,
												fontSize: '0.44rem',
												color: LM.amber,
												letterSpacing: '0.08em',
												textTransform: 'uppercase',
												minWidth: '7.15rem',
												flexShrink: 0,
												opacity: 0.9,
												lineHeight: 1.9,
											}}
										>
											{role}
										</span>
									)}
									<span
										style={{
											fontFamily: STM,
											fontSize: '0.72rem',
											color: LM.cyan,
											opacity: 0.85,
										}}
									>
										{value}
									</span>
								</div>
							))}

							{links.length > 0 && (
								<div
									style={{
										display: 'flex',
										gap: '0.83rem',
										marginTop:
											credits.length > 0 ? '0.55rem' : 0,
										marginBottom: '0.44rem',
										lineHeight: 1.5,
									}}
								>
									<span
										style={{
											fontFamily: PS2P,
											fontSize: '0.44rem',
											color: LM.amber,
											letterSpacing: '0.08em',
											textTransform: 'uppercase',
											minWidth: '7.15rem',
											flexShrink: 0,
											opacity: 0.9,
											lineHeight: 1.9,
										}}
									>
										Links
									</span>
									<span
										style={{
											fontFamily: STM,
											fontSize: '0.82rem',
										}}
									>
										{links.map((link, i) => (
											<a
												key={i}
												href={link}
												target="_blank"
												rel="noopener noreferrer"
												style={{
													color: LM.amber,
													textDecoration: 'none',
													display: 'block',
												}}
											>
												{link.replace(
													/^https?:\/\//,
													''
												)}
											</a>
										))}
									</span>
								</div>
							)}

							{aboutText && (
								<button
									className="lm-about-btn"
									onClick={(e) => {
										e.stopPropagation();
										openDialog({
											title,
											artist,
											aboutText,
										});
									}}
								>
									About this track{' '}
									<span
										style={{
											fontSize: '0.75rem',
											marginLeft: 4,
										}}
									>
										→
									</span>
								</button>
							)}
						</div>
					</div>
				</div>
			)}
		</li>
	);
}
