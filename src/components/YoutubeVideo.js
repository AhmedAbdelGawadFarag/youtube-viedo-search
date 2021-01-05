import React from "react";
class YoutubeVideo extends React.Component {
  render() {
    return (
      <div>
        <iframe
          width="1000px"
          height="350%"
          src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}
        ></iframe>
      </div>
    );
  }
}

export default YoutubeVideo;
