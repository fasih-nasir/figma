import { useState } from 'react'
import { useLocation } from 'react-router-dom'
// ROUTER
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// ROUTER

// AUTH 
import Login from './auth/login'
import Create from './auth/create'
// AUTH 
// PAGES
import Home from './pages/home'
// PAGES

import './App.css'
import Navbar from './components/navbar'
function App() {

  const location = useLocation();
  return (
   <>

 {!location.pathname.startsWith("/auth") && <Navbar/>}


<Routes>
<Route path='/' element={<Home/>} ></Route> 
<Route path='/auth/login' element={<Login/>} ></Route> 
<Route path='/auth/create' element={<Create/>} ></Route>  

  </Routes> 

   </>
  )
}

export default App
