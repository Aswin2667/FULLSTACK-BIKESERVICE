import axios from "axios"

const API_URL = "http://localhost:8080"

class UserService{
    saveUser(user){
        return axios.post(API_URL+"/user/register",user);
    }
    isExist(username, password){
        return axios.post(API_URL+"/user"+"/"+username+"/"+password,{});
    }
}


export default new UserService();