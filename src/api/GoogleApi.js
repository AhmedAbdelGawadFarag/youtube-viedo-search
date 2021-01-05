import axios from "axios";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 7,
    key: process.env.REACT_APP_API_KEY,
  },
});
