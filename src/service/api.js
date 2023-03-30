import axios from "axios";
      
 const api = axios.create({
   baseURL: "https://appvideo.herokuapp.com",  
});

export default api