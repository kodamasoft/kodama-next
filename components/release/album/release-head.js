import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import ReleaseNav from './release-nav';

export default function ReleaseHead({
	slug,
	logo,
	background,
	sc_track_id,
	color,
}) {
	const { t } = useTranslation('release');

	return (
		<>
			<div className={background ? 'mx-auto' : 'container mx-auto'}>
				{background ? (
					<div className="relative overflow-hidden">
						{background.image && (
							<Image
								src={background.image}
								alt="Background"
								fill={true}
								quality={20}
								className="z-2 object-cover blur-[25px] brightness-50 mask-linear-180 mask-linear-from-[90%] mask-linear-to-[100%]"
							/>
						)}
						{background.video && (
							//  div with fadeout mask on the bottom
							<video
								className="w-full h-full object-cover object-center absolute top-0 left-0 z-3 mask-linear-180 mask-linear-from-[90%] mask-linear-to-[100%]"
								autoPlay
								loop
								muted
								plays
								src={background.video}
							></video>
						)}

						<div className="md:container relative mx-auto z-10">
							<ReleaseNav className="bg-[#232426] md:bg-transparent" />
							<div className="relative w-[800px] h-[500px] max-w-full mx-auto">
								<Image
									src={logo}
									height="340"
									width="1000"
									alt="Logo"
									className="object-contain object-center p-6 md:relative -top-14 w-[1000px] h-[500px] max-w-full mx-auto drop-shadow-[0_0_5px_rgba(0,0,0,0.75)]"
									quality={100}
								/>
							</div>
						</div>
					</div>
				) : (
					<>
						<ReleaseNav />
						<div className="relative w-[800px] h-[500px] max-w-full mx-auto">
							<Image
								src={logo}
								height="340"
								width="1000"
								alt="Logo"
								className="object-contain object-center p-6 md:relative -top-14 w-[1000px] h-[500px] max-w-full mx-auto"
								quality={100}
							/>
						</div>
					</>
				)}
			</div>

			<div className="container mx-auto">
				<div className="my-16">
					<p className="text-center text-sm my-4">
						{t(slug + '.desc')}
					</p>
				</div>

				<div>
					<iframe
						width="100%"
						height="166"
						scrolling="no"
						frameBorder="no"
						allow="autoplay"
						src={
							'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' +
							sc_track_id +
							'&color=%23' +
							color +
							'&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
						}
					></iframe>
				</div>
			</div>
		</>
	);
}
