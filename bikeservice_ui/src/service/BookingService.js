import axios from "axios"
const API_URL = "http://localhost:8080/booking"
class BookingService{
    addbooking(booking){
        return axios.post("http://localhost:8080/booking/addbooking",booking)
    }
    getallbooking(username){
        return axios.get(API_URL+"/all/"+username)
    }
    deleteBooking(ID){
        return axios.delete(API_URL+"/"+ID)
    }
    UpdateBooking(booking){
        return axios.put(API_URL+"/update",booking);
    }
}
export default new BookingService();