import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homepage.css';
import '../css/index.css';
import ProductComponent from '../components/productgenerator.tsx';

export const Homepage = () => {
  return (
    <div className='container-fluid' style={{ fontFamily: "sans-serif" }}>
      {/* Main 3-Column Grid Layout */}
      <div className="row main-layout-row" style={{ paddingTop: "31px", minHeight: "100vh" }}>
        
        
        <div className="col-lg-3 col-md-12 blog-cards-column" style={{ padding: "20px" }}>
          <div className="d-flex flex-column" style={{ gap: "30px" }}>
            <div className="blog-card-responsive" style={{ width: "100%", minHeight: "250px" }}>
              <div className="w-100 d-flex flex-column" style={{ backgroundColor: "#08023a", padding: "25px", borderRadius: "10px", minHeight: "250px" }}>
                <a href="./seniorlivingdesk" className="btn btn-warning btn-sm" style={{ width: "100%", marginBottom: "20px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  Senior Living Desk
                </a>
                <p className="mb-2" style={{ fontSize: "0.9rem", color: "#000", backgroundColor: "#ffffff", padding: "15px", borderRadius: "5px", width: "100%", margin: "0", flexGrow: "1" }}>
                  Expert advice about how you seniors can live a better life and take care of themselves better while transitioning throughout their later life.
                </p>
              </div>
            </div>
            
            <div className="blog-card-responsive" style={{ width: "100%", minHeight: "250px", marginTop: "250px" }}>
              <div className="w-100 d-flex flex-column" style={{ backgroundColor: "#08023a", padding: "25px", borderRadius: "10px", minHeight: "250px" }}>
                <a href="./Voicesincare" className="btn btn-warning btn-sm" style={{ width: "100%", marginBottom: "20px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  Voices in Care
                </a>
                <p className="mb-2" style={{ fontSize: "0.9rem", color: "#000", backgroundColor: "#ffffff", padding: "15px", borderRadius: "5px", width: "100%", margin: "0", flexGrow: "1" }}>
                  A place where caregivers and professionals can share their insights, stories, and struggles from the field.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Welcome Section */}
        <div className="col-lg-6 col-md-12 welcome-column" style={{ padding: "20px" }}>
          <div className="welcome-box" style={{ backgroundColor: "#ffffff", padding: "30px", borderRadius: "15px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", height: "100%" }}>
            <div className="text-center mb-4"> 
              <h1 className='Titles' style={{ fontSize: "28px", fontFamily: 'arialblack', marginBottom: "20px" }}>Welcome to Moonshine Consulting</h1>  
              <img src="../images/Moonshineandresident.jpg" alt="Senior-resident bonding with dog belonging to her nurse caregiver"
                width={200}
                height={275}
                style={{ borderRadius: "10px" }} />
            </div>
            <div className="mt-4">
              <p style={{ fontSize: "16px", fontFamily: 'arial', color: "#2c2c2c", lineHeight: "1.6" }}>
                Moonshine Consulting is a platform powered by over 60 years of experience of healthcare experience-plus the charm of a lovable Sheltie-offering trusted guidance, honest product insights, senior education, and advocacy for seniors and caregivers navigating life's later chapters
              </p>
              <a href="./mainblog" className="btn btn-warning btn-block btn-lg mt-3" style={{ width: "100%" }}>Explore the Blog</a>
            </div>
          </div>
        </div>

        
        <div className="col-lg-3 col-md-12 blog-cards-column" style={{ padding: "20px" }}>
          <div className="d-flex flex-column justify-content-between" style={{ height: "100%", gap: "30px" }}>
            <div className="blog-card-responsive" style={{ width: "100%", minHeight: "250px" }}>
              <div className="w-100 d-flex flex-column" style={{ backgroundColor: "#08023a", padding: "25px", borderRadius: "10px", minHeight: "250px" }}>
                <a href="./seniorpolicybeat" className="btn btn-warning btn-sm" style={{ width: "100%", marginBottom: "20px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  Senior Policy Beat
                </a>
                <p className="mb-2" style={{ fontSize: "0.9rem", color: "#000", backgroundColor: "#ffffff", padding: "15px", borderRadius: "5px", width: "100%", margin: "0", flexGrow: "1" }}>
                  Comprehensive guides and resources for navigating Medicare, insurance, and healthcare decisions for seniors and their families.
                </p>
              </div>
            </div>
            
            <div className="blog-card-responsive" style={{ width: "100%", minHeight: "250px" }}>
              <div className="w-100 d-flex flex-column" style={{ backgroundColor: "#08023a", padding: "25px", borderRadius: "10px", minHeight: "250px" }}>
                <a href="./moonshinescorner" className="btn btn-warning btn-sm" style={{ width: "100%", marginBottom: "20px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  Moonshine's Corner
                </a>
                <p className="mb-2" style={{ fontSize: "0.9rem", color: "#000", backgroundColor: "#ffffff", padding: "15px", borderRadius: "5px", width: "100%", margin: "0", flexGrow: "1" }}>
                  Tools, tips, and emotional support for family caregivers managing the challenges of caring for aging loved ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Founder Cards Section - 3 Column Grid */}
      <div className="d-flex flex-wrap justify-content-center founder-cards-responsive" style={{ gap: "30px", padding: "30px 0", margin: "30px auto" }}>
        <div className="container">
          <div className="row justify-content-center">
            {[
              {
                id: 1,
                name: "Karen Underwood, RN BSN",
                image: "./images/Nurse.jpg",
                experience: "30 Years Home Health and Hospice experience, both in the field and management.",
                title: "Registered Nurse"
              },
              {
                id: 3,
                name: "Moonshine",
                image: "./images/moonshine.jpg",
                experience: "Our beloved mascot, Moonshine. While not an official therapy dog, he loves brightening the days of our senior patients with his visits and unconditional love.",
                title: "Beloved Senior Companion"
              },
              {
                id: 2,
                name: "Christie Stephan, RN ODG Certified, Behavioral Health Certified",
                image: "./images/Christie.jpg",
                experience: "31 Years Multistate Registered Nurse that specializes in insurance assessment for long term care, Home Healthcare, and Hospice who also has experience in the hospital in many positions.",
                title: "Insurance Specialist"
              },
            ].map(member => (
              <div key={member.id} className="col-12 col-md-4 d-flex justify-content-center mb-4">
                <div className="card founder-card-responsive bg-light-transparent border-0" style={{ width: "300px", height: "100%" }}>
                  <img
                    src={member.image}
                    className="nursepicture img-fluid rounded"
                    alt={member.name}
                    style={{ width: "100%", height: "auto", display: "block", margin: "0 auto" }}
                  />
                  <div className="card-body Text text-center rounded-bottom">
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
      </div>

      {/* Product Cards Section */}
      <div className="d-flex flex-column align-items-center mt-5" style={{ marginTop: "180px", paddingBottom: "64px", paddingTop: "64px" }}>
        <h2 className="text-center mb-4 boxtwo" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#08023a" }}>
          Caregiver Tools We Love
        </h2>
        <div className='d-flex flex-wrap justify-content-center product-cards-responsive' style={{ gap: "32px", width: "100%" }}>
          {[1, 2, 3].map((id: number) => (
            <div key={id} className="mb-4" style={{ width: "400px", height: "auto" }}>
              <ProductComponent productid={id} />
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 991px) {
            .main-layout-row {
              flex-direction: column !important;
            }
            .blog-cards-column, .welcome-column {
              margin-bottom: 30px;
            }
          }
          
          @media (max-width: 767px) {
            .blog-cards-column .d-flex {
              flex-direction: column !important;
              gap: 20px !important;
            }
            .blog-card-responsive {
              width: 100% !important;
              max-width: 400px;
              margin: 0 auto;
            }
            .founder-cards-responsive {
              flex-direction: column !important;
              gap: 32px !important;
            }
            .founder-card-responsive {
              width: 100% !important;
              max-width: 350px;
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
            .welcome-box {
              padding: 20px !important;
            }
          }
          
          @media (min-width: 992px) {
            .main-layout-row {
              align-items: stretch;
            }
            .blog-cards-column, .welcome-column {
              display: flex;
              flex-direction: column;
            }
            .welcome-box {
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Homepage
