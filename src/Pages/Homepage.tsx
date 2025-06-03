import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../homepage.css';
export const Homepage = () => {
  return (
    <div>
      {/* Full-width hero section */}
      <div className="card w-100 rounded-0 border-0" style={{ background: "#212529" }}>
        <div className="row align-items-center card-body mx-0 px-0">
          <div className="col-12 col-md-6 text-center">
            <img src="./images/moonshine.jpg" className="bg-dark img-fluid" alt="mom3"
              width={400}
              height={400} />
          </div>
          <div className="col-12 col-md-6 text-white d-flex flex-column justify-content-center align-items-center">
            <h1 className='title text-center'>Welcome to Moonshine Consulting</h1>
            <a href="" className="btn btn-warning btn-block btn-lg mt-3">Explore the Blog</a>
          </div>
        </div>
      </div>
      {/* Main content container */}
      <div className="container">
        <style>
          {`
            @media (max-width: 767px) {
              .blog-cards-responsive {
                flex-direction: column !important;
                gap: 75px !important;
                align-items: center;
              }
              .blog-card-responsive {
                width: 100% !important;
                max-width: 400px;
              }
              .product-cards-responsive {
                flex-direction: column !important;
                gap: 75px !important;
                align-items: center;
              }
              .product-card-responsive {
                width: 100% !important;
                max-width: 400px;
              }
            }
          `}
        </style>
        <div className="row card-row">
          <div className="col-12 d-flex justify-content-center" style={{ paddingTop: "100px" }}>
            {/* Three cards side by side, each 400x300px, with 32px gap, responsive */}
            <div className="d-flex blog-cards-responsive" style={{ gap: "32px" }}>
              <div className="blog-card-responsive" style={{ width: "400px", height: "300px" }}>
                <div className="card h-100 w-100 d-flex flex-column justify-content-center align-items-center">
                  <h2 className="card-title text-center" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Moonshine's Corner</h2>
                  <p className="mb-2" style={{ fontSize: "0.9rem" }}>
                    Heartwarming stories about the impact of man's best friend, told by our very own mascot Moonshine, showing how dogs can really change lives.
                  </p>
                  <a href="" className="btn btn-warning btn-sm">Read More</a>
                </div>
              </div>
              <div className="blog-card-responsive" style={{ width: "400px", height: "300px" }}>
                <div className="card h-100 w-100 d-flex flex-column justify-content-center align-items-center">
                  <h2 className="card-title text-center" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Senior Health Tips</h2>
                  <p className="mb-2" style={{ fontSize: "0.9rem" }}>
                    Expert tips from a Nurse that has used her compassion to get families and seniors through tough times as they transition throughout their later life.
                  </p>
                  <a href="" className="btn btn-warning btn-sm">Read More</a>
                </div>
              </div>
              <div className="blog-card-responsive" style={{ width: "400px", height: "300px" }}>
                <div className="card h-100 w-100 d-flex flex-column justify-content-center align-items-center">
                  <h2 className="card-title text-center" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Rehab Solutions</h2>
                  <p className="mb-2" style={{ fontSize: "0.9rem" }}>
                    Personalized recommendations on how to get rehabilitated and back to living life to your fullest, or living your best life with your needs in mind.
                  </p>
                  <a href="" className="btn btn-warning btn-sm">Read More</a>
                </div>
              </div>
            </div>
          </div>
          {/* Caregiver Tools section: heading above product boxes and centered */}
          <div className="d-flex flex-column align-items-center mt-4">
            <h2 className="card-title text-center mb-4" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>
              Caregiver Tools We Love
            </h2>
            <div className="d-flex justify-content-center product-cards-responsive" style={{ gap: "32px" }}>
              <div
                className="card d-flex flex-column align-items-center product-card-responsive"
                style={{
                  background: "#212529",
                  color: "#fff",
                  width: "400px",
                  padding: "32px"
                }}
              >
                <button type="button" className="btn btn-warning btn-block btn-lg w-100 mt-4">product</button>
              </div>
              <div
                className="card d-flex flex-column align-items-center product-card-responsive"
                style={{
                  background: "#212529",
                  color: "#fff",
                  width: "400px",
                  padding: "32px"
                }}
              >
                <button type="button" className="btn btn-warning btn-block btn-lg w-100 mt-4">product</button>
              </div>
            </div>
          </div>
          {/* About This section and Nurse image side by side */}
          <div className="row mt-4 align-items-center justify-content-center">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-start" style={{ minHeight: "800px" }}>
              <div
                className="card d-flex flex-column justify-content-center h-100"
                style={{
                  background: "#212529",
                  color: "#fff",
                  width: "400px",
                  height: "800px"
                }}
              >
                <h2 className="card-title text-center" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>About Us</h2>
                <p className="mb-0" style={{ fontSize: "0.95rem" }}>
                  Moonshine Consulting is dedicated to providing expert advice, compassionate care, and heartwarming stories for seniors and their families. Our blog posts, tools, and resources are curated by experienced professionals to help you navigate life's transitions with confidence and support. ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss compassionate care, and heartwarming stories for seniors and their families. Our blog posts, tools, and resources are curated by experienced professionals to help you navigate life's transitions with confidence and support. ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-start" style={{ minHeight: "800px" }}>
              <img src="./images/Nurse.jpg" className="nursepicture img-fluid" alt="mom10"
                width={400}
                height={200} style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Homepage
