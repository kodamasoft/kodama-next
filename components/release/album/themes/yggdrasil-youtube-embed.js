import Link from 'next/link';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function YggdrasilYouTubeEmbed({ youtube }) {
	return (
		<section className="container mx-auto relative my-16">
			<div className="max-w-[700px] mx-auto">
				<div className="mb-6 text-center">
					<Link
						href="/yggdrasil-comments"
						className="inline-block text-lg font-semibold hover:opacity-80 transition-opacity underline"
					>
						View Artist Comments →
					</Link>
				</div>
				<LiteYouTubeEmbed
					id={youtube}
					adNetwork={false}
					noCookie={true}
				/>
			</div>
		</section>
	);
}

