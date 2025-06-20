// Import Arial font from Google Fonts

export default function Layout({ children }) {
	return (
		<div className="font-namco70-gsc-sans">
			<div className="min-h-screen bg-namco70-gsc-backdrop">
				<main>{children}</main>
			</div>
		</div>
	);
}
