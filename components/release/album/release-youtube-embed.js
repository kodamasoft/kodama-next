import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function ReleaseYouTubeEmbed({ youtube }) {
	return (
		<section className="container mx-auto relative my-16">
			<div className="max-w-[700px] mx-auto">
				<LiteYouTubeEmbed
					id={youtube}
					adNetwork={false}
					noCookie={true}
				/>
			</div>
		</section>
	);
}
