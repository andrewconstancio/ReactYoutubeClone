import axios from 'axios';

const KEY  = "AIzaSyDquS1OWq-fUmmSV8Ct195jFgIa2zn-Ubo";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
}); 