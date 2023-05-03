import React ,{useEffect,useState} from 'react'
import AfterNavbar from './navbar/AfterNavbar'
import Bookings from './Bookings'
import { useLocation, useNavigate } from 'react-router-dom'
import BookingService from '../service/BookingService'

const UserPanel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.name)
  const name = location.state.name
  const [load,setload] = useState(true);
  const [mybookings,setbookings] = useState([]);

  useEffect( () => {
    const fetchdata = async() =>{ 
    setload(true);
    try {
    const response = await BookingService.getallbooking(name);
      setbookings(response.data)
      console.log(mybookings)
  } catch (error) {
    console.log(error)
  }
  setload(false);
  };
  fetchdata();
  }, []);
  const remove = (e,ID) =>{
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
  return (
<>< AfterNavbar name = {name}/>
<div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Booking Id</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Status</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Service</th>
        <th scope="col" class="px-6 py-4 max-2xl: font-medium text-gray-900">Edit</th>
      </tr>
      
    </thead>
    {!load&& 
    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
      { mybookings.map ((mybookings)=>(
      <tr class="hover:bg-gray-100">
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div class="text-sm">
            <div class="font-medium text-gray-700"> {mybookings.bikename}</div>
          </div>
        </th>
        <td><div class="text-gray-400">  {mybookings.bookingid}</div></td>
        <td class="px-6 py-4">
          <span
            class={`inline-flex items-center gap-1 rounded-full  ${(mybookings.status==="completed") ? 'bg-green-50 text-green-600':(mybookings.status==="Ready for delivery")?'bg-purple-50 text-purple-600':'bg-red-50 text-red-500'} px-2 py-1 text-xs font-semibold `}
            // class={`inline-flex items-center gap-1 rounded-full  bg-green-50 px-2 py-1 text-xs font-semibold text-green-600`}
          >
            <span class='h-1.5 w-1.5 rounded-full bg-green-600'></span>
            {mybookings.status}
          </span>
        </td>
        <td class="px-6 py-4">{mybookings.service}</td>
        <td class="px-7 py-4 ml-auto ">
          <div class="flex  gap-4">
            <button className='p-2' onClick={() => navigate("/edit",{state:{username:name}})}>Edit</button>
            <button className='p-2' onClick={( e,ID ) => remove(e,mybookings.bookingid)}>{(mybookings.status==="completed")?"Delete":(mybookings.status==="pending")?"Cancel booking":""}</button>
          </div>
        </td>
      </tr>
      ))}
    </tbody>}
  </table>
</div>
</>
  )
}

export default UserPanel