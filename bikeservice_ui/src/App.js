import './App.css';
import Login from './components/Login';
import Navbar from './components/navbar/Navbar';
import Register from './components/Register';
import Bookings from './components/Bookings';
import Edit from './components/Edit';
import Addbooking from './components/Addbooking';
import Ownerpanel from './components/Ownerpanel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPanel from './components/UserPanel';
function App() {
  const data = "";
  return (
    <>
        <BrowserRouter> 
        <Routes>
        <Route path='/owner' element={<Ownerpanel />}></Route>
        <Route path='' element={<>  <Navbar />
            <h1 className='flex justify-center mt-44'>WELCOME</h1>
         </>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/mybookings' element={<Bookings />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/edit' element={<Edit />}></Route>
          <Route path='/addbooking' element={<Addbooking />}></Route>
          <Route path='/user' element={<UserPanel />}> </Route>
        </Routes>
        </BrowserRouter>
  </>
      );
}
export default App;
