import React from 'react'
import img1 from "../pages/images/Category.png"
import cat1 from "../pages/images/Book (1).png"
import cat2 from "../pages/images/Book (2).png"
import cat3 from "../pages/images/Book (3).png"
import cat4 from "../pages/images/Book (4).png"
import cat5 from "../pages/images/Book (5).png"
import cat6 from "../pages/images/Book (6).png"
import detail from "../pages/images/Detail.png"

export default function Explore() {
  return (
    <>
      {/*  */}
      <div className="container-fluid d-flex flex-column px-lg-5">
<div className='px-lg-3'>
<h3 className='fw-bolder'>Explore Course</h3>
<p>Ut sed eros finibus,placerat orci id , daplbus</p>
</div>
{/*  */}
<div className='col-12 d-flex flex-row justify-content-between align-items-center'>
<div className="col-6 d-flex flex-row align-items-start justify-content-start">
    <div className="col-2">

    </div>
    <div className="col-2">
        <img src={cat1} className='img-fluid col-12' alt="" />
    </div>
    <div className="col-2">
        <img src={cat2} className='img-fluid col-12' alt="" />

    </div>
    <div className="col-2">
        <img src={cat3} className='img-fluid col-12' alt="" />

    </div>
    <div className="col-2">
        <img src={cat4} className='img-fluid col-12' alt="" />

    </div>
    <div className="col-2">
        <img src={cat5} className='img-fluid col-12' alt="" />

    </div>
    <div className="col-2">
        <img src={cat6} className='img-fluid col-12' alt="" />

    </div>
</div>
<div className="col-1 mx-2"></div>
<div className="col-5">
    <img src={detail} className='img-fluid' alt="" />
</div>

</div>

{/*  */}
      </div>
      {/*  */}
    </>
  )
}
