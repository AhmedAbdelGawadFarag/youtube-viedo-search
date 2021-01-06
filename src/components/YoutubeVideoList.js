import React from "react";
import YoutubeVideo from "./YoutubeVideo";
import "../css/sytle.css";
import YoutubeVideoDetail from "./YoutubeVideoDetail";
class YoutubeVideoList extends React.Component {
  render() {
    let videos = this.props.videos.map((video) => (
      <YoutubeVideo key={video.id.videoId} video={video}></YoutubeVideo>
    ));

    let videosDetails = this.props.videos.map((video) => (
      <YoutubeVideoDetail
        key={video.id.videoId}
        videoDetail={video.snippet}
        videoId={video.id.videoId}
      ></YoutubeVideoDetail>
    ));

    return (
      <div className="web-page">
        <div className="current-video">{videos[0]}</div>
        <div className="video-detail-container">{videosDetails}</div>
      </div>
    );
  }
}

export default YoutubeVideoList;
