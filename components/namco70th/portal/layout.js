import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import '@hackernoon/pixel-icon-library/fonts/iconfont.css';

gsap.registerPlugin(useGSAP);

export default function Layout({ children }) {
	return (
		<div className="min-h-dvh bg-namco70-p-background">
			<main className="h-full w-full relative">{children}</main>
		</div>
	);
}
