import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import "../pages/page.css"
import logo from "../pages/images/logo.png"
import Group451 from "../pages/images/Group451.png"
import download from "../pages/images/download.png"
export default function Navbar() {
  return (
    <div className='container-fluid px-5 bg-img'>
    {/* // NAVBAR */}
    <nav className="navbar navbar-expand-lg py-1">
        <div className="container-fluid">
          {/* Left-side logo */}
          <a className="navbar-brand" href="#">
            <img src={logo} className='img-fluid col-7' alt="" />
          </a>
          
          {/* Navbar toggler for smaller screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Main navigation links and buttons */}
          <div className="collapse col-10 d-flex justify-content-between navbar-collapse ">
            <ul className="navbar-nav d-flex flex-row col-10 align-items-center justify-content-center mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/career">Career</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
     
            </ul>

            {/* Right-side login/signup buttons */}
            <div className="d-flex float-end btnlf">
             
              <Button type="primary" className="create  me-2 col-7">
                <Link to={"/auth/login"}>Login</Link>
              </Button>
              <Button type="default" className="login  col-7">
                <Link to={"/auth/create"}>Signup</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Off-canvas for smaller screens */}
      <div className="offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          {/* Logo on the top right */}
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">YourLogo</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column align-items-center">
          {/* Centered navigation links */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/career">Career</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
          </ul>

          {/* Bottom center login/signup buttons */}
          <div className="d-flex flex-column align-items-center mt-auto mb-3">
            <Button type="primary" className="mb-2">Login</Button>
            <Button type="default">Signup</Button>
          </div>
        </div>
      </div>
    {/* // NAVBAR */}
    {/* HEAER */}
    <div className='container-fluid  contheader px-2 d-flex flex-column flex-lg-row justify-content-center align-items-center'>
      <div className="col-lg-6 col-12 headdiv1">
        <h1 className='display-6 fw-medium'><span className='org'>Studying</span> Online is now much easier</h1>
<p>TOTC is an interesting platform that will teach you in more an interactive way</p>
     <div>
     <Button type="default" className="login bntm col-3 p-3">Join for free</Button>

     </div>
      </div>
      <div className="col-lg-6 idiv col-12 d-flex justify-content-center align-items-center ">
<img src={Group451} className='img-fluid' alt="" />
<img src={download} className='i1 img-fluid position-absolute h-100 mt-3 ' alt="" />


      </div>
    </div>
    {/* HEAER */}

    </div>
  )
}
