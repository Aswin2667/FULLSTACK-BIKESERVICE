import React ,{useState} from 'react'
import AfterNavbar from './navbar/AfterNavbar'
import { useLocation, useNavigate } from 'react-router-dom'
import BookingService from '../service/BookingService'
const Addbooking = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const nam = location.state.name;
  const [booking, setbooking] = useState({
    username:nam,
    bookingid:"",
    bikename:"",
    bikeno:"",
    status:"pending",
    service:"",
    date:""
  });
const handlechange = (e)=>{
  const value = e.target.value;
  console.log(booking)

  setbooking({...booking,[e.target.name]:value});
}
const addbooking = (e) =>{
  e.preventDefault();
  BookingService.addbooking(booking).then(res=>{ 
    console.log(res.data)
    navigate("/user",{state:{name:nam}})
    })
}
const disabledate = ()=>{
  var dd,yyyy,mm;
  var today = new Date();
  dd = today.getDate()+1;
  mm=today.getMonth()+1;
  yyyy=today.getFullYear();
  return yyyy+"-"+mm+"-"+dd;
}
const clear = ()=>{
  setbooking({
    bookingid:"",
    bikename:"",
    bikeno:"",
    status:"pending",
    service:"",
    date:""
  })
}
  return (
    <>
    <AfterNavbar name = {location.state.name}/>
    <div>
        <div className='flex place-items-center justify-center mt-20 border-cyan-400'>
    <form>
      <div class="mb-6">
        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Bike Name</label>
        <input name="bikename" value={booking.bikename} onChange={(e)=>handlechange(e)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Bike No</label>
        <input name="bikeno" value={booking.bikeno} onChange={(e)=>handlechange(e)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
      </div>
      <div class="mb-6">
        <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Service</label>
        {/* <input type="" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input> */}
        <select name="service" value ={booking.service} onChange={(e)=>handlechange(e)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                <option>oil change</option>
                <option>Check up</option>
                <option>Water wash</option>
        </select>
     </div>
      <div class="mb-6">
        <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Date</label>
        <input name="date"  type= "date"  value={booking.date} min={disabledate()} onChange={(e)=>handlechange(e)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
      </div>
      <button type="submit" onClick={addbooking} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book</button>
      <button type="submit" onClick = {clear} 
  class=" ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">clear  </button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Addbooking