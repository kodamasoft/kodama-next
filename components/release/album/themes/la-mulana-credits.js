import Link from 'next/link';
import { useRouter } from 'next/router';
import { lmFontVars } from './la-mulana-fonts';

import collaboratorsJson from '/_collaborators.json';
import {
	FaBandcamp,
	FaGlobe,
	FaYoutube,
	FaSoundcloud,
	FaTwitter,
	FaSpotify,
	FaApple,
	FaPatreon,
	FaTwitch,
} from 'react-icons/fa';
import BoothSVG from '../../../../public/assets/icons/booth.svg';
import PixivSVG from '../../../../public/assets/icons/pixiv.svg';
import FanboxSVG from '../../../../public/assets/icons/fanbox.svg';
import VgmdbSVG from '../../../../public/assets/icons/vgmdb.svg';
import BskySVG from '../../../../public/assets/icons/bsky.svg';

const LM = {
	black:   '#000000',
	cyan:    '#74d7ee',
	white:   '#d4d4d4',
	amber:   '#cccc77',
	green:   '#3eb849',
	dkgreen: '#1c5c1c',
};

const PS2P = "var(--font-press-start-2p, 'Press Start 2P', monospace)";
const STM  = "var(--font-share-tech-mono, 'Share Tech Mono', 'Courier New', monospace)";

function LinkIcon({ linkObj, className }) {
	const link = linkObj.toString();
	if (link.includes('bandcamp'))                         return <FaBandcamp className={className} />;
	if (link.includes('youtube') || link.includes('youtu.be')) return <FaYoutube className={className} />;
	if (link.includes('twitter') || link.includes('x.com'))    return <FaTwitter className={className} />;
	if (link.includes('soundcloud'))                       return <FaSoundcloud className={className} />;
	if (link.includes('vgmdb'))                            return <VgmdbSVG className={className} />;
	if (link.includes('booth.pm'))                         return <BoothSVG className={className} />;
	if (link.includes('pixiv'))                            return <PixivSVG className={className} />;
	if (link.includes('fanbox.cc'))                        return <FanboxSVG className={className} />;
	if (link.includes('spotify'))                          return <FaSpotify className={className} />;
	if (link.includes('apple'))                            return <FaApple className={className} />;
	if (link.includes('patreon'))                          return <FaPatreon className={className} />;
	if (link.includes('twitch.tv'))                        return <FaTwitch className={className} />;
	if (link.includes('bsky.app'))                         return <BskySVG className={className} />;
	return <FaGlobe className={className} />;
}

export default function LaMulanaCredits({ credits }) {
	const { locale } = useRouter();

	return (
		<section className={lmFontVars} style={{
			background: LM.black,
			padding: '4rem 2rem 5rem',
			position: 'relative',
			zIndex: 10,
		}}>
			{/* Dashed top rule */}
			<div style={{
				height: 3,
				background: `repeating-linear-gradient(90deg, ${LM.green} 0px, ${LM.green} 8px, transparent 8px, transparent 12px)`,
				marginBottom: '3rem',
			}} />

			<div style={{ maxWidth: 900, margin: '0 auto' }}>
				<h2 style={{
					fontFamily: PS2P,
					fontSize: '0.77rem',
					color: LM.amber,
					textAlign: 'center',
					letterSpacing: '0.3em',
					textTransform: 'uppercase',
					marginBottom: '2.5rem',
					textShadow: `2px 2px 0 ${LM.black}`,
					fontWeight: 400,
				}}>
					Staff Credits
				</h2>

				<table className="lm-credits-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
					<thead>
						<tr style={{ borderBottom: `1px solid ${LM.green}` }}>
							{['Name', 'Role', 'Links'].map((label, i) => (
								<th key={label} style={{
									fontFamily: PS2P,
									fontSize: '0.44rem',
									color: LM.cyan,
									textTransform: 'uppercase',
									letterSpacing: '0.15em',
									padding: '0 1rem 0.75rem',
									textAlign: i === 2 ? 'right' : 'left',
									fontWeight: 400,
								}}>
									{label}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{Object.entries(credits)
							.sort((a, b) => Number(a[0]) - Number(b[0]))
							.map((creditJSON) => {
								const collaboratorInfo = collaboratorsJson[creditJSON[1].id];
								const name = collaboratorInfo
									? (typeof collaboratorInfo.name === 'object'
										? collaboratorInfo.name[locale]
										: collaboratorInfo.name)
									: creditJSON[1].id;

								const linkIcons = collaboratorInfo?.links && (
									<div style={{ display: 'flex', gap: 4, justifyContent: 'flex-end' }}>
										{Object.entries(collaboratorInfo.links)
											.sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0)
											.map(([key, link]) => (
												<Link
													key={key}
													href={link}
													target="_blank"
													rel="noopener noreferrer"
													className="lm-social-link"
													style={{
														display: 'inline-flex',
														alignItems: 'center',
														justifyContent: 'center',
														width: 22,
														height: 22,
														color: LM.white,
														opacity: 0.5,
														textDecoration: 'none',
														transition: 'opacity 0.15s, color 0.15s',
													}}
												>
													<LinkIcon linkObj={link} className="w-3.5 h-3.5" />
												</Link>
											))}
									</div>
								);

								return (
									<tr
										key={creditJSON[0]}
										className="lm-credits-row"
										style={{
											borderBottom: `1px solid ${LM.dkgreen}`,
											transition: 'background 0.1s',
										}}
									>
										<td className="lm-credits-name" style={{
											padding: '0.85rem 1rem',
											fontFamily: STM,
											fontSize: '0.88rem',
											color: collaboratorInfo ? LM.white : '#e06060',
											whiteSpace: 'nowrap',
											verticalAlign: 'middle',
										}}>
											{name}
										</td>
										<td className="lm-credits-role" style={{
											padding: '0.85rem 1rem',
											fontFamily: STM,
											fontSize: '0.88rem',
											color: LM.cyan,
											opacity: 0.8,
											verticalAlign: 'middle',
										}}>
											{creditJSON[1].role}
										</td>
										<td className="lm-credits-links" style={{
											padding: '0.85rem 1rem',
											textAlign: 'right',
											whiteSpace: 'nowrap',
											verticalAlign: 'middle',
										}}>
											{linkIcons}
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		</section>
	);
}
