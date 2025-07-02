import cn from '../../../lib/cn';
import { usePlayerContext } from '../music-player';
import { useRef, useEffect, useState, useCallback } from 'react';

// Specifically for the Almighty Sound Express music player
// You have to use this within the MusicPlayer component
// Ya I vibed coded this bit and only provided the style I am so tired of dealing with compability bs
export default function SeekBar({ className }) {
	const { duration, progress, seek } = usePlayerContext();
	const progressPercent = duration > 0 ? progress * 100 : 0;
	const [isDragging, setIsDragging] = useState(false);
	const [localValue, setLocalValue] = useState(0);
	const [isHovering, setIsHovering] = useState(false);
	const rangeRef = useRef(null);

	// Debounced seek function to prevent excessive updates
	const debouncedSeek = useCallback(
		(time) => {
			// Only perform the seek if we have a valid duration
			if (duration > 0 && time >= 0 && time <= duration) {
				seek(time);
			}
		},
		[seek, duration]
	);

	// Update local value when progress changes (if not dragging)
	useEffect(() => {
		if (!isDragging) {
			setLocalValue(progressPercent);
		}
	}, [progress, progressPercent, isDragging]);

	const handleSeek = (e) => {
		const value = parseFloat(e.target.value);
		setLocalValue(value);
		const seekTime = (value / 100) * duration;
		debouncedSeek(seekTime);
	};

	const handleDragStart = () => {
		setIsDragging(true);
	};

	const handleDragEnd = () => {
		// Get the final value and seek to it
		const value = localValue;
		const seekTime = (value / 100) * duration;
		debouncedSeek(seekTime);

		// Reset dragging state after a small delay to prevent visual glitches
		setTimeout(() => {
			setIsDragging(false);
		}, 100);
	};

	return (
		<div
			className={cn(
				'relative w-full h-8 flex items-center group',
				className
			)}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			{/* Hidden native range input for accessibility */}
			<input
				ref={rangeRef}
				type="range"
				min="0"
				max="100"
				step="0.1"
				value={localValue}
				onChange={handleSeek}
				onMouseDown={handleDragStart}
				onMouseUp={handleDragEnd}
				onTouchStart={handleDragStart}
				onTouchEnd={handleDragEnd}
				className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
				aria-label="Seek playback position"
				style={{
					touchAction: 'none',
				}} /* Prevents scrolling on touch devices */
			/>

			{/* Custom styled track background */}
			<div className="w-full h-0.5 rounded-full bg-namco70-ase-foreground/40 overflow-hidden">
				{/* Progress fill */}
				<div
					className="h-full bg-namco70-ase-foreground rounded-full transition-all ease-out"
					style={{
						width: `${localValue}%`,
						transitionDuration: isDragging ? '0ms' : '100ms',
					}}
				/>
			</div>

			{/* Custom thumb that appears on hover/focus/drag */}
			<div
				className="absolute h-3 w-3 rounded-full bg-namco70-ase-foreground transition-transform"
				style={{
					left: `${localValue}%`,
					transform: `translateX(-50%) scale(${isDragging || isHovering ? 1 : 0})`,
					transitionDuration: isDragging ? '0ms' : '150ms',
				}}
			/>
		</div>
	);
}
