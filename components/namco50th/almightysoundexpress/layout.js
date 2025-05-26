import { Tomorrow } from 'next/font/google';

const tomorrow = Tomorrow({
	subsets: ['latin'],
	weight: ['400', '700'],
	display: 'swap',
	variable: '--font-tomorrow',
});
export default function Layout({ children }) {
	return (
		<div className={`${tomorrow.variable} font-namco50-ase-sans`}>
			<div className="min-h-screen bg-namco50-ase-background">
				<main>{children}</main>
			</div>
		</div>
	);
}
