export default function Layout({ children }) {
	return (
		<div>
			<div className="min-h-screen bg-namco50-p-background">
				<main>{children}</main>
			</div>
		</div>
	)
}
