import cn from '../../lib/cn';
import { createContext, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useContext, useState, useEffect } from 'react';

// Workaround for the issue with ReactPlayer ref not exposing the function needed on dynamic import with NextJS 13
// https://github.com/cookpete/react-player/issues/1455#issuecomment-1207154843
const ReactPlayer = dynamic(() => import('./react-player'), { ssr: false });

const PlayerContext = createContext({
	playing: false,
	togglePlay: () => {},
	togglePause: () => {},
	seek: () => {},

	/** @type {SongItem[]} */
	songList: [],
	duration: 0,
	progress: 0,
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
	const [seeking, setSeeking] = useState(false);
	const [playerReady, setPlayerReady] = useState(false);
	const [progress, setProgress] = useState(0);
	const [mounted, setMounted] = useState(false);
	const playerRef = useRef(null);

	const togglePlay = () => setPlaying(true);
	const togglePause = () => setPlaying(false);

	useEffect(() => {
		setMounted(true);
		return () => {
			setMounted(false);

			// Unmount cleanup
			setSeeking(false);
			setPlaying(false);
			setPlayerReady(false);
		};
	}, []);

	const handleReady = () => {
		console.log('Player ready:', playerRef.current);
		setPlayerReady(true);
	};

	const seek = (time) => {
		console.log('Attempting to seek to:', time);

		if (!playerReady) {
			console.warn('Player not ready yet');
			return;
		}

		console.log(time);
		if (playerRef.current) {
			console.log(playerRef.current);
			setSeeking(true);
			playerRef.current.seekTo(time);
			setSeeking(false);
		}
	};

	const handleDuration = (duration) => {
		setDuration(duration);
	};

	const handleProgress = (state) => {
		if (!seeking) {
			setProgress(state.played);
		}
	};

	const playerContextValue = {
		playing,
		togglePlay,
		togglePause,
		duration,
		progress,
		songList,
		currentSongIndex: 0,
		seek,
	};

	return (
		<PlayerContext.Provider value={playerContextValue}>
			{mounted && (
				<ReactPlayer
					playerRef={playerRef}
					style={{
						position: 'fixed',
						pointerEvents: 'none',
						opacity: 0,
					}}
					url={href}
					playing={playing}
					onReady={handleReady}
					onDuration={handleDuration}
					onProgress={handleProgress}
				/>
			)}
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
