import axios from "axios";

const KEY = 'AIzaSyCdrnkxkoPfkf8FfCA85A2rLsNnewlPBhI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});