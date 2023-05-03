import React ,{useState} from 'react'
import Navbar from './navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';
import OwnerService from '../service/OwnerService';
const  Login = () => {
const navigate = useNavigate();
const [username,setusername] = useState("");
const [password,setpassword] = useState("");

const getname= (e) =>{
setusername(e.target.value);
}
const getpass= (e) =>{
  setpassword(e.target.value);
}
const usercheck =(e) =>{
  e.preventDefault();
   UserService.isExist(username,password).then(res=>{
    return res.data?navigate("/user",{state:{name:username}}):alert("please register first")
   })
 }
 


const ownercheck =(e) =>{
  e.preventDefault();
  OwnerService.isExist(username,password).then(res=>{
   return res.data?navigate("/owner",{state:{name:"Admin"}}):alert("please register first")
  })
}

  return (
    <>
    <Navbar />
    <div className='flex place-items-center justify-center mt-20 border-cyan-400'>
    <form>
      <div class="mb-6">
        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> username</label>
        <input type="username"  name="username" onChange={getname} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
      </div>
     
      <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> password</label>
        <input type="password" name="password" onChange={getpass} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
      </div>
      <button type="submit" onClick={usercheck} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      <button type="submit"  onClick={ownercheck} class=" ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login as owner</button>
    </form>
    </div>
    </>
  )
}

export default Login