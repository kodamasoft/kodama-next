import Layout from '../components/layout';
import Head from 'next/head';
import Container from '../components/container';
import Header from '../components/header';

import AlbumListing from '../components/album-listing';
import albumsJson from '/public/assets/discography/albums.json';

import { WEBSITE_NAME } from '../lib/constants';

export default function Discography() {
	// Order all the albums by release date (newest first)
	// Release date is in each album object as releaseDate with format 2020-12-30T00:00:00+0200 (ISO 8601)
	let albums = {};
	Object.keys(albumsJson)
		.sort((a, b) => {
			const dateA = new Date(albumsJson[a].releaseDate);
			const dateB = new Date(albumsJson[b].releaseDate);
			if (dateA.getTime() === dateB.getTime()) {
				// If release dates are the same, sort by catalog number in descending order
				return albumsJson[b].id.localeCompare(albumsJson[a].id);
			} else {
				return dateB.getTime() - dateA.getTime();
			}
		})
		.forEach((key) => {
			albums[key] = albumsJson[key];
		});

	return (
		<>
			<Layout>
				<Head>
					<title>{WEBSITE_NAME}</title>
				</Head>
				<Container>
					<Header />
					<div className="container pt-10 px-6 mx-auto">
						<div className="flex flex-wrap">
							{Object.keys(albums).map((key) => (
								<AlbumListing key={key} slug={key} />
							))}
						</div>
					</div>
				</Container>
			</Layout>
		</>
	);
}
