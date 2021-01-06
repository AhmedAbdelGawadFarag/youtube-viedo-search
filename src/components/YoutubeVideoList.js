import React from "react";
import YoutubeVideo from "./YoutubeVideo";
import "../css/sytle.css";
import YoutubeVideoDetail from "./YoutubeVideoDetail";
class YoutubeVideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentVideo: null };
  }
  ChangeVideo(video) {
    this.setState({
      currentVideo: <YoutubeVideo video={video}></YoutubeVideo>,
    });
  }
  render() {
    // let videos = this.props.videos.map((video) => (
    //   <YoutubeVideo key={video.id.videoId} video={video}></YoutubeVideo>
    // ));

    let currentvideo = this.state.currentVideo;
    if (currentvideo == null && this.props.videos.length !== 0) {
      currentvideo = <YoutubeVideo video={this.props.videos[0]}></YoutubeVideo>;
    }
    let videosDetails = this.props.videos.map((video) => (
      <YoutubeVideoDetail
        key={video.id.videoId}
        video = {video}
        changeVideo={(video) => this.ChangeVideo(video)}
      ></YoutubeVideoDetail>
    ));

    return (
      <div className="web-page">
        {this.props.videos.length !== 0 ? (
          <div className="current-video">{currentvideo}</div>
        ) : (
          <div></div>
        )}
        ;
        {this.props.videos.length !== 0 ? (
          <div className="video-detail-container">{videosDetails}</div>
        ) : (
          <div></div>
        )}
        ;
      </div>
    );
  }
}

export default YoutubeVideoList;
