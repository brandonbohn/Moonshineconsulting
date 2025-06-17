import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../homepage.css';
export const Homepage = () => {
  return (
    <div>
      
      <div className="container bg-dark positions  my-5" >
        <div className="row align card-body">
          <div className="col-12 col-md-6 text-center">
            <img src="../images/Moonshineoutdoors.jpg" className=" " alt="moonshine"
              width={400}
              height={550} />
          </div>
          <div className="col-12 col-md-6 text-white d-flex flex-column justify-content-center align-items-center">
            <h1 className='title text-center'>Welcome to Moonshine Consulting</h1>
            <a href="./mainblog" className="btn btn-warning btn-block btn-lg mt-3">Explore the Blog</a>
          </div>
        </div>
      </div>
     
      <div className='container  bg-dark text-white col-12 col-md-6 text-center'>

        <div>
 




        </div>
       
                <div className='container my-5'>
<h1>Who We Are</h1>
<p>
  <h5>
Our Mission
  </h5>
<p>
  At Moonshine Consulting, we empower seniors and their families to navigate the complex world of long-term healthcare with confidence and clarity. We believe every senior deserves compassionate care and informed choices about their health and wellbeing.
</p>

 <h5>
Our Expertise
  </h5>
<p>
Founded by healthcare professionals with over 50 years of combined experience, our team brings deep knowledge from:

 <li>Home Health services</li>
 <li>Hospice care</li>
 <li>Workers Compensation Insurance</li>
 <li>Occupational therapy</li>
</p>

<h5>What We Offer For Seniors and Caregivers:</h5>
<li>Guidance on Medicare, Home Health, Hospice, and rehabilitation options</li>
<li>Educational resources about Missouri’s healthcare policies and how they impact you</li>
<li>Practical solutions for daily healthcare challenges</li>	
<li>Support during life transitions and care decisions</li>




<p>
  <h5>
Our Approach:

  </h5>

We provide warm, compassionate guidance combined with expert knowledge. Our goal is to help you understand your options, advocate for your needs, and make informed decisions about your care journey.
Making a Difference
Beyond our consulting services, we’re committed to showing how meaningful connections, whether through our educational content, community outreach, or even our featured therapy animals—can enhance the lives of seniors and their families.
Ready to Get Started?
Contact us today to learn how we can help you navigate your healthcare journey with confidence and peace of mind.
Moonshine Consulting - Illuminating your path to better healthcare
</p>



 
</p>



                </div>




      </div>
    <img src="./images/Nurse.jpg" className="nursepicture img-fluid" alt="mom10"
                width={400}
                height={200} style={{ objectFit: "cover" }} />    
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
                  <a href="./moonshinescorner" className="btn btn-warning btn-sm">Read More</a>
                </div>
              </div>
              <div className="blog-card-responsive" style={{ width: "400px", height: "300px" }}>
                <div className="card h-100 w-100 d-flex flex-column justify-content-center align-items-center">
                  <h2 className="card-title text-center" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Senior Health Tips</h2>
                  <p className="mb-2" style={{ fontSize: "0.9rem" }}>
                    Expert tips from a Nurse that has used her compassion to get families and seniors through tough times as they transition throughout their later life.
                  </p>
                  <a href="./seniortips" className="btn btn-warning btn-sm">Read More</a>
                </div>
              </div>
              <div className="blog-card-responsive" style={{ width: "400px", height: "300px" }}>
                <div className="card h-100 w-100 d-flex flex-column justify-content-center align-items-center">
                  <h2 className="card-title text-center" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Rehab Solutions</h2>
                  <p className="mb-2" style={{ fontSize: "0.9rem" }}>
                  Personalized recommendations on how to get rehabilitated and back to living life to your fullest, or living your best life with your needs in mind.
                  </p>
                    <a
                    href="./rehabsolutions"
                    className="btn btn-warning btn-sm"
                    >
                    Read More
                    </a>
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
        
            </div>
          </div>
        </div>
    
  )
}
export default Homepage
