import axios from 'axios';

const KEY = 'AIzaSyDx-Xp-M8TtHvc8omqXOPHGG49IU8uTFnY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
  
});

