import Head from 'next/head'
import Layout from '../components/namco50th/layout'
import Link from 'next/link'

export default function Discography() {
	return (
		<>
			<Layout>
				<Head>
					<title>Namco 50th Anniversary</title>
				</Head>
				<div className="w-full h-full">
					<div className="flex flex-col items-center h-full w-full">
						{/* Album container */}
						<Link href={'/'} className="w-full">
							<div className="w-full border-2 border-namco50-p-stroke">
								<div className="flex flex-col items-center justify-center w-full h-full bg-namco50-p-background">
									<div className="flex flex-col items-center justify-center py-4">
										<span>Album name</span>
										<span>Click to view info</span>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</Layout>
		</>
	)
}
