import React from 'react'

const registration = () => {
  return (
    <div className="contact-page-container" style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      backgroundColor: "#faf0e6",
      padding: "40px 20px"
    }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            
            {/* Header Section */}
            <div className="text-center mb-0" style={{ 
              backgroundColor: '#000000', 
              padding: '30px',
              borderRadius: '15px 15px 0 0'
            }}>
              <h2 className="text-white" style={{
                fontSize: "28px",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "700",
                marginBottom: "10px"
              }}>
                Have Questions? Contact Us Today
              </h2>
              <p className="" style={{
                fontSize: "18px",
                fontFamily: "Open Sans, sans-serif",
                margin: "0"
              }}>
                We're here to help you navigate your healthcare journey
              </p>
            </div>

            {/* Form Section */}
            <form>
              <div className="contact-form-container" style={{ 
                backgroundColor: '#ffffff', 
                padding: '40px',
                borderRadius: '0 0 15px 15px',
                boxShadow: '0 6px 25px rgba(0,0,0,0.15)',
                border: 'none'
              }}>
                
                {/* Name Field */}
                <div className="form-group mb-4">
                  <label style={{
                    fontSize: "18px",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: "600",
                    color: "#000000",
                    marginBottom: "8px",
                    display: "block"
                  }}>
                    Name *
                  </label>
                  <input
                    className="form-control"
                    name="name"
                    type="text"
                    required
                    style={{ 
                      border: '1px solid #cccccc',
                      borderRadius: '8px',
                      padding: '12px 15px',
                      fontSize: '16px',
                      fontFamily: 'Open Sans, sans-serif',
                      minHeight: '44px',
                      width: '100%',
                      backgroundColor: '#ffffff',
                      color: '#000000'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#ffc107'}
                    onBlur={(e) => e.target.style.borderColor = '#cccccc'}
                  />
                </div>

                {/* Email Field */}
                <div className="form-group mb-4">
                  <label style={{
                    fontSize: "18px",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: "600",
                    color: "#000000",
                    marginBottom: "8px",
                    display: "block"
                  }}>
                    Email *
                  </label>
                  <input
                    className="form-control"
                    name="email"
                    type="email"
                    required
                    style={{ 
                      border: '1px solid #cccccc',
                      borderRadius: '8px',
                      padding: '12px 15px',
                      fontSize: '16px',
                      fontFamily: 'Open Sans, sans-serif',
                      minHeight: '44px',
                      width: '100%',
                      backgroundColor: '#ffffff',
                      color: '#000000'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#ffc107'}
                    onBlur={(e) => e.target.style.borderColor = '#cccccc'}
                  />
                </div>

                {/* Inquiry Field */}
                <div className="form-group mb-4">
                  <label style={{
                    fontSize: "18px",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: "600",
                    color: "#000000",
                    marginBottom: "8px",
                    display: "block"
                  }}>
                    Your Inquiry *
                  </label>
                  <textarea
                    className="form-control"
                    name="inquiry"
                    placeholder="Please describe how we can help you..."
                    rows={6}
                    required
                    style={{ 
                      border: '1px solid #cccccc',
                      borderRadius: '8px',
                      padding: '12px 15px',
                      fontSize: '16px',
                      fontFamily: 'Open Sans, sans-serif',
                      width: '100%',
                      resize: 'vertical',
                      backgroundColor: '#ffffff',
                      color: '#000000'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#ffc107'}
                    onBlur={(e) => e.target.style.borderColor = '#cccccc'}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-warning btn-lg"
                    style={{
                      backgroundColor: '#ffc107',
                      borderColor: '#ffc107',
                      color: '#08023a',
                      fontSize: '18px',
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: '600',
                      padding: '12px 40px',
                      borderRadius: '8px',
                      border: 'none',
                      minHeight: '44px',
                      minWidth: '200px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffb000';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffc107';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Send Message
                  </button>
                </div>

              </div>
            </form>
            
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          /* Mobile responsive */
          @media (max-width: 767px) {
            .contact-page-container {
              padding: 20px 10px !important;
            }
            
            .contact-form-container {
              padding: 25px !important;
            }
            
            .contact-page-container h2 {
              font-size: 24px !important;
            }
            
            .contact-page-container p {
              font-size: 16px !important;
            }
            
            .form-group label {
              font-size: 16px !important;
            }
          }
          
          /* Small mobile */
          @media (max-width: 576px) {
            .contact-page-container {
              padding: 15px 5px !important;
            }
            
            .contact-form-container {
              padding: 20px !important;
            }
            
            .btn {
              width: 100% !important;
              min-width: auto !important;
            }
          }
          
          /* Extra Large Screens (1400px and up) - For Multiple Monitor Setups */
          @media (min-width: 1400px) {
            .contact-page-container {
              padding: 60px 40px !important;
            }
            
            .container {
              max-width: 1000px !important;
            }
            
            .contact-page-container h2 {
              font-size: 32px !important;
            }
            
            .contact-page-container p {
              font-size: 20px !important;
            }
            
            .contact-form-container {
              padding: 50px !important;
            }
            
            .form-group label {
              font-size: 20px !important;
            }
            
            .form-control {
              font-size: 18px !important;
              padding: 15px 18px !important;
              min-height: 48px !important;
            }
            
            .btn {
              font-size: 20px !important;
              padding: 15px 50px !important;
              min-width: 250px !important;
            }
          }
          
          /* Ultra Wide Screens (1600px and up) - For Ultrawide Monitors */
          @media (min-width: 1600px) {
            .contact-page-container {
              padding: 80px 60px !important;
            }
            
            .container {
              max-width: 1200px !important;
            }
            
            .contact-page-container h2 {
              font-size: 36px !important;
            }
            
            .contact-page-container p {
              font-size: 22px !important;
            }
            
            .contact-form-container {
              padding: 60px !important;
            }
            
            .form-group label {
              font-size: 22px !important;
            }
            
            .form-control {
              font-size: 20px !important;
              padding: 18px 20px !important;
              min-height: 52px !important;
            }
          }
          
          /* Super Ultra Wide (1920px and up) - For 4K and Multiple Monitor Dev Setups */
          @media (min-width: 1920px) {
            .contact-page-container {
              padding: 100px 80px !important;
            }
            
            .container {
              max-width: 1400px !important;
            }
            
            .contact-page-container h2 {
              font-size: 40px !important;
            }
            
            .contact-page-container p {
              font-size: 24px !important;
            }
            
            .contact-form-container {
              padding: 70px !important;
            }
            
            .form-group label {
              font-size: 24px !important;
            }
            
            .form-control {
              font-size: 22px !important;
              padding: 20px 25px !important;
              min-height: 56px !important;
            }
            
            .btn {
              font-size: 22px !important;
              padding: 18px 60px !important;
              min-width: 300px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default registration;