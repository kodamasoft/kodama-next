import { FaBandcamp, FaGlobe, FaSpotify, FaCompactDisc } from 'react-icons/fa';
import { SiApplemusic, SiYoutubemusic } from 'react-icons/si';

import BoothSVG from '../public/assets/icons/booth.svg';
import DeezerSVG from '../public/assets/icons/deezer.svg';
import ThbwikiSVG from '../public/assets/icons/thbwiki.svg';
import VgmdbSVG from '../public/assets/icons/vgmdb.svg';

import albumsJSON from '/public/assets/discography/albums.json';
import Image from 'next/image';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import DateFormatter from './date-formatter';

export default function AlbumListing({ slug }) {
	let album = {};
	const { t } = useTranslation('common');

	// if we find an album with the key equal as the slug we are looking for, return the album
	let keys = Object.keys(albumsJSON);
	for (let i = 0; i < keys.length; i++) {
		if (keys[i] === slug) {
			album = albumsJSON[keys[i]];
			break;
		}
	}

	const [showModal, setShowModal] = useState(false);

	return (
		<div className="not-prose group relative w-full md:max-w-2xl mx-auto content-center border-solid border border-violet-500/50 hover:border-violet-500 rounded-xl flex flex-col md:flex-row my-5 transition items-center">
			<div
				className="relative h-52 w-52 my-5 mx-auto md:m-5 md:mr-0 aspect-square rounded-md shadow-lg transition overflow-clip flex-none"
				style={{ backgroundColor: album.coverColor }}
			>
				<Image
					src={album.cover}
					alt={album.name}
					sizes="13rem"
					quality={100}
					priority={true}
					width={208}
					height={208}
					onClick={() => setShowModal(true)}
					style={{ cursor: 'pointer' }}
				/>

				{showModal && (
					<div
						onClick={() => setShowModal(false)}
						style={{
							position: 'fixed',
							top: 0,
							left: 0,
							width: '100vw',
							height: '100vh',
							backgroundColor: 'rgba(0,0,0,0.8)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							zIndex: 1000,
						}}
					>
						<Image
							src={album.cover}
							alt={album.name}
							unoptimized
							fill
							style={{ objectFit: 'contain' }}
						/>
					</div>
				)}
			</div>

			<div className="flex flex-col flex-initial py-5 px-10 text-white">
				<div>
					<span className="font-mono text-sm">
						{album.id}{' '}
						{album.releaseDate && (
							<>
								—{' '}
								<DateFormatter dateString={album.releaseDate} />
							</>
						)}
					</span>
					<h2 className="text-2xl font-semibold">{album.name}</h2>
				</div>

				<div className="flex flex-wrap mt-4 gap-4">
					<a
						href={album.website}
						className="kodama_btn kodama_btn--primary"
					>
						<FaGlobe className="h-4 w-4 mr-2" />
						Website
					</a>

					{album.vgmdb ? (
						<a
							href={album.vgmdb}
							className="kodama_btn kodama_btn--primary"
						>
							<VgmdbSVG className="h-4 w-4 mr-2" />
							VGMdb
						</a>
					) : null}

					{album.thbwiki ? (
						<a
							href={album.thbwiki}
							className="kodama_btn kodama_btn--primary"
						>
							<ThbwikiSVG className="h-4 w-4 mr-2" />
							THB WIKI
						</a>
					) : null}
				</div>

				<h3 className="text-lg font-semibold mt-4">
					{t('common:words.download')}
				</h3>
				<div className="flex flex-wrap mt-2 gap-4">
					<a
						href={album.bandcamp}
						className="kodama_btn kodama_btn--primary"
					>
						<FaBandcamp className="h-4 w-4 mr-2" />
						Bandcamp
					</a>

					<a
						href={album.booth}
						className="kodama_btn kodama_btn--primary"
					>
						<BoothSVG className="h-4 w-4 mr-2" />
						BOOTH
					</a>
				</div>

				{(album.appleMusic ||
					album.spotify ||
					album.deezer ||
					album.youtubeMusic) && (
					<h3 className="text-lg font-semibold mt-4">
						{t('common:words.streaming')}
					</h3>
				)}
				<div className="flex flex-wrap mt-2 gap-4">
					{album.appleMusic ? (
						<a
							href={album.appleMusic}
							className="kodama_btn kodama_btn--secondary"
						>
							<SiApplemusic className="h-4 w-4 mr-2" />
							Apple Music
						</a>
					) : null}

					{album.deezer ? (
						<a
							href={album.deezer}
							className="kodama_btn kodama_btn--secondary"
						>
							<DeezerSVG className="h-4 w-4 mr-2" />
							Deezer
						</a>
					) : null}

					{album.spotify ? (
						<a
							href={album.spotify}
							className="kodama_btn kodama_btn--secondary"
						>
							<FaSpotify className="h-4 w-4 mr-2" />
							Spotify
						</a>
					) : null}

					{album.youtubeMusic ? (
						<a
							href={album.youtubeMusic}
							className="kodama_btn kodama_btn--secondary"
						>
							<SiYoutubemusic className="h-4 w-4 mr-2" />
							YouTube Music
						</a>
					) : null}
				</div>
				{(album.diverse || album.melonbooks || album.akibahobby) && (
					<h3 className="text-lg font-semibold mt-4">
						{t('common:words.physical')}
					</h3>
				)}
				<div className="flex flex-wrap mt-2 gap-4">
					{album.diverse ? (
						<a
							href={album.diverse}
							className="kodama_btn kodama_btn--primary"
						>
							<FaCompactDisc className="h-4 w-4 mr-2" />
							Diverse Direct
						</a>
					) : null}

					{album.melonbooks ? (
						<a
							href={album.melonbooks}
							className="kodama_btn kodama_btn--primary"
						>
							<FaCompactDisc className="h-4 w-4 mr-2" />
							Melon Books
						</a>
					) : null}

					{album.akibahobby ? (
						<a
							href={album.akibahobby}
							className="kodama_btn kodama_btn--primary"
						>
							<FaCompactDisc className="h-4 w-4 mr-2" />
							Akiba Hobby
						</a>
					) : null}
				</div>
			</div>
		</div>
	);
}
