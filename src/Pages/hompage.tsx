import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homepage.css';
import '../css/index.css';
import ProductComponent from '../components/productgenerator.tsx';

function homepage() {
  return (
    <div className='container-fluid' style={{ fontFamily: "Open Sans, sans-serif" }}>
      {/* Skip Navigation Link for Screen Readers */}
      <a 
        href="#blog-navigation" 
        className="sr-only sr-only-focusable"
        style={{
          position: 'absolute',
          left: '6px',
          zIndex: 1000,
          color: 'white',
          backgroundColor: '#08023a',
          padding: '8px 16px',
          textDecoration: 'none',
          borderRadius: '4px'
        }}
        onFocus={(e) => e.target.style.top = '6px'}
        onBlur={(e) => e.target.style.top = '-40px'}
      >
        Skip to main content
      </a>
      
      {/* Main Layout Container - Unified Single White Box */}
      <main id="main-content" role="main" aria-label="Welcome and blog navigation">
        
        {/* Hero Section with All Content in One White Box */}
        <div className="hero-section" style={{ padding: "5px" }}>
          <div className="welcome-box" style={{ 
            backgroundColor: "#ffffff", 
            padding: "40px", 
            borderRadius: "15px", 
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)", 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
            width: "100%",
            margin: "0"
          }}>
                  
                  {/* Title */}
                  <h1 className='Titles' style={{ 
                    fontSize: "28px", 
                    fontFamily: 'Open Sans', 
                    color: "#08023a",
                    textAlign: "center",
                    margin: "0"
                  }}>
                    Welcome to Moonshine Consulting
                  </h1>
                  
                  {/* Centered Dog Image */}
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img 
                      src="../images/Moonshineandresident.jpg" 
                      className='img-fluid' 
                      alt="Senior-resident bonding with dog belonging to her nurse caregiver"
                      style={{ 
                        borderRadius: "15px", 
                        maxWidth: "300px", 
                        height: "auto",
                        objectFit: "cover"
                      }} 
                    />
                  </div>
                  
                  {/* Description Text */}
                  <p style={{ 
                    fontSize: "18px", 
                    fontFamily: 'arial', 
                    color: "#2c2c2c", 
                    lineHeight: "1.6",
                    textAlign: "center",
                    maxWidth: "800px",
                    margin: "0"
                  }}>
                    Moonshine Consulting is a platform powered by over 60 years of experience of healthcare experience-plus the charm of a lovable Sheltie-offering trusted guidance, honest product insights, senior education, and advocacy for seniors and caregivers navigating life's later chapters
                  </p>
                  
                  {/* Explore Blog Button */}
                  <a 
                    id="blog-navigation"
                    href="./mainblog" 
                    className="btn btn-warning btn-lg" 
                    style={{ 
                      fontSize: "18px", 
                      padding: "12px 30px", 
                      minHeight: "44px",
                      fontWeight: "600"
                    }}
                  >
                    Explore the Blog
                  </a>
                  
                  {/* Four Category Boxes - Inside White Box */}
                  <div className="categories-grid" style={{ width: "100%", marginTop: "20px" }}>
                    <div className="row g-4">
                      
                      {/* Senior Living Desk */}
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="category-card" style={{ 
                          backgroundColor: "#08023a", 
                          padding: "20px", 
                          borderRadius: "12px", 
                          height: "220px", 
                          display: "flex", 
                          flexDirection: "column",
                          transition: "transform 0.3s ease"
                        }}>
                          <a href="./seniorlivingdesk" className="btn btn-warning btn-sm" style={{ 
                            width: "100%", 
                            marginBottom: "15px", 
                            height: "40px", 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center", 
                            fontSize: "14px", 
                            fontWeight: "600" 
                          }}>
                            Senior Living Desk
                          </a>
                          <p style={{ 
                            fontSize: "16px", 
                            color: "#000", 
                            backgroundColor: "#ffffff", 
                            padding: "12px", 
                            borderRadius: "6px", 
                            margin: "0", 
                            flexGrow: "1", 
                            lineHeight: "1.4" 
                          }}>
                            A resource hub for seniors and their families, providing information on senior living options, care services, and community resources.
                          </p>
                        </div>
                      </div>

                      {/* Senior Policy Beat */}
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="category-card" style={{ 
                          backgroundColor: "#08023a", 
                          padding: "20px", 
                          borderRadius: "12px", 
                          height: "220px", 
                          display: "flex", 
                          flexDirection: "column",
                          transition: "transform 0.3s ease"
                        }}>
                          <a href="./seniorpolicybeat" className="btn btn-warning btn-sm" style={{ 
                            width: "100%", 
                            marginBottom: "15px", 
                            height: "40px", 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center", 
                            fontSize: "14px", 
                            fontWeight: "600" 
                          }}>
                            Senior Policy Beat
                          </a>
                          <p style={{ 
                            fontSize: "16px", 
                            color: "#000", 
                            backgroundColor: "#ffffff", 
                            padding: "12px", 
                            borderRadius: "6px", 
                            margin: "0", 
                            flexGrow: "1", 
                            lineHeight: "1.4" 
                          }}>
                            Comprehensive guides and resources for navigating Medicare, insurance, and healthcare decisions for seniors and their families.
                          </p>
                        </div>
                      </div>

                      {/* Moonshine's Corner */}
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="category-card" style={{ 
                          backgroundColor: "#08023a", 
                          padding: "20px", 
                          borderRadius: "12px", 
                          height: "220px", 
                          display: "flex", 
                          flexDirection: "column",
                          transition: "transform 0.3s ease"
                        }}>
                          <a href="./moonshinescorner" className="btn btn-warning btn-sm" style={{ 
                            width: "100%", 
                            marginBottom: "15px", 
                            height: "40px", 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center", 
                            fontSize: "14px", 
                            fontWeight: "600" 
                          }}>
                            Moonshine's Corner
                          </a>
                          <p style={{ 
                            fontSize: "16px", 
                            color: "#000", 
                            backgroundColor: "#ffffff", 
                            padding: "12px", 
                            borderRadius: "6px", 
                            margin: "0", 
                            flexGrow: "1", 
                            lineHeight: "1.4" 
                          }}>
                            Tools, tips, and emotional support for family caregivers managing the challenges of caring for aging loved ones.
                          </p>
                        </div>
                      </div>

                      {/* Voices in Care */}
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="category-card" style={{ 
                          backgroundColor: "#08023a", 
                          padding: "20px", 
                          borderRadius: "12px", 
                          height: "220px", 
                          display: "flex", 
                          flexDirection: "column",
                          transition: "transform 0.3s ease"
                        }}>
                          <a href="./voicesincare" className="btn btn-warning btn-sm" style={{ 
                            width: "100%", 
                            marginBottom: "15px", 
                            height: "40px", 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center", 
                            fontSize: "14px", 
                            fontWeight: "600" 
                          }}>
                            Voices in Care
                          </a>
                          <p style={{ 
                            fontSize: "16px", 
                            color: "#000", 
                            backgroundColor: "#ffffff", 
                            padding: "12px", 
                            borderRadius: "6px", 
                            margin: "0", 
                            flexGrow: "1", 
                            lineHeight: "1.4" 
                          }}>
                            A place where caregivers and professionals can share their insights, stories, and struggles from the field.
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
        </div>
      </main>
      
      {/* Founder Cards Section - Original Format */}
      <section aria-label="Our team">
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
                    <p className="fw-bold mb-1" style={{ fontSize: "18px" }}>{member.name}</p>
                    <p style={{ fontSize: "16px", marginBottom: 0 }}>
                      {member.experience}
                    </p>
                    <p style={{ fontSize: "16px", marginBottom: 0 }}>
                      {member.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>

      {/* Product Cards Section - Caregiver Tools Our Nurses Love */}
      <section aria-label="Recommended products" style={{ padding: "5px" }}>
        <div style={{ 
          backgroundColor: "#ffffff",
          padding: "40px 40px 55px 40px", 
          borderRadius: "15px", 
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          width: "100%",
          margin: "30px 0"
        }}>
                <h2 className="text-center mb-4" style={{ 
                  fontSize: "28px", 
                  fontWeight: "bold", 
                  color: "#08023a",
                  marginBottom: "20px"
                }}>
                  Nurse's Picks
                </h2>
                <p className="text-center mb-4" style={{ 
                  fontSize: "18px", 
                  color: "#2c2c2c", 
                  marginBottom: "30px",
                  fontStyle: "italic"
                }}>
                  Products recommended by our experienced nursing team based on years of hands-on caregiving
                </p>
                <div className="d-flex flex-wrap justify-content-center align-items-stretch" style={{ 
                  gap: "25px",
                  padding: "20px 0 35px 0"
                }}>
                  {[1, 2, 3].map((id: number) => (
                    <div key={id} style={{ flex: "0 0 auto" }}>
                      <ProductComponent productid={id} />
                    </div>
                  ))}
                </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style>
        {`
          /* Full width adjustments for all screen sizes */
          @media (min-width: 1px) {
            .hero-section {
              padding: 5px !important;
            }
            .welcome-box {
              width: 100% !important;
              margin: 0 !important;
            }
          }
          
          /* Large desktop - 4 columns */
          @media (min-width: 992px) {
            .categories-section .row {
              align-items: stretch;
            }
            .category-card {
              height: 220px !important;
            }
          }
          
          /* Tablet - 2 columns */
          @media (max-width: 991px) and (min-width: 768px) {
            .category-card {
              height: 240px !important;
            }
            .welcome-box {
              padding: 30px !important;
            }
            .welcome-box h1 {
              fontSize: 24px !important;
            }
          }
          
          /* Mobile - 1 column stacked */
          @media (max-width: 767px) {
            .hero-section {
              padding: 20px 15px !important;
            }
            .welcome-box {
              padding: 20px !important;
              margin: 15px !important;
            }
            .welcome-box h1 {
              fontSize: 20px !important;
            }
            .welcome-box p {
              fontSize: 16px !important;
            }
            .welcome-box img {
              maxWidth: 250px !important;
              width: 100% !important;
              height: auto !important;
            }
            .category-card {
              height: auto !important;
              minHeight: 200px !important;
            }
            .category-card p {
              fontSize: 14px !important;
            }
            .category-card .btn {
              fontSize: 12px !important;
              height: 36px !important;
            }
            .founder-cards-responsive {
              flexDirection: column !important;
              gap: 20px !important;
            }
            .founder-card-responsive {
              width: 100% !important;
              maxWidth: 300px !important;
            }
            .founder-card-responsive img {
              width: 100% !important;
              height: auto !important;
              maxWidth: 100% !important;
            }
            .founder-card-responsive .card-body p {
              fontSize: 14px !important;
            }
            section > div > div > div > div {
              padding: 20px !important;
              margin: 15px auto !important;
            }
            h2 {
              fontSize: 22px !important;
            }
          }
          
          /* Small mobile adjustments */
          @media (max-width: 576px) {
            .welcome-box {
              padding: 15px !important;
            }
            .welcome-box h1 {
              fontSize: 18px !important;
            }
            .welcome-box p {
              fontSize: 14px !important;
            }
            .welcome-box img {
              maxWidth: 200px !important;
              width: 100% !important;
              height: auto !important;
            }
            .category-card p {
              fontSize: 13px !important;
            }
            .founder-card-responsive {
              maxWidth: 280px !important;
            }
            .founder-card-responsive img {
              width: 100% !important;
              height: auto !important;
              maxWidth: 100% !important;
            }
            .founder-card-responsive .card-body p {
              fontSize: 13px !important;
            }
            .btn {
              fontSize: 12px !important;
              padding: 8px 16px !important;
            }
            section > div > div > div > div {
              padding: 15px !important;
            }
            h2 {
              fontSize: 20px !important;
            }
          }
          
          /* Hover effects for category cards */
          .category-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .category-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }
          
          /* Hover effects for founder cards */
          .founder-card-responsive {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .founder-card-responsive:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }
        `}
      </style>
    </div>
  )
}

export default homepage
