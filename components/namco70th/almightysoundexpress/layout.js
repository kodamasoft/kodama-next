import { Tomorrow } from 'next/font/google';

const tomorrow = Tomorrow({
	subsets: ['latin'],
	weight: ['400', '700'],
	display: 'swap',
	variable: '--font-tomorrow',
});
export default function Layout({ children }) {
	return (
		<div className={`${tomorrow.variable} font-namco70-ase-sans`}>
			<div className="min-h-screen bg-namco70-ase-background">
				<main>{children}</main>
			</div>
		</div>
	);
}
