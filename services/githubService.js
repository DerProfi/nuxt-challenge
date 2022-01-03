import axios from "axios";

export default {
  api(username){
    return axios.get(`https://api.github.com/users/${username}`)
  }
}
 