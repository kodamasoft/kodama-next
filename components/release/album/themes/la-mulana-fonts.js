import { Press_Start_2P, Share_Tech_Mono } from 'next/font/google';

export const pressStart2P = Press_Start_2P({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-press-start-2p',
});

export const shareTechMono = Share_Tech_Mono({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-share-tech-mono',
});

export const lmFontVars = `${pressStart2P.variable} ${shareTechMono.variable}`;
