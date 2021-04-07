import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
        <div className="loadme">

            <div className="ui active centered inline loader"></div>
        </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui">
          {video.snippet.title.replace(/&amp;/g, "&").replace(/&#39;/g, " ")}
        </h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
