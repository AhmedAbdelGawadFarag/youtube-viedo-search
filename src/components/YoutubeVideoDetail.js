import React from "react";
class YoutubeVideoDetail extends React.Component {
  onClick(event) {
    event.preventDefault();
    this.props.changeVideo(this.props.video);
  }
  render() {
    const videoDeatil = this.props.video.snippet;
    const image = videoDeatil.thumbnails.default;
    const title = videoDeatil.title;

    return (
      <a
        href={`https://www.youtube.com/embed/${this.props.videoId}`}
        onClick={(event) => this.onClick(event)}
      >
        <div>
          <img src={image.url}></img>
          <p>{title}</p>
        </div>
      </a>
    );
  }
}
export default YoutubeVideoDetail;
