import React from 'react'
import img1 from "../pages/images/Group 40.png"
import img2 from "../pages/images/Rectangle 37.png"
export default function Latest() {
  return (
    <>
       <section className="text-dark py-5">
        <div className="container d-flex justify-content-center py-4 align-items-center">
            <div className="col-lg-5 col-12 text-center py-4">
                <h2>Lastest News and Resources</h2>
                <p>See the developments that have occurred to TOTC in the world</p>
            </div>
        </div>
      <div className="container d-flex flex-lg-row flex-column justify-content-between">
        {/* Image Section (col-12 for xs screens and col-6 for lg screens) */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <img 
            className="img-fluid rounded" 
            alt="feature" 
            src={img1}
          />
          <div className="mb-4">
            <h3 className="text-dark py-3  font-weight-bold mb-3">Latest News and Resources</h3>
            <p className="">
              See the developments that have occurred to <br /> TOTC in the world
            </p>
          </div>
        </div>

        {/* News and Resources Section (col-12 for xs screens and col-6 for lg screens) */}
        <div className="col-12 col-lg-5 d-flex flex-column justify-content-between">

          <div className="mb-4">
            <h3 className="h5 text-dark mb-2">
              Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand
            </h3>
            <span className="text-muted">PRESS RELEASE</span>
            <p>
              Class Technologies Inc., the company that created Class,...
            </p>
            <a href="#" className="text-primary">Read more</a>
          </div>

          <div className="mb-4">
            <h3 className="h5 text-dark mb-2">
              Zoom’s earliest investors are betting millions on a better Zoom for schools
            </h3>
            <span className="text-muted">NEWS</span>
            <p>
              Zoom was never created to be a consumer product. Nonetheless, the...
            </p>
            <a href="#" className="text-primary">Read more</a>
          </div>

        
  
        </div>
      </div>
    </section>

    </>
  )
}
