import cn from '../../lib/cn';
import { createContext } from 'react';
import { useContext, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Music } from 'lucide-react';
import typeDef from './types';

// ReactPlayer has some funky mechanic with SSR, so we need to dynamically import it
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
const PlayerContext = createContext({
	playing: false,
	togglePlay: () => {},
	togglePause: () => {},
	/** @type {SongItem[]} */
	songList: [],
	currentSongIndex: 0,
});

export function usePlayerContext() {
	const context = useContext(PlayerContext);
	if (!context) {
		throw new Error('usePlayerContext must be used within a MusicPlayer');
	}
	return context;
}

/**
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.href - The URL of the music file
 * @param {string} [props.className] - Additional class names for styling
 * @param {SongItem[]} [props.songList=[]] - List of songs with metadata
 * @returns {JSX.Element} - Rendered MusicPlayer component
 */
export default function MusicPlayer({
	children,
	href,
	className,
	songList = [],
}) {
	const [playing, setPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [progress, setProgress] = useState(0);

	const togglePlay = () => setPlaying(true);
	const togglePause = () => setPlaying(false);

	// Handle duration updates
	const handleDuration = (duration) => {
		setDuration(duration);
	};

	// Handle progress updates
	const handleProgress = (state) => {
		setProgress(state.playedSeconds);
	};

	const playerContextValue = {
		playing,
		togglePlay,
		togglePause,
		songList,
		currentSongIndex: 0,
	};

	return (
		<PlayerContext.Provider value={playerContextValue}>
			<ReactPlayer
				style={{
					position: 'fixed',
					pointerEvents: 'none',
					opacity: 0,
				}}
				url={href}
				playing={playing}
				onDuration={handleDuration}
				onProgress={handleProgress}
			/>
			<div className={cn(className)}>{children}</div>
		</PlayerContext.Provider>
	);
}

MusicPlayer.Title = function MusicPlayerTitle({ className }) {
	const { songList, currentSongIndex } = usePlayerContext();
	if (songList.length === 0) {
		return null;
	}

	const currentSong = songList[currentSongIndex];
	return (
		<span className={cn('whitespace-nowrap', className)}>
			{currentSong.title}
		</span>
	);
};

MusicPlayer.Artist = function MusicPlayerArtist({ className }) {
	const { songList, currentSongIndex } = usePlayerContext();
	if (songList.length === 0) {
		return null;
	}

	const currentSong = songList[currentSongIndex];
	return (
		<span className={cn('whitespace-nowrap', className)}>
			{currentSong.artist}
		</span>
	);
};

MusicPlayer.Play = function PlayButton({ children, className }) {
	const { playing, togglePlay } = usePlayerContext();

	if (playing) {
		return null;
	}

	return (
		<button className={cn('h-6 w-6', className)} onClick={togglePlay}>
			{children}
		</button>
	);
};

MusicPlayer.Pause = function PauseButton({ children, className }) {
	const { playing, togglePause } = usePlayerContext();

	if (!playing) {
		return null;
	}

	return (
		<button className={cn('h-6 w-6', className)} onClick={togglePause}>
			{children}
		</button>
	);
};

MusicPlayer.Next = function NextButton({ children, className }) {
	return <button className={cn('h-6 w-6', className)}>{children}</button>;
};

MusicPlayer.Prev = function PrevButton({ children, className }) {
	return <button className={cn('h-6 w-6', className)}>{children}</button>;
};
