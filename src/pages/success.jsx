import React from 'react'

export default function Success() {
  return (
    <div>
      {/* SUCESS */}
    <section className="text-gray-600 body-font mt-4 pt-5">
      <div className="container px-5 py-24 mx-auto">
        {/* Main Heading */}
        <div className="row justify-content-center py-2 text-center mb-5">
          <div className="col-lg-8 col-md-10 col-12 py-1">
            <h1 className="display-6 fw-semibold">Our Success</h1>
            <p className="pt-3">
              Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida.
              Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
            </p>
          </div>
        </div>

        {/* Success Statistics */}
        <div className="row d-flex justify-content-between idvc">
          {/* 1st Stat */}
          <div className="col-lg-2 col-md-6 col-12 mb-4 d-flex justify-content-center flex-column align-items-center">
            <h2 className="display-5 text-dark">15K+</h2>
            <p>Students</p>
          </div>

          {/* 2nd Stat */}
          <div className="col-lg-2 col-md-6 col-12 mb-4 d-flex justify-content-center flex-column align-items-center">
            <h2 className="display-5 text-dark">75%</h2>
            <p>Total success</p>
          </div>

          {/* 3rd Stat */}
          <div className="col-lg-2 col-md-6 col-12 mb-4 d-flex justify-content-center flex-column align-items-center">
            <h2 className="display-5 text-dark">35</h2>
            <p>Main questions</p>
          </div>

          {/* 4th Stat */}
          <div className="col-lg-2 col-md-6 col-12 mb-4 d-flex justify-content-center flex-column align-items-center">
            <h2 className="display-5 text-dark">26</h2>
            <p>Chief experts</p>
          </div>

          {/* 5th Stat */}
          <div className="col-lg-2 col-md-6 col-12 mb-4 d-flex justify-content-center flex-column align-items-center">
            <h2 className="display-5 text-dark">16</h2>
            <p>experience</p>
          </div>
        </div>
      </div>
    </section>
    {/* SUCESS */}
    </div>
  )
}
