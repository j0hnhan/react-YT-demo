import React from 'react';

const VideoDetail = function(props) {
	const video = props.video;

	if(!video) {
		return <div>Loading...</div>;
	}
	const videoId = video.id.videoId;
	const url = 'http://www.youtube.com/embed/' + videoId;

	return (
		<div className="video-detial col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="detials">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;