export default function Layout({ children }) {
	return (
		<div>
			<div className="min-h-screen bg-namco70-p-background">
				<main className="h-dvh">{children}</main>
			</div>
		</div>
	);
}
