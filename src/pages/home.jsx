import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import logo from "../pages/images/logo.png"
import Group451 from "../pages/images/Group451.png"
import download from "../pages/images/download.png"
// PAGES
import Success from './success';
import Allinone from './allinone';
import Tot from './tot';
import Explore from './explore';
import Quiz from './quiz';
import Latest from './latest';
// PAGES

export default function Home() {
  return (
    <>
  {/* HEAER */}
  <div className='container-fluid bg-img contheader px-lg-5 px-4 d-flex flex-column flex-lg-row justify-content-center align-items-center'>
      <div className=" px-lg-4 col-lg-6 col-12 headdiv1">
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
    {/* Sucess */}
<Success/>
    {/* Sucess */}
    {/* ALL IN ONE */}
<Allinone/>
    {/* ALL IN ONE */}
{/* TOT */}
<Tot/>
{/* TOT */}
{/* QUIZ */}
<Quiz/>
{/* QUIZ */}

{/* EXPLORE */}
<Explore/>
{/* EXPLORE */}
{/* LATEST */}
<Latest/>
{/* LATEST */}



    </>
  )
}
