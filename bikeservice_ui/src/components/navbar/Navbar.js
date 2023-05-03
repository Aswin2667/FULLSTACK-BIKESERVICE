import React from 'react'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
  return (
  
<div>

<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xxl px-4 py-3 mx-auto">
        <div class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Service point</span>
        
            
            <a onClick={()=> navigate('/register')} class=" text-m mr-4 text-gray-900   dark:text-white hover:underline ml-auto hover:cursor-pointer">Register</a>
            <h7 class="mr-4">Or</h7>
            <a onClick={() => navigate("/login")} class="text-m  text-blue-900 dark:text-blue-500 hover:underline hover:cursor-pointer">Login</a>
        </div>
    </div>
</nav>

</div>

  );
}

export default Navbar