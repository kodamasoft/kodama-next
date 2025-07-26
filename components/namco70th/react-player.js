import _ReactPlayer from 'react-player';

// Workaround for the issue with ReactPlayer not accepting on dynamic import with NextJS 13
// https://github.com/cookpete/react-player/issues/1455#issuecomment-1207154843
function ReactPlayer({ playerRef, ...props }) {
	return <_ReactPlayer ref={playerRef} {...props} />;
}

export default ReactPlayer;
