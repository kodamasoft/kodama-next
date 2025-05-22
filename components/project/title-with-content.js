/* https://github.com/samselikoff/2022-06-09-resizable-panel/commit/fe04a842367657b4acb1058c454d3eca739c419d */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import React from 'react';

import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import useMeasure from 'react-use-measure';
import Link from 'next/link';

let duration = 0.25;

export default function WrappableParagraph({ title, children }) {
	let [opened, setOpened] = useState(false);
	let { asPath } = useRouter();
	const encodedTitleId = encodeURIComponent(title);

	useEffect(() => {
		if (asPath.includes(`#${encodedTitleId}`)) {
			setOpened(true);
			setTimeout(() => {
				document
					.getElementById(encodedTitleId)
					.scrollIntoView({ behavior: 'smooth' });
			}, duration * 1000);
		}
	}, [asPath, encodedTitleId]);

	async function copyLink(id) {
		let link = window.location.href.split('#')[0] + '#' + id;
		try {
			await navigator.clipboard.writeText(link);
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	}

	return (
		<MotionConfig transition={{ duration }}>
			<>
				<h2
					onClick={() => setOpened(!opened)}
					className="mb-0 mt-4 inline-block"
					id={encodedTitleId}
				>
					{title}
					{opened ? (
						<FaChevronDown className="inline-block ml-2 mb-1" />
					) : (
						<FaChevronRight className="inline-block ml-2 mb-1" />
					)}
				</h2>
				<Link
					href={`#${encodedTitleId}`}
					onClick={() => copyLink(encodedTitleId)}
					className="ml-2 text-violet-500 opacity-20 hover:opacity-100 focus:opacity-100 transition-opacity no-underline text-2xl"
				>
					#
				</Link>
			</>
			<ResizablePanel isOpened={opened}>
				{opened ? children : null}
			</ResizablePanel>
		</MotionConfig>
	);
}

function ResizablePanel({ isOpened, children }) {
	let [ref, { height }] = useMeasure();

	return (
		<motion.div
			animate={{ height: isOpened ? height : 0 || 'auto' }}
			className="relative overflow-hidden"
		>
			<AnimatePresence initial={false}>
				<motion.div
					key={JSON.stringify(children, ignoreCircularReferences())}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<div
						ref={ref}
						className={`${height ? 'absolute' : 'relative'}`}
					>
						{children}
					</div>
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
}

/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.
*/
const ignoreCircularReferences = () => {
	const seen = new WeakSet();
	return (key, value) => {
		if (key.startsWith('_')) return; // Don't compare React's internal props.
		if (typeof value === 'object' && value !== null) {
			if (seen.has(value)) return;
			seen.add(value);
		}
		return value;
	};
};
