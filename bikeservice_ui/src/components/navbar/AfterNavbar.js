import React from 'react'
import { useNavigate } from 'react-router-dom';

const AfterNavbar = (props) => {
    const navigate = useNavigate();
  return (
    <div>
<div>
<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xxl px-4 py-3 mx-auto">
        <div class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Service point</span>
          <h1>Owner Panel</h1>
            {props.name !=="Owner" &&
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">

                <li>
                    <a onClick={()=>navigate("/addbooking",{state:{name:props.name}})} class="text-gray-900 dark:text-white hover:underline hover:cursor-pointer">Add Booking</a>
                </li>
                <li>
                    <a onClick={() => navigate("/mybookings",{state:{name:props.name}})} class="text-gray-900 dark:text-white hover:underline hover:cursor-pointer">My Bookings</a>
                </li>
            </ul>
}
            <label onClick={()=> navigate('/')} class=" text-m mr-4 text-gray-900   dark:text-white  ml-auto hover:cursor-pointer">Logged in as {props.name}</label>
        </div>
       
    </div>
</nav>
</div>
    </div>
  )
}

export default AfterNavbar