import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homepage.css';
import '../css/index.css';
import ProductComponent from '../components/productgenerator';
import { useWebsiteContent } from '../data/websiteContent';

function HomePage() {
  const websiteContent = useWebsiteContent();
  const homeContent = websiteContent.pages.home;

  return (
  
<div className='container-fluid' style={{ fontFamily: "Georgia, serif", fontSize: "21px" }}>
      {/* Skip Navigation Link for Screen Readers */}
      <a 
        href="#main-content" 
        className="visually-hidden-focusable"
        aria-label="Skip to main content"
        tabIndex={0}
      >
        Skip to main content
      </a>
      <main id="main-content" role="main" aria-label="Welcome and blog navigation">
        <div className="hero-section" style={{ padding: "10px" }}>
          <div className="welcome-box" style={{
            backgroundColor: "#ffffff",
            padding: "10px",
            borderRadius: "15px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            width: "100%",
            margin: "0"
          }}>
            {/* Title */}
            <style>{`
              .Titles {
                font-size: 40px !important;
                font-family: 'Open Sans, Arial, sans-serif' !important;
              }
              .homepage-body, .welcome-box, .moonshine-image-row, .intro-paragraph-desktop, .intro-paragraph-mobile {
                font-size: 21px !important;
                font-family: 'Georgia, serif' !important;
              }
            `}</style>
            <div style={{
              backgroundColor: "#08023a",
              padding: "30px 20px",
              borderRadius: "15px",
              width: "100%",
              boxSizing: "border-box",
              textAlign: "center"
            }}>
              <h1 className='Titles' style={{
                fontSize: "40px",
                fontFamily: 'Open Sans, Arial, sans-serif',
                color: "#ffffff",
                textAlign: "center",
                margin: "0 0 15px 0"
              }}>
                {homeContent.hero.title}
              </h1>
              <p style={{
                fontSize: "20px",
                fontFamily: 'Georgia, serif',
                color: "#ffffff",
                textAlign: "center",
                margin: "0",
                fontStyle: "italic",
                lineHeight: "1.6"
              }}>
                {homeContent.hero.subtitle}
              </p>
            </div>
            {/* Centered Dog Images */}
            <div className="moonshine-image-row" style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
              <style>{`
                .moonshine-image-row {
                  display: flex;
                  justify-content: center;
                  gap: 30px;
                }
                .moonshine-img-hide-mobile {
                  display: block;
                }
                .intro-paragraph-desktop { display: block; }
                .intro-paragraph-mobile { display: none; }
                @media (max-width: 768px) {
                  .moonshine-image-row {
                    flex-direction: column !important;
                    align-items: center !important;
                    gap: 20px !important;
                  }
                  .moonshine-image-row img {
                    max-width: 90vw !important;
                    height: auto !important;
                  }
                  .moonshine-img-hide-mobile {
                    display: none !important;
                  }
                  .intro-paragraph-desktop {
                    display: none !important;
                  }
                  .intro-paragraph-mobile {
                    display: block !important;
                  }
                }
              `}</style>
              {/* First image hidden on mobile */}
              <img 
                src="/images/Moonshineandresident.jpg" 
                className='img-fluid moonshine-img-hide-mobile' 
                alt="Senior-resident bonding with dog belonging to her nurse caregiver"
                style={{ 
                  borderRadius: "15px", 
                  maxWidth: "400px", 
                  height: "300px",
                }} 
              />
              {/* Intro paragraph between images for desktop */}
              <div className="intro-paragraph-desktop" style={{ display: "flex", alignItems: "center" }}>
                <p style={{ 
                  fontSize: "18px", 
                  fontFamily: 'arial', 
                  color: "#2c2c2c", 
                  lineHeight: "1.6",
                  textAlign: "center",
                  maxWidth: "320px",
                  margin: "0 20px",
                  alignSelf: "center"
                }}>
                  {homeContent.introParagraph}
                </p>
              </div>
              {/* Second image always visible */}
              <img 
                src="/images/moonshineandresidentupdate.png" 
                className='img-fluid' 
                alt="Moonshine the dog"
                style={{ 
                  borderRadius: "15px", 
                  maxWidth: "400px", 
                  height: "300px",
                }} 
              />
            </div>
            {/* Explore Blog Button */}
            <a 
              id="blog-navigation"
              href={homeContent.cta.link}
              className="btn btn-warning btn-lg" 
              style={{ 
                fontSize: "18px", 
                padding: "12px 30px", 
                minHeight: "44px",
                fontWeight: "600"
              }}
            >
              {homeContent.cta.text}
            </a>
            {/* Description Text for mobile */}
            <div className="intro-paragraph-mobile">
              <p style={{ 
                fontSize: "18px", 
                fontFamily: 'arial', 
                color: "#2c2c2c", 
                lineHeight: "1.6",
                textAlign: "center",
                maxWidth: "800px",
                margin: "0"
              }}>
                {homeContent.introParagraph}
              </p>
            </div>
          </div>
        </div>
        {/* Four Category Boxes - Inside White Box */}
        <div className="categories-grid" style={{ width: "100%", marginTop: "20px" }}>
                    <style>{`
                      .category-col {
                        flex: 0 0 19.2%;
                        max-width: 19.2%;
                        padding: 0 10px;
                      }
                      @media (max-width: 1200px) {
                        .category-col {
                          flex: 0 0 48%;
                          max-width: 48%;
                          margin-bottom: 20px;
                        }
                      }
                      @media (max-width: 768px) {
                        .category-col {
                          flex: 0 0 100%;
                          max-width: 100%;
                          margin-bottom: 20px;
                        }
                      }
                    `}</style>
                    <div className="row g-4" style={{ display: "flex", justifyContent: "space-between" }}>
                      {homeContent.categories.map((category) => (
                        <div className="category-col" key={category.id}>
                          <div className="category-card" style={{
                            backgroundColor: "#08023a",
                            padding: "20px",
                            borderRadius: "12px",
                            minHeight: "280px",
                            display: "flex",
                            flexDirection: "column",
                            transition: "transform 0.3s ease"
                          }}>
                            {category.actionType === "scroll" ? (
                              <button
                                onClick={() => {
                                  const element = document.getElementById(category.actionTarget);
                                  if (element) {
                                    const elementPosition = element.offsetTop;
                                    const offsetPosition = elementPosition + 89;
                                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                                  }
                                }}
                                className="btn btn-warning btn-sm"
                                style={{
                                  width: "100%",
                                  marginBottom: "15px",
                                  height: "40px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                  border: "none",
                                  cursor: "pointer"
                                }}
                              >
                                {category.title}
                              </button>
                            ) : (
                              <a
                                href={category.actionTarget}
                                className="btn btn-warning btn-sm"
                                style={{
                                  width: "100%",
                                  marginBottom: "15px",
                                  height: "40px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: "14px",
                                  fontWeight: "600"
                                }}
                              >
                                {category.title}
                              </a>
                            )}
                            <p style={{
                              fontSize: "16px",
                              color: "#000",
                              backgroundColor: "#ffffff",
                              padding: "12px",
                              borderRadius: "6px",
                              margin: "0",
                              flex: "1 1 auto",
                              alignSelf: "stretch",
                              lineHeight: "1.4",
                              overflow: "hidden"
                            }}>
                              {category.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
  </main>
      
      {/* Founder Cards Section - Original Format */}
      <section aria-label="Our team">
      <div className="d-flex flex-wrap justify-content-center founder-cards-responsive" style={{ gap: "30px", padding: "30px 0", margin: "30px auto" }}>
        <div className="container">
          <div className="row justify-content-center">
            {homeContent.teamMembers.map(member => (
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
  <section id="tools-we-love">
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
                  {homeContent.nursePicks.title}
                </h2>
                <p className="text-center mb-4" style={{ 
                  fontSize: "18px", 
                  color: "#2c2c2c", 
                  marginBottom: "30px",
                  fontStyle: "italic"
                }}>
                  {homeContent.nursePicks.subtitle}
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
              font-size: 24px !important;
            }
          }
          
          /* Mobile - 1 column stacked */
          @media (max-width: 767px) {
            .hero-section {
              padding: 0 !important;
            }
            .welcome-box {
              padding: 20px !important;
              margin: 15px !important;
              box-sizing: border-box !important;
              width: calc(100% - 30px) !important;
            }
              .welcome-box h1 {
                font-size: 5vw !important;
                font-weight: bold !important;
                white-space: nowrap !important;
                overflow: hidden !important;
            }
            .welcome-box p {
              font-size: 16px !important;
            }
            .welcome-box img {
              max-width: 250px !important;
              width: 100% !important;
              height: auto !important;
            }
            .category-card {
              height: auto !important;
              min-height: 200px !important;
            }
            .category-card p {
              font-size: 14px !important;
            }
            .category-card .btn {
              font-size: 12px !important;
              height: 36px !important;
            }
            .founder-cards-responsive {
              flex-direction: column !important;
              gap: 20px !important;
            }
            .founder-card-responsive {
              width: 100% !important;
              max-width: 300px !important;
            }
            .founder-card-responsive img {
              width: 100% !important;
              height: auto !important;
              max-width: 100% !important;
            }
            .founder-card-responsive .card-body p {
              font-size: 14px !important;
            }
            section > div > div > div > div {
              padding: 20px !important;
              margin: 15px auto !important;
            }
            h2 {
              font-size: 22px !important;
            }
          }
          
          /* Small mobile adjustments */
          @media (max-width: 576px) {
            .welcome-box {
              padding: 15px !important;
            }
            .welcome-box h1 {
              font-size: 18px !important;
            }
            .welcome-box p {
              font-size: 14px !important;
            }
            .welcome-box img {
              max-width: 200px !important;
              width: 100% !important;
              height: auto !important;
            }
            .category-card p {
              font-size: 13px !important;
            }
            .founder-card-responsive {
              max-width: 280px !important;
            }
            .founder-card-responsive img {
              width: 100% !important;
              height: auto !important;
              max-width: 100% !important;
            }
            .founder-card-responsive .card-body p {
              font-size: 13px !important;
            }
            .btn {
              font-size: 12px !important;
              padding: 8px 16px !important;
            }
            section > div > div > div > div {
              padding: 15px !important;
            }
            h2 {
              font-size: 20px !important;
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
          
          /* Extra Large Screens (1400px and up) - For Multiple Monitor Setups */
          @media (min-width: 1400px) {
            .container-fluid {
              max-width: 1320px;
              margin: 0 auto;
            }
            
            /* Larger welcome text */
            .welcome-header h1 {
              font-size: 56px !important;
            }
            
            .welcome-header p {
              font-size: 22px !important;
            }
            
            /* Better product card spacing */
            .product-grid {
              gap: 40px !important;
            }
            
            /* Larger founder section */
            .founder-section h2 {
              font-size: 40px !important;
            }
            
            .founder-card h3 {
              font-size: 26px !important;
            }
            
            .founder-card p {
              font-size: 18px !important;
            }
          }
          
          /* Ultra Wide Screens (1600px and up) - For Ultrawide Monitors */
          @media (min-width: 1600px) {
            .container-fluid {
              max-width: 1500px;
            }
            
            /* Even larger welcome text */
            .welcome-header h1 {
              font-size: 64px !important;
            }
            
            .welcome-header p {
              font-size: 26px !important;
            }
            
            /* More spacing for products */
            .product-grid {
              gap: 60px !important;
            }
            
            /* Larger navigation buttons */
            .blog-nav-card {
              padding: 40px !important;
            }
            
            .blog-nav-card h3 {
              font-size: 28px !important;
            }
          }
          
          /* Super Ultra Wide (1920px and up) - For 4K and Multiple Monitor Dev Setups */
          @media (min-width: 1920px) {
            .container-fluid {
              max-width: 1800px;
            }
            
            /* Maximum welcome text size */
            .welcome-header h1 {
              font-size: 72px !important;
            }
            
            .welcome-header p {
              font-size: 30px !important;
            }
            
            /* Maximum spacing */
            .product-grid {
              gap: 80px !important;
            }
            
            /* Larger content for 4K readability */
            .founder-section h2 {
              font-size: 48px !important;
            }
            
            .founder-card h3 {
              font-size: 30px !important;
            }
            
            .founder-card p {
              font-size: 20px !important;
              line-height: 1.8 !important;
            }
            
            /* Larger blog navigation cards */
            .blog-nav-card {
              padding: 50px !important;
            }
            
            .blog-nav-card h3 {
              font-size: 32px !important;
            }
            
            .blog-nav-card p {
              font-size: 20px !important;
            }
          }
        `}
      </style>
    </div>

    
  
  )
}

export default HomePage
