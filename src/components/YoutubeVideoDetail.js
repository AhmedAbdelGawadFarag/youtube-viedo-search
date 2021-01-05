import React from "react";
class YoutubeVideoDetail extends React.Component {
  render() {
    const image = this.props.videoDetail.thumbnails.default;
    const title = this.props.videoDetail.title;

    return (
      <div>
        <img src={image.url}></img>
        <p>{title}</p>
      </div>
    );
  }
}
export default YoutubeVideoDetail;
