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
        
        {/* Left Column - Blog Cards */}
        <div className="col-lg-3 col-md-12 blog-cards-column" style={{ padding: "20px" }}>
          <div className="d-flex flex-column" style={{ gap: "20px" }}>
            <div className="blog-card-responsive" style={{ width: "100%", minHeight: "200px", backgroundColor: "#08023a", padding: "20px", borderRadius: "10px", color: "#ffffff" }}>
              <a href="./seniorlivingdesk" className="btn btn-warning btn-sm" style={{ width: "100%", marginBottom: "10px", height: "30px" }}>
                Senior Living Desk
              </a>
              <div className="card h-100 w-100 d-flex flex-column justify-content-center align-items-center">
                <p className="mb-2" style={{ fontSize: "0.9rem", color: "#000", backgroundColor: "#ffffff", padding: "10px", borderRadius: "5px" }}>
                  Expert advice about how you seniors can live a better life and take care of themselves better while transitioning throughout their later life.
                </p>
              </div>
            </div>
            
            <div className="blog-card-responsive" style={{ width: "100%", minHeight: "200px" }}>
              <a href="./Voicesincare" className="btn btn-warning btn-sm" style={{ width: "100%", marginBottom: "10px" }}>
                Voices in Care
              </a>
              <div className="w-100 d-flex" style={{ backgroundColor: "#000000", padding: "20px", borderRadius: "10px", minHeight: "150px" }}>
                <p className="mb-2" style={{ fontSize: "0.9rem", color: "#000000", backgroundColor: "#ffffff", padding: "10px", borderRadius: "5px", width: "100%" }}>
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

        {/* Right Column - Founder Cards (Compact) */}
        <div className="col-lg-3 col-md-12 founder-cards-column" style={{ padding: "20px" }}>
          <div className="d-flex flex-column founder-cards-responsive" style={{ gap: "15px" }}>
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
              <div key={member.id} className="founder-card-compact">
                <div className="card bg-light-transparent border-0" style={{ width: "100%", height: "auto" }}>
                  <img
                    src={member.image}
                    className="img-fluid rounded"
                    alt={member.name}
                    style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "10px 10px 0 0" }}
                  />
                  <div className="card-body text-center" style={{ padding: "10px" }}>
                    <p className="fw-bold mb-1" style={{ fontSize: "0.8rem" }}>{member.name}</p>
                    <p style={{ fontSize: "0.7rem", marginBottom: "5px", lineHeight: "1.2" }}>
                      {member.experience.length > 80 ? member.experience.substring(0, 80) + "..." : member.experience}
                    </p>
                    <p style={{ fontSize: "0.7rem", marginBottom: 0, fontWeight: "bold", color: "#08023a" }}>
                      {member.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className='container' style={{ maxWidth: "900px", margin: "0 auto", marginTop: "50px" }}>
        <div className='my-5' style={{
          padding: "30px",
          background: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
          fontSize: "16px",
        }}>
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
              <li>Long Term Care</li>
            </ul>
          </p>
          <h5>What We Offer For Seniors and Caregivers:</h5>
          <ul>
            <li>Guidance on Medicare, Home Health, Hospice and Long Term Care</li>
            <li>Educational resources about Missouri's healthcare policies and how they impact you</li>
            <li>Practical solutions for daily healthcare challenges</li>
            <li>Support during life transitions and care decisions</li>
          </ul>
          <h5>Our Approach:</h5>
          <p>
            We provide warm, compassionate guidance combined with expert knowledge. Our goal is to help you understand your options, advocate for your needs, and make informed decisions about your care journey.
            <br />
            <strong>Making a Difference:</strong> Beyond our consulting services, we're committed to showing how meaningful connections, whether through our educational content, community outreach, or even our featured therapy animals—can enhance the lives of seniors and their families.
            <br />
            <strong>Ready to Get Started?</strong> Contact us today to learn how we can help you navigate your healthcare journey with confidence and peace of mind.
            <br />
            Moonshine Consulting - Illuminating your path to better healthcare
          </p>
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
            .blog-cards-column, .welcome-column, .founder-cards-column {
              margin-bottom: 30px;
            }
            .founder-cards-responsive {
              flex-direction: row !important;
              flex-wrap: wrap !important;
              justify-content: center !important;
              gap: 20px !important;
            }
            .founder-card-compact {
              flex: 0 0 calc(33.333% - 15px);
              min-width: 200px;
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
              gap: 20px !important;
              align-items: center !important;
            }
            .founder-card-compact {
              width: 100% !important;
              max-width: 300px;
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
            .blog-cards-column, .welcome-column, .founder-cards-column {
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
