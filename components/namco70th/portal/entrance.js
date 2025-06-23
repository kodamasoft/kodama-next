import { useGSAP } from '@gsap/react';
import cn from '../../../lib/cn';
import Logo from '../../../public/assets/namco70th/portal/images/full-logo-white.svg';
import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

export default function PortalEntrance({ className, ...props }) {
	const [screen, setScreen] = useState('introduction');

	useEffect(() => {
		if (screen === 'introduction') {
			// Automatically switch to enter screen after 7 seconds
			const timer = setTimeout(() => {
				setScreen('enter');
			}, 4500);

			return () => clearTimeout(timer);
		}
	}, [screen]);

	return (
		<div
			className={cn(
				'w-full h-full min-h-dvh bg-namco70-p-background cursor-pointer',
				className
			)}
			{...props}
		>
			<SceneWrapper screen={screen} />
		</div>
	);
}

function SceneWrapper({ screen }) {
	if (screen === 'introduction') {
		return <Introduction />;
	}
	return <Enter />;
}

function Introduction() {
	const introRef = useRef(null);
	useGSAP(() => {
		gsap.set(introRef.current, {
			opacity: 0,
		});

		gsap.to(introRef.current, {
			opacity: 1,
			duration: 1.5,
			ease: 'power2.out',
		});

		gsap.to(introRef.current, {
			opacity: 0,
			duration: 1.5,
			delay: 3,
			ease: 'power2.in',
		});
	});

	return (
		<div className="flex flex-col items-center justify-center h-full w-full max-w-5xl mx-auto px-6 md:px-12">
			<div
				ref={introRef}
				className="space-y-6 text-center font-namco70-mono text-lg lg:text-2xl"
			>
				<p>70 years ago, Nakamura Seisakusho was founded.</p>

				<p>
					48 years ago, the Namco name was adopted, and soon after,
					the company ventured into the fledgling realm of video
					gaming.
				</p>

				<p>
					Now, Namco is recognized as one of the most historically
					influential companies in the industry, with a nigh-unrivaled
					musical legacy to match.
				</p>

				<p>
					A collective of musicians from circles the world over—the
					United Tribute Arrange Force—have assembled to pay tribute
					to this legacy.
				</p>

				<p>
					An unprecedented journey through decades of Namco musical
					history begins here...
				</p>
			</div>
		</div>
	);
}

function Enter() {
	const enterRef = useRef(null);

	useGSAP(() => {
		gsap.set(enterRef.current, {
			opacity: 0,
		});
		gsap.to(enterRef.current, {
			opacity: 1,
			duration: 1.5,
			ease: 'power2.out',
		});
	});

	return (
		<div
			ref={enterRef}
			className="flex flex-col items-center justify-center h-full w-full gap-8 lg:gap-12"
		>
			{/* Album container */}
			<Logo className="w-64 lg:w-96" />
			<p className="font-namco70-mono text-2xl animate-pulse lg:text-4xl">
				Click to Enter
			</p>
		</div>
	);
}
