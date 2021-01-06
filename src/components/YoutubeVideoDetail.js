import React from "react";
class YoutubeVideoDetail extends React.Component {
  onClick(event){
    event.preventDefault();
  }
  render() {
    const image = this.props.videoDetail.thumbnails.default;
    const title = this.props.videoDetail.title;
    console.log(this.props.videoId);
    return (
      <a href={`https://www.youtube.com/embed/${this.props.videoId}`} onClick={(event)=>this.onClick(event)}>
        <div>
          <img src={image.url}></img>
          <p>{title}</p>
        </div>
      </a>
    );
  }
}
export default YoutubeVideoDetail;
