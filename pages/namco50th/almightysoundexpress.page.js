import Image from 'next/image';
import Jacket from '../../public/assets/namco50th/almightysoundexpress/jacket.png';
import Layout from '../../components/namco50th/almightysoundexpress/layout';
import Link from 'next/link';
import MusicPlayer from '../../components/namco50th/music-player';
import { ChevronFirst, ChevronLast, Pause, Play } from 'lucide-react';

export default function AlmightySoundExpress() {
	return (
		<Layout>
			<div
				className="relative"
				style={{ '--header-height': '4rem', '--player-height': '4rem' }}
			>
				{/* Sticky Header */}
				<header className="sticky top-0 z-10 h-(--header-height)"></header>
				{/* Music Player */}
				<div className="h-[calc(100dvh_-_var(--header-height)_-_var(--player-height))] flex flex-col">
					<Image
						className="w-full h-auto object-contain"
						src={Jacket}
						alt={'Almighty Sound Express'}
						loading="lazy"
					/>
					<div className="flex flex-col p-4 gap-4">
						<div className="flex gap-[1ch] items-end">
							<span>Project Name</span>
							<span className="text-xs">
								Presented by Almighty Arrange Project
							</span>
						</div>
						<h1 className="text-3xl ">Almighty Sound Express</h1>
					</div>
				</div>
				<div className="sticky bottom-0 z-10 h-(--player-height)">
					<MusicPlayer className="flex items-center justify-between p-4">
						<div className="flex gap-2 items-center">
							<MusicPlayer.Next>
								<ChevronLast className="h-full w-full" />
							</MusicPlayer.Next>
							<MusicPlayer.Play>
								<Play className="h-full w-full" />
							</MusicPlayer.Play>
							<MusicPlayer.Pause>
								<Pause className="h-full w-full" />
							</MusicPlayer.Pause>

							<MusicPlayer.Prev>
								<ChevronFirst className="h-full w-full" />
							</MusicPlayer.Prev>
						</div>
					</MusicPlayer>
				</div>
			</div>
		</Layout>
	);
}
