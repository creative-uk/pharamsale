import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Admin from './pages/Admin.jsx';
import Home from './pages/Home.jsx';
import AdminLayout from './Layouts/AdminLayout.jsx';
import UserLayout from './Layouts/UserLayout.jsx';
import PublicLayout from './Layouts/PublicLayout.jsx';
import { useDispatch,useSelector } from 'react-redux'
import { updateUser } from './redux/AuthSlice.jsx';
import ForgetPassword from './pages/ForgetPassword.jsx';

const App = () => {
  const user=useSelector((state)=>state.Auth.user)
  const disptch=useDispatch()
    useEffect(()=>{
           
          disptch(updateUser())
    },[user])
  return (
    <>
 
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<UserLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Admin />} />
          </Route>
          <Route path='/' element={<PublicLayout />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='forgot-password' element={<ForgetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
