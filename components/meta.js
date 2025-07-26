import Head from 'next/head';

export default function Meta() {
	return (
		<Head>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/favicons/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicons/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicons/favicon-16x16.png"
			/>
			<link rel="manifest" href="/favicons/site.webmanifest" />
			<link
				rel="mask-icon"
				href="/favicons/safari-pinned-tab.svg"
				color="#000000"
			/>
			<link rel="shortcut icon" href="/favicons/favicon.ico" />
			<meta name="msapplication-TileColor" content="#67349E" />
			<meta
				name="msapplication-config"
				content="/favicons/browserconfig.xml"
			/>
			<meta name="theme-color" content="#000" />
			<link rel="alternate" type="application/rss+xml" href="/feed.xml" />
			<meta property="og:image" content="/assets/kodama.png" />
			<meta property="og:title" content="KodamaSoft / KodamaSounds" />
			<meta
				property="og:description"
				content="KodamaSoft is a small french amateur community crafting video games, visual novels, and music!"
			/>
			<meta property="og:url" content="https://kodamasoft.net" />
			<meta property="og:type" content="website" />
		</Head>
	);
}
