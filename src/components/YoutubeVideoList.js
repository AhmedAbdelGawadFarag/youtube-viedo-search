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
      ></YoutubeVideoDetail>
    ));

    return (
      <div>
        {/* {videos[0]} */}
        <div className="image-container">{videosDetails}</div>
      </div>
    );
  }
}

export default YoutubeVideoList;
