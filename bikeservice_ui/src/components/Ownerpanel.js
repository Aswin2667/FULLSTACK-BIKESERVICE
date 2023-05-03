import React ,{useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import AfterNavbar from './navbar/AfterNavbar';
import OwnerService from '../service/OwnerService'
import BookingService from '../service/BookingService';
const Ownerpanel = () => {
const navigate = useNavigate();
const [load,setload] = useState(true);
const [bookingupdate,setbookingupdate] = useState({
  username:"",
  bookingid:"",
  bikename:"",
  bikeno:"",
  status:"pending",
  service:"",
  date:""
})
  const [mybookings,setbookings] = useState([]);
useEffect( () => {
  const fetchdata = async() =>{ 
  setload(true);
  try {
  const response = await OwnerService.getAllBookings();
    setbookings(response.data)
    console.log(mybookings)
} catch (error) {
  console.log(error)
}
setload(false);
};
fetchdata();
}, []);
const handlechange = (e,bikename,service,id,date,bikeno,username) =>{
    setbookingupdate({
      username:username,
      bookingid:id,
      bikename:bikename,
      bikeno:bikeno,
      status:e.target.value,
      service:service,
      date:date
    });
console.log(bookingupdate);
}
const remove = (e,ID)=>{
  e.preventDefault();
  BookingService.deleteBooking(ID).then((res)=>{
    if(mybookings){
      setbookings((prevbookings)=>{
        return prevbookings.filter((mybookings)=>mybookings.bookingid !==ID)
      })
    }
    alert("booking deleted :)")
  })

}
const update = (e,booking)=>{
  e.preventDefault();
    BookingService.UpdateBooking(booking).then(res=>{
      alert(res.data);
    })
}

  return (
    <>
    <AfterNavbar name ="Owner" display ='true'/>
    <div>
        <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Booking Id</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Status</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Service</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Edit</th>
      </tr>
    </thead>
    {!load&& 
    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
      { mybookings.map((mybookings)=> (
      <tr class="hover:bg-gray-50">
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
          
          <div class="text-sm">
            <div class="font-medium text-gray-700">{mybookings.bikename}</div>
          </div>
        </th>
        <td><div class="text-gray-400">  {mybookings.bookingid}</div></td>
        <td class="px-6 py-4">
          <span
            class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
          >
            <select  name='status' defaultValue={mybookings.status} onClickCapture={(e,bikename,service,id,date,bikeno,username)=>handlechange(e,mybookings.bikename,mybookings.service,mybookings.bookingid,mybookings.date,mybookings.bikeno,mybookings.username)} class="shadow-sm bg-gray-60 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1  pr-2 dark:bg-gray-700 dark:border-gray-60 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                <option >Pending</option>
                <option >Ready for delivery</option>
                <option>Completed</option>
        </select>
          </span>
        </td>
        <td class="px-6 py-4">{mybookings.service}</td>
        <td class="px-7 py-4">
          <div class="flex gap-4">
                       <button className='mr=6' onClick={(e,ID)=>remove(e,mybookings.bookingid)}>Delete</button>
                       <button className='mr=6' onClick={(e,booking)=>update(e,bookingupdate)} >Save</button>
          </div>
        </td>
      </tr>
      ))}
    </tbody>
}
  </table>
</div>
    </div>
    </>
  )
}

export default Ownerpanel