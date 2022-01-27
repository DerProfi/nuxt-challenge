import axios from "axios";
import  {UserTypes} from "../types/UserData.interface";

export default {
  api(username: string): Promise<UserTypes>{  
    return axios.get(`https://api.github.com/users/${username}`)
  }
}