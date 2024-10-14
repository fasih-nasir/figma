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
import Blog from './pages/blog'
// PAGES

import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {

  const location = useLocation();
  return (
   <>

 {!location.pathname.startsWith("/auth") && <Navbar/>}


<Routes>
<Route path='/' element={<Home/>} ></Route> 
<Route path='/auth/login' element={<Login/>} ></Route> 
<Route path='/auth/create' element={<Create/>} ></Route>  
<Route path='/auth/blog' element={<Blog/>} ></Route>  


  </Routes> 
  {!location.pathname.startsWith("/auth") && <Footer/>}

   </>
  )
}

export default App
