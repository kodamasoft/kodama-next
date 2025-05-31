import Head from 'next/head';
import Layout from '../components/namco50th/portal/layout';
import Image from 'next/image';
import Logo from '../public/assets/namco50th/portal/images/lg-white.png';

export default function Discography() {
	return (
		<>
			<Layout>
				<Head>
					<title>Namco 50th Anniversary</title>
				</Head>
				<div className="w-full h-full m-auto">
					<div className="flex flex-col items-center justify-center h-full w-full gap-8 lg:gap-12">
						{/* Album container */}
						<Image
							src={Logo}
							alt="Namco 50th Anniversary Logo"
							className="w-64 lg:w-96"
						/>

						<p className="font-namco50-mono text-2xl animate-pulse lg:text-4xl">
							Coming soon
						</p>
					</div>
				</div>
			</Layout>
		</>
	);
}
