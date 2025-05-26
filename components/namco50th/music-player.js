'use client';
import ReactPlayer from 'react-player';
import cn from '../../lib/cn';
import { createContext } from 'react';
import { useContext, useState, useEffect } from 'react';

const PlayerContext = createContext({
	playing: false,
	togglePlay: () => {},
	togglePause: () => {},
});

export default function MusicPlayer({ children, href, className }) {
	const [playing, setPlaying] = useState(false);
	const togglePlay = () => setPlaying(true);
	const togglePause = () => setPlaying(false);

	const playerContextValue = {
		playing,
		togglePlay,
		togglePause,
	};

    /* TODO Handle hydration mismatch */
	return (
		<PlayerContext.Provider value={playerContextValue}>
			{typeof window !== 'undefined' && (
				<ReactPlayer
					style={{
						position: 'fixed',
						pointerEvents: 'none',
						opacity: 0,
					}}
					url={href}
					playing={playing}
				/>
			)}

			<div className={cn(className)}>{children}</div>
		</PlayerContext.Provider>
	);
}

MusicPlayer.Play = function PlayButton({ children, className }) {
	const { playing, togglePlay } = useContext(PlayerContext);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		// Return a placeholder with the same dimensions during server render
		return <button className={cn('h-6 w-6', className)}>{children}</button>;
	}

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
	const { playing, togglePause } = useContext(PlayerContext);

	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		// Return a placeholder with the same dimensions during server render
		return <button className={cn('h-6 w-6', className)}>{children}</button>;
	}

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
