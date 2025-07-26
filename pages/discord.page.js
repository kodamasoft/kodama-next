import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { DISCORD_URL } from '../lib/constants'; // Import the discordUrl from lib/constants.js

export default function DiscordRedirect() {
	const router = useRouter();

	useEffect(() => {
		// Redirect to Discord URL
		window.location.href = DISCORD_URL;
	}, []);

	return null; // This component doesn't render anything
}
