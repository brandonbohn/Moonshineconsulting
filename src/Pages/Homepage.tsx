import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../homepage.css';
export const Homepage = () => {
  return (
    <div>
         <div className="card w-100 rounded-0 border-0" style={{ background: "#212529" }}>
        <div className="row align-items-center card-body mx-0 px-0">
          <div className="col-12 col-md-6 text-center">
            <img src="./images/moonshine.jpg" className="bg-dark img-fluid" alt="mom3"
              width={400}
              height={400} />
          </div>
          <div className="col-12 col-md-6 text-white">
            <h1 className='title'>Welcome to Moonshine Consulting</h1>
            <a href="" className="btn btn-warning btn-block btn-lg mt-3">Explore the Blog</a>
          </div>
        </div>
      </div>
      {/* Main content container */}
      <div className="container">
        <div className="row card-row">
          {/* Left column: Senior Health Tips and Rehab Solutions */}
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-start">
            <div style={{ paddingTop: "100px", width: "100%" }}>
              <div className="card h-100 w-100 mb-5">
                <h1>Senior Health Tips</h1>
                <p>
                  Expert tips from a Nurse that has used her compassion to get families and seniors through tough times as they transition throughout their later life.
                </p>
                <a href="" className="btn btn-warning">Read More</a>
              </div>
              {/* Make Rehab Solutions card visible and styled like the others */}
              <div className="card h-100 w-100 mb-5">
                <h1>Rehab Solutions</h1>
                <p style={{ color: "#212529" }}>
                  Personalized recommendations on how to get rehabilitated and back to living life to your fullest, or living your best life with your needs in mind.
                </p>
                <a href="" className="btn btn-warning">Read More</a>
              </div>
            </div>
            {/* About This section under blog cards */}
            <div className="mt-4">
              <div className="card h-100 w-100">
                <h1>About Us</h1>
                <p>
                  Moonshine Consulting is dedicated to providing expert advice, compassionate care, and heartwarming stories for seniors and their families. Our blog posts, tools, and resources are curated by experienced professionals to help you navigate life's transitions with confidence and support.
                </p>
                <button type="button" className="btn btn-warning btn-block btn-lg">Learn More</button>
              </div>
            </div>
            {/* Caregiver Tools section */}
            <div className="mt-4">
              <div className="card h-100 w-100">
                <h1>Caregiver Tools We Love</h1>
                <button type="button" className="btn btn-warning btn-block btn-lg">product</button>
              </div>
            </div>
            {/* Nurse image */}
            <div className="mt-4">
              <img src="./images/Nurse.jpg" className="float-end nursepicture img-fluid" alt="mom10"
                width={400}
                height={200} />
            </div>
          </div>
          {/* Right column: Moonshine's Corner card */}
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-start">
            <div style={{ paddingTop: "100px", width: "100%" }}>
              <div className="card h-100 w-100">
                <h1>Moonshine's Corner</h1>
                <p>
                  Heartwarming stories about the impact of man's best friend, told by our very own mascot Moonshine, showing how dogs can really change lives.
                </p>
                <a href="" className="btn btn-warning">Read More</a>
              </div>
            </div>
            {/* ...existing code for the rest of the right column if any... */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Homepage
