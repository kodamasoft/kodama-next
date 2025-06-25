import { Cormorant_Garamond } from 'next/font/google';

const c_garamond = Cormorant_Garamond({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-garamond',
});

export default function Layout({ children }) {
	return (
		<div className={`${c_garamond.className} font-namco70-if-serif`}>
			<div className="min-h-screen bg-namco70-if-background">
				<main>{children}</main>
			</div>
		</div>
	);
}
