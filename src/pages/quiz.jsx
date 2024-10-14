import React from 'react'
import img1 from "../pages/images/Group 92.png"
export default function Quiz() {
  return (
    <>

      <section className="text-gray-600 body-font">
      <div className="container mx-auto d-flex flex-column-reverse flex-md-row justify-content-between py-5">
        {/* Image Section (col-7 on md screens and larger) */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img 
            className="img-fluid rounded" 
            alt="hero" 
            src={img1} 
          />
        
        </div>

        {/* Text Content Section (col-5 on md screens and larger) */}
        <div className="col-12 col-md-5 d-flex  justify-content-center flex-column align-items-center text-center text-md-start">
          <h1 className="display-6 mb-4 font-weight-bold text-dark">
            Assessments,<span className='span2'> Quizzes</span>, Tests
          </h1>
          <p className="mb-4 ">
            Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.
          </p>
          <div className="d-flex justify-content-center justify-content-md-start">
            <button className="btn btn-primary btn-lg me-3">
              Get Started
            </button>
            <button className="btn btn-outline-secondary btn-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}
