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
	nextTrack: () => {},
	prevTrack: () => {},
	setTrack: () => {},

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
 * @param {Function} [props.onTrackChange] - Callback when track changes
 * @returns {JSX.Element} - Rendered MusicPlayer component
 */
export default function MusicPlayer({
	children,
	href,
	className,
	onTrackChange,
	songList = [],
}) {
	const [playing, setPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [seeking, setSeeking] = useState(false);
	const [playerReady, setPlayerReady] = useState(false);
	const [progress, setProgress] = useState(0);
	const [mounted, setMounted] = useState(false);
	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const playerRef = useRef(null);

	const togglePlay = () => setPlaying(true);
	const togglePause = () => setPlaying(false);

	// Add functions to change tracks
	const nextTrack = () => {
		if (currentSongIndex < songList.length - 1) {
			setCurrentSongIndex((prevIndex) => prevIndex + 1);
		} else {
			// Loop back to first track
			setCurrentSongIndex(0);
		}
	};

	const prevTrack = () => {
		if (currentSongIndex > 0) {
			setCurrentSongIndex((prevIndex) => prevIndex - 1);
		} else {
			// Loop to last track
			setCurrentSongIndex(songList.length - 1);
		}
	};

	// Function to set track by index (for the track list)
	const setTrack = (index) => {
		if (index >= 0 && index < songList.length) {
			setCurrentSongIndex(index);
		}
	};

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
		setPlayerReady(true);
	};

	const seek = (time) => {
		if (!playerReady) {
			console.warn('Player not ready yet');
			return;
		}

		if (playerRef.current) {
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

	// Seek to track's start time when changing tracks
	// This runs when currentSongIndex changes, hence all of the function above doesn't need to seek
	useEffect(() => {
		if (playerReady && songList.length > 0) {
			const currentSong = songList[currentSongIndex];
			if (currentSong && typeof currentSong.startAt === 'number') {
				seek(currentSong.startAt);
			}
		}

		// seek doesn't need to be a callback for now
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentSongIndex, playerReady, songList]);

	useEffect(() => {
		if (onTrackChange && songList.length > 0) {
			onTrackChange(currentSongIndex, songList[currentSongIndex]);
		}
	}, [currentSongIndex, onTrackChange, songList]);
	const playerContextValue = {
		playing,
		togglePlay,
		togglePause,
		duration,
		progress,
		songList,
		currentSongIndex,
		seek,
		nextTrack,
		prevTrack,
		setTrack,
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
	const { nextTrack } = usePlayerContext();

	return (
		<button
			onClick={nextTrack}
			aria-label="Next Track"
			className={cn('h-6 w-6', className)}
		>
			{children}
		</button>
	);
};

MusicPlayer.Prev = function PrevButton({ children, className }) {
	const { prevTrack } = usePlayerContext();

	return (
		<button
			onClick={prevTrack}
			aria-label="Previous Track"
			className={cn('h-6 w-6', className)}
		>
			{children}
		</button>
	);
};

MusicPlayer.Duration = function MusicPlayerDuration({ className }) {
	const { duration, progress } = usePlayerContext();

	if (duration === 0) {
		return null;
	}

	const totalSeconds = Math.floor(duration);
	const currentSeconds = Math.floor(duration * progress);

	const formatTime = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
	};

	return (
		<span className={cn('text-sm', className)}>
			{formatTime(currentSeconds)} / {formatTime(totalSeconds)}
		</span>
	);
};
