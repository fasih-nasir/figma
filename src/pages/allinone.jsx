import React from 'react'

export default function Allinone() {
  return (
    <div>
        {/* ALL IN ONE */}
    <section className="text-gray-600 body-font mt-5 py-5">
      <div className="container px-5 py-24 mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-20">
          <h1 className="display-6 fw-semibold text-dark mb-4">All-In-One <span className='colr'>Cloud Software.</span></h1>
          <p className=" text-secondary mx-auto w-lg-50">
            TOTC is one powerful online software suite that combines all the tools <br /> needed to run a successful school or office.
          </p>
          <div className="d-flex justify-content-center mt-4">
            <div className="w-25 h-1 rounded bg-primary"></div>
          </div>
        </div>

        {/* Features Section */}
        <div className="row g-4">
          <div className="col-md-4 text-center d-flex flex-column align-items-center">
            <div className="icon bg-light rounded-circle mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-50 h-50" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h5 className="text-dark">Online Billing, Invoicing, & Contracts</h5>
            <p className="text-muted">Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts.</p>
         
          </div>

          <div className="col-md-4 text-center d-flex flex-column align-items-center">
            <div className="icon bg-light rounded-circle mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-50 h-50" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h5 className="text-dark">Easy Scheduling & Attendance Tracking</h5>
            <p className="text-muted">Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.</p>
            
          </div>

          <div className="col-md-4 text-center d-flex flex-column align-items-center">
            <div className="icon bg-light rounded-circle mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-50 h-50" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h5 className="text-dark">Customer Tracking</h5>
            <p className="text-muted">Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization.</p>
           
          </div>
        </div>

        {/* Button */}
   
      </div>
    </section>
    {/* ALL IN ONE */}
    </div>
  )
}
