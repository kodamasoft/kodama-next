// Yggdrasil theme

import YggdrasilTracklist from './yggdrasil-tracklist';
import YggdrasilYouTubeEmbed from './yggdrasil-youtube-embed';

const yggdrasilTheme = {
	name: 'yggdrasil',
	components: {
		ReleaseTracklist: YggdrasilTracklist,
		ReleaseYouTubeEmbed: YggdrasilYouTubeEmbed,
	},
};

export default yggdrasilTheme;
