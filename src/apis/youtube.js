import axios from "axios";

const KEY = 'AIzaSyC31koLPlI6fTXAGTKMp_j8ZAFYFz-Jy5Y';
 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});