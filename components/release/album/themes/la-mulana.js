import LaMulanaHead from './la-mulana-head';
import LaMulanaTrack from './la-mulana-track';
import LaMulanaTracklist from './la-mulana-tracklist';
import LaMulanaCallToAction from './la-mulana-call-to-action';
import LaMulanaCredits from './la-mulana-credits';
import LaMulanaDescription from './la-mulana-description';
import LaMulanaFooter from './la-mulana-footer';

const laMulanaTheme = {
	name: 'la-mulana',
	components: {
		ReleaseHead: LaMulanaHead,
		ReleaseTrack: LaMulanaTrack,
		ReleaseTracklist: LaMulanaTracklist,
		ReleaseDescription: LaMulanaDescription,
		ReleaseCallToAction: LaMulanaCallToAction,
		ReleaseCredits: LaMulanaCredits,
		ReleaseFooter: LaMulanaFooter,
	},
};

export default laMulanaTheme;
