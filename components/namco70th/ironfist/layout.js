import { Newsreader, Public_Sans } from 'next/font/google';

const newsreader = Newsreader({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-newsreader',
});

const p_sans = Public_Sans({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-public-sans',
});

export default function Layout({ children }) {
	return (
		<div className={`${newsreader.className} font-namco70-if-serif`}>
			<div className="min-h-screen bg-namco70-if-background text-namco70-if-foreground">
				<main>{children}</main>
			</div>
		</div>
	);
}
