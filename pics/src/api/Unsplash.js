import axios from 'axios'; 

export default axios.create({ 

  baseURL: 'https://api.unsplash.com',
  headers: {
          Authorization:'Client-ID 0MQyIT_-p4KeHv-jaMKiFVeQJBSPlkuRNtVHii5jpgU'
        }
      }); 

