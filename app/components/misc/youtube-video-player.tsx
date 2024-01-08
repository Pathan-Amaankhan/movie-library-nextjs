'use client';
import React from 'react';
import YouTube, {YouTubeProps} from "react-youtube";

interface Props {
	props: YouTubeProps
}

const YoutubeVideoPlayer = ( { props }: Props ) => {
	return (
		<YouTube { ...props } />
	);
};

export default YoutubeVideoPlayer;