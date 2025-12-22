import Link from 'next/link';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { Source_Serif_4 } from 'next/font/google';

const sourceSerif = Source_Serif_4({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-source-serif',
});

export default function YggdrasilYouTubeEmbed({ youtube }) {
	return (
		<section className="container mx-auto relative my-16">
			<div className="max-w-[700px] mx-auto">
				<div className="mb-6 text-center">
					<Link
						href="/yggdrasil-comments"
						className={`inline-block text-2xl font-semibold hover:opacity-80 transition-opacity px-24 py-10 md:min-w-xl ${sourceSerif.className} text-[#5C4033]`}
						style={{
							maskImage: 'url(/assets/yggdrasil/mask.png)',
							maskSize: 'cover',
							maskPosition: 'center',
							maskRepeat: 'no-repeat',
							backgroundImage:
								'url(/assets/yggdrasil/texture.png)',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
						}}
					>
						View Artist Comments
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
