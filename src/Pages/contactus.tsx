import React from 'react'

const registration = () => {
  return (
    <div className='container-fluid' style={{ fontFamily: "Open Sans, sans-serif" }}>
      <div className="hero-section" style={{ padding: "2px 10px" }}>
        <div style={{
         
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
                            fontSize: "40px",
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

            {/* Formspree Form Section */}
            <form
              action="https://formspree.io/f/mkgvpeqk"
              method="POST"
              style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '0 0 15px 15px', boxShadow: '0 6px 25px rgba(0,0,0,0.15)', border: 'none' }}
            >
              <div className="form-group mb-4">
                <label style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", fontWeight: "600", color: "#000", marginBottom: "8px", display: "block" }}>
                  First Name *
                </label>
                <input type="text" name="firstName" required className="form-control" style={{ border: '1px solid #cccccc', borderRadius: '8px', padding: '12px 15px', fontSize: '18px', fontFamily: 'Open Sans, sans-serif', minHeight: '44px', width: '100%', backgroundColor: '#fff', color: '#000' }} />
              </div>
              <div className="form-group mb-4">
                <label style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", fontWeight: "600", color: "#000", marginBottom: "8px", display: "block" }}>
                  Last Name *
                </label>
                <input type="text" name="lastName" required className="form-control" style={{ border: '1px solid #cccccc', borderRadius: '8px', padding: '12px 15px', fontSize: '18px', fontFamily: 'Open Sans, sans-serif', minHeight: '44px', width: '100%', backgroundColor: '#fff', color: '#000' }} />
              </div>
              <div className="form-group mb-4">
                <label style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", fontWeight: "600", color: "#000", marginBottom: "8px", display: "block" }}>
                  Your Email *
                </label>
                <input type="email" name="email" required className="form-control" style={{ border: '1px solid #cccccc', borderRadius: '8px', padding: '12px 15px', fontSize: '18px', fontFamily: 'Open Sans, sans-serif', minHeight: '44px', width: '100%', backgroundColor: '#fff', color: '#000' }} />
              </div>
              <div className="form-group mb-4">
                <label style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", fontWeight: "600", color: "#000", marginBottom: "8px", display: "block" }}>
                  Phone Number (Optional)
                </label>
                <input type="tel" name="phone" className="form-control" placeholder="We'll only call if you prefer phone contact" style={{ border: '1px solid #cccccc', borderRadius: '8px', padding: '12px 15px', fontSize: '18px', fontFamily: 'Open Sans, sans-serif', minHeight: '44px', width: '100%', backgroundColor: '#fff', color: '#000' }} />
              </div>
              <div className="form-group mb-4">
                <label style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", fontWeight: "600", color: "#000", marginBottom: "8px", display: "block" }}>
                  Age Range *
                </label>
                <select name="ageRange" required className="form-control" style={{ border: '1px solid #cccccc', borderRadius: '8px', padding: '12px 15px', fontSize: '18px', fontFamily: 'Open Sans, sans-serif', minHeight: '44px', width: '100%', backgroundColor: '#fff', color: '#000' }}>
                  <option value="">Please select your age range</option>
                  <option value="50-59">50-59</option>
                  <option value="60-69">60-69</option>
                  <option value="70-79">70-79</option>
                  <option value="80-89">80-89</option>
                  <option value="90+">90+</option>
                  <option value="caregiver">I'm a caregiver/family member</option>
                </select>
              </div>
              <div className="form-group mb-4">
                <label style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", fontWeight: "600", color: "#000", marginBottom: "8px", display: "block" }}>
                  What healthcare topic interests you most? (Optional)
                </label>
                <select name="interest" className="form-control" style={{ border: '1px solid #cccccc', borderRadius: '8px', padding: '12px 15px', fontSize: '18px', fontFamily: 'Open Sans, sans-serif', minHeight: '44px', width: '100%', backgroundColor: '#fff', color: '#000' }}>
                  <option value="">Choose a topic (or skip this question)</option>
                  <option value="medicare">Medicare & Insurance Help</option>
                  <option value="homehealth">Getting Home Health Care</option>
                  <option value="hospice">Hospice & End-of-Life Care</option>
                  <option value="longtermcare">Nursing Homes & Long Term Care</option>
                  <option value="seniorliving">Senior Living Communities</option>
                  <option value="healthproducts">Health Tools & Daily Living Aids</option>
                  <option value="caregiving">Support for Family Caregivers</option>
                  <option value="general">General Health & Wellness</option>
                </select>
              </div>
              <div className="form-group mb-4">
                <label style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", fontWeight: "600", color: "#000", marginBottom: "8px", display: "block" }}>
                  Your Message *
                </label>
                <textarea name="message" required className="form-control" rows={6} placeholder="How can we help you with your healthcare needs? Please share any specific questions or concerns you have." style={{ border: '1px solid #cccccc', borderRadius: '8px', padding: '12px 15px', fontSize: '18px', fontFamily: 'Open Sans, sans-serif', width: '100%', resize: 'vertical', backgroundColor: '#fff', color: '#000' }}></textarea>
              </div>
              
              {/* Privacy Policy Consent */}
              <div className="form-group mb-4">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <input type="checkbox" name="privacyPolicy" required id="privacyPolicy" style={{ marginTop: '4px' }} />
                  <label htmlFor="privacyPolicy" style={{ fontSize: "16px", fontFamily: "Open Sans, sans-serif", color: "#000", lineHeight: "1.4" }}>
                    I have read and agree to the Privacy Policy and Terms of Service. *
                  </label>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-warning btn-lg" style={{ backgroundColor: '#ffc107', borderColor: '#ffc107', color: '#08023a', fontSize: '20px', fontFamily: 'Open Sans, sans-serif', fontWeight: '600', padding: '12px 40px', borderRadius: '8px', border: 'none', minHeight: '44px', minWidth: '200px', transition: 'all 0.3s ease' }}>
                  Send Message
                </button>
              </div>
            </form>          </div>
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
      </div>
    </div>
  );
}

export default registration;