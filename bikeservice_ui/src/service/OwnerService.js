import axios from "axios"
const API_URL = "http://localhost:8080"
class OwnerService{

    saveUser(owner){
        return axios.post(API_URL+"/ownwer/login",owner);
    }
    isExist(username, password){
        return axios.post(API_URL+"/owner/login/"+username+"/"+password,{})
    }
    getAllBookings(){
        return axios.get(API_URL+"/owner/allbooking")
    }

}

export default new OwnerService();