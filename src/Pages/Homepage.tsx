import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../homepage.css';
import  ProductComponent from '../components/productgenerator.tsx';

export const Homepage = () => {
  return (
    <div style={{ fontFamily: "sans-serif", minHeight: "100vh", paddingTop: "100px" }}>
      
      <div className="container bg-dark positions  my-5" >
        <div className="row align card-body">
          <div className="col-12 col-md-6 "> 
            <img src="../images/Moonshineandresident.jpg"  alt="Senior-resident bonding with dog belonging to her nurse caregiver"
              width={400}
              height={525} />
          </div>
          <div className="col-12 col-md-6 text-white d-flex flex-column justify-content-center align-items-center">
            <h1 className='title text-center'>Welcome to Moonshine Consulting</h1>
            <p className='title text-center'>Moonshine consulting was created by a experienced nurse to inform seniors and caregivers of the best ways to navigate the system and grow in seniors elder years and for families to know what to do to help seniors. It is a advocacy platform for seniors and a resource to help them thorugh thier golden years </p>
            <a href="./mainblog" className="btn btn-warning btn-block btn-lg mt-3">Explore the Blog</a>
          </div>
        </div>
      </div>
      <div>
<div className="row container d-flex justify-content-center align-items-center text-center">
      




        
        </div>




        <div>

          <div>
          <div className="d-flex justify-content-center align-items-start" style={{ gap: "30px", padding: "30px 0", margin: "30px auto" }}>
            <div className="d-flex flex-wrap justify-content-center align-items-start founder-cards-responsive" style={{ gap: "30px", padding: "30px 0", margin: "30px auto" }}>
              <div className="container">
                <div className="row">
                    {[
                    {
                      id: 1,
                      name: "Karen Underwood, RN BSN",
                      image: "./images/Nurse.jpg",
                      experience: "30 Years Home Health and Hospice experience, both in the field and management.",
                      title: "Registered Nurse"
                    },
                    {
                      id: 2,
                      name: "Christie Stephen, RN ODG Certified, Behavioral Health Certified",
                      image: "./images/Christie.jpg",
                      experience: "31 Years Multistate Registered Nurse that specializes in insurance assessment for long term care, Home Healthcare, and Hospice who also has experience in the hospital in many positions.",
                      title: "Insurance Specialist"
                    },
                    {
                      id: 3,
                      name: "Moonshine",
                      image: "./images/moonshine.jpg",
                      experience: "Our beloved mascot, Moonshine. While not an official therapy dog, he loves brightening the days of our senior patients with his visits and unconditional love.",
                      title: "Therapy Dog"
                    },
                    {
                      id: 4,
                      name: "Brandon W. Bohn",
                      image: "./images/moonshine.jpg",
                      experience: "A versatile professional with 15 years of experience in DC policy teaching and full stack development, dedicated to bringing startup visions to life.",
                      title: "Technical Founder"
                    }
                    ].map((member, idx) => (
                    <div
                      key={member.id}
                      className="col-12 col-md-6 d-flex justify-content-center mb-4"
                      style={{ alignItems: "stretch" }}
                    >
                      <div className="card founder-card-responsive bg-light-transparent border-0" style={{ width: "300px", height: "100%" }}>
                      <img
                        src={member.image}
                        className="nursepicture img-fluid rounded"
                        alt={member.name}
                        style={{ width: "100%", height: "auto", display: "block", margin: "0 auto" }}
                      />
                      <div className="card-body text-white text-center cards rounded-bottom">
                        <p className="fw-bold mb-1" style={{ fontSize: "1rem" }}>{member.name}</p>
                        <p style={{ fontSize: "0.85rem", marginBottom: 0 }}>
                        {member.experience}
                        </p>
                        <p style={{ fontSize: "0.85rem", marginBottom: 0 }}>
                        {member.title}
                        </p>
                      </div>
                      </div>
                    </div>
                    ))}
                </div>
              </div>
              <style>
                {`
                  @media (max-width: 767px) {
                    .founder-cards-responsive {
                      flex-direction: column !important;
                      gap: 32px !important;
                      align-items: center !important;
                    }
                    .founder-card-responsive {
                      width: 100% !important;
                      max-width: 350px;
                    }
                  }
                `}
              </style>
            </div>
          </div> 
 
   <div
        className='container text-white col-12 col-md-6 col-sm-12 text-center'
        style={{ maxHeight: "250vh", padding: "0px 0", width: "70vw" }}
      >
        <div>
          <div className="container"></div>
          <div
            className='container my-5'
            style={{
              padding: "30px",
              maxWidth: "900px",
              margin: "0 auto",
              background: "#1b4332",
              borderRadius: "16px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
              minHeight: "fit-content",
              width: "100%",
              fontSize: "1rem",
            }}
          >
            <h1>Who We Are</h1>
            <h5>Our Mission</h5>
            <p>
              At Moonshine Consulting, we empower seniors and their families to navigate the complex world of long-term healthcare with confidence and clarity. We believe every senior deserves compassionate care and informed choices about their health and wellbeing.
            </p>
            <h5>Our Expertise</h5>
            <p>
              Founded by healthcare professionals with over 50 years of combined experience, our team brings deep knowledge from:
              <ul>
                <li>Home Health services</li>
                <li>Hospice care</li>
                <li>Workers Compensation Insurance</li>
                <li>Occupational therapy</li>
              </ul>
            </p>
            <h5>What We Offer For Seniors and Caregivers:</h5>
            <ul>
              <li>Guidance on Medicare, Home Health, Hospice, and rehabilitation options</li>
              <li>Educational resources about Missouri’s healthcare policies and how they impact you</li>
              <li>Practical solutions for daily healthcare challenges</li>
              <li>Support during life transitions and care decisions</li>
            </ul>
            <h5>Our Approach:</h5>
            <p>
              We provide warm, compassionate guidance combined with expert knowledge. Our goal is to help you understand your options, advocate for your needs, and make informed decisions about your care journey.
              <br />
              <strong>Making a Difference:</strong> Beyond our consulting services, we’re committed to showing how meaningful connections, whether through our educational content, community outreach, or even our featured therapy animals—can enhance the lives of seniors and their families.
              <br />
              <strong>Ready to Get Started?</strong> Contact us today to learn how we can help you navigate your healthcare journey with confidence and peace of mind.
              <br />
              Moonshine Consulting - Illuminating your path to better healthcare
            </p>
          </div>
        </div>

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
            </div>
          
        </div>  



        </div>
      </div>
 
  {/* Blog posts section moved here, between About Us and Footer */}
  <div style={{ paddingTop: "48px" }}>
    <div className="row card-row">
      <div>

<div className="col-12 d-flex justify-content-center" style={{ paddingTop: "50px" }}>
        {/* 2x2 grid for blog cards */}
        <div className="d-flex flex-wrap justify-content-center blog-cards-responsive" style={{ gap: "32px", width: "100%" }}>
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
              <h2 className="card-title text-center" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Senior Living Desk </h2>
              <p className="mb-2" style={{ fontSize: "0.9rem" }}>
                Expert advice about how you seniors can live a better life and take care of  themselves better while transitioning throughout their later life.
              </p>
              <a href="./seniorlivingdesk" className="btn btn-warning btn-sm">Read More</a>
            </div>
          </div>
          <div className="blog-card-responsive" style={{ width: "400px", height: "300px" }}>
            <div className="card h-100 w-100 d-flex flex-column justify-content-center align-items-center">
              <h2 className="card-title text-center" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Voices in Care</h2>
              <p className="mb-2" style={{ fontSize: "0.9rem" }}>
                A place where caregivers and professionals can share their insights, stories, and struggles from the field.
              </p>
              <a
                href="./Voicesincare"
                className="btn btn-warning btn-sm"
              >
                Read More
              </a>
            </div>
            {/*   */}
          </div>
          <div className="blog-card-responsive" style={{ width: "400px", height: "300px" }}>
            <div className="card h-100 w-100 d-flex flex-column justify-content-center align-items-center">
              <h2 className="card-title text-center" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>The Senior Policy Beat</h2>
              <p className="mb-2" style={{ fontSize: "0.9rem" }}>
                Up to date information on the latest healthcare policies, changes, and how they affect you and your loved ones.
              </p>
              <a
                href="./seniorpolicybeat"
                className="btn btn-warning btn-sm"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      
      
          
          
        </div>
      </div>
    </div>
  </div>
<div
  className='padding-top-48'
  style={{
    marginTop: "180px", // Increased marginTop for more space between blogs and product cards
    paddingTop: "48px",
  }}
>
  <div className="d-flex flex-column align-items-center mt-5" style={{ paddingBottom: "64px", paddingTop: "64px" }}>
    <h2 className="card-title text-center mb-4" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>
      Caregiver Tools We Love
    </h2>
    <div className="d-flex justify-content-center product-cards-responsive" style={{ gap: "32px" }}>
      <div
        className="card d-flex flex-column align-items-center product-card-responsive"
        style={{
          background: "#1b4332",
          color: "#fff",
          width: "400px",
          padding: "32px"
        }}
      >
        <div>


        </div>
        <button type="button" className="btn btn-warning btn-block btn-lg w-100 mt-4">product</button>
      </div>
      <div
        className="card d-flex flex-column align-items-center product-card-responsive"
        style={{
          background: "#1b4332",
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
    
    
  )
}
export default Homepage
