import cn from '../../../lib/cn';
import Image from 'next/image';
import HeaderLogo from '../../../public/assets/namco70th/gamesoundcollage/gsc-logo.png';

export default function Hero({ className, ...props }) {
	return (
		<div className={cn('px-4', className)} {...props}>
			<h2 className="text-4xl text-center font-bold pt-6">Introducing</h2>
			<Image
				className="w-full h-auto object-cover"
				src={HeaderLogo}
				alt={'Game Sound Collage'}
				loading="lazy"
			/>
			<p className="pt-4 text-base">
				Arrangements of tunes from classic Namco arcade games, made with
				pxtone! This album is part of the "United Tribute Arrange Force"
				project celebrating the 70th anniversary of Namco's founding.
			</p>
		</div>
	);
}
