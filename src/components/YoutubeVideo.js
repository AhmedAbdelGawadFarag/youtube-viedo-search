import React from "react";
class YoutubeVideo extends React.Component {
  render() {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}
      ></iframe>
    );
  }
}

export default YoutubeVideo;
