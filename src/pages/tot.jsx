import React from 'react'
import img from "../pages/images/Group17.png"

export default function Tot() {
  return (
    <div>
         <section className="text-gray-600 body-font">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start">
            <h2 className="mb-4 display-6 fw-medium ">
              Everything you can do in a physical classroom,<span className='span2'>you can do with TOTC</span>
            </h2>
            <p className="mb-4">
              TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments, and virtual classrooms all in one secure cloud-based system.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              {/* <button className="">Learn more</button> */}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-6 text-center">
            <img
              className="img-fluid rounded"
              alt="School management software"
              src={img}
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
