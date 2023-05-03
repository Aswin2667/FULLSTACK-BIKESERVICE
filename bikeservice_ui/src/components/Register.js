import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserService from "../service/UserService";
import Navbar from './navbar/Navbar';
const Register = () => {

  const navigate = useNavigate();
  const [user , setUser] = useState({
    username : "",
    emailid : "",
    password : ""
});
const handlechange=(e) =>{
  const value = e.target.value
  setUser({...user,[e.target.name]:value})
};
const userRegister = (e)=>{
  e.preventDefault();
  UserService.saveUser(user).then(() => navigate("/login"));
};
const ownerRegister = (e)=>{
  e.preventDefault();
  UserService.saveUser(user).then(() => navigate("/login"));
};
  return (
    <>
    <Navbar />
       <div className='flex place-items-center justify-center mt-20 border-cyan-400'>
<form>
  <div class="mb-6">
    <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> username</label>
    <input type="username" vlaue={user.username} onChange={(e)=>handlechange(e)} name="username" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
  </div>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> email</label>
    <input type="email" name="emailid" vlaue={user.emailid} onChange={(e)=>handlechange(e)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> password</label>
    <input type="password" name="password" vlaue={user.password} onChange={(e)=>handlechange(e)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
  </div>
  <button type="submit" onClick={userRegister} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register as customer </button>
  <button type="submit"  onClick={ownerRegister} class="ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register as owner</button>
</form>
</div>
</>

  )
}

export default Register