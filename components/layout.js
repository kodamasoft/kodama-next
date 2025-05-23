import Footer from '../components/footer';
import Meta from '../components/meta';

import layoutStyles from './layout.module.css';

import { Noto_Sans_JP } from 'next/font/google';

const noto = Noto_Sans_JP({
	subsets: ['latin'],
	weight: ['400', '900'],
	variable: '--font-noto',
});

export default function Layout({ children }) {
	return (
		<div className={layoutStyles.main_container}>
			<Meta />
			<div
				className={
					layoutStyles.main + ' ' + noto.className + ' min-h-screen'
				}
			>
				<main>{children}</main>
				<Footer />
			</div>
		</div>
	);
}
