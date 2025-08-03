import React from "react";
import '../css/homepage.css';

function BioPage() {
    return (
        <section>
<div>
  <h1 className="title">Who We Are......</h1>
  <div style={{ borderTop: "5px solid #000000", margin: "20px 0" }}></div>
        {/* Main Container with Responsive Layout */}
        <div className="bio-container">
            {/* Left Side - Team Photos */}
            <div className="bio-section team-section">
                <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
                    <div />
                    <div>
                        <h1 style={{ margin: 0, color: "#000000" }}>Our Team</h1>
                        {[
                            {
                                name: "Karen Underwood RN BSN",
                                title: "CEO & Founder",
                                picture: "./images/CEO.jpg",
                                bioPoints: [
                                   "30+ years in nursing and healthcare management", 
                                   "A experienced Homehealth Surveyor with a passion for healthcare",
                                    "10 years as a Home Health Nurse",
                                    "3 Years in Long Term Care Working as a Floor Nurse doing Hands on Patient Care and Senior Advocacy",
                                    "Enjoys mentoring and training new nurses",
                                    "Advocate for patient-centered care and quality improvement",
                                    "Skilled in regulatory compliance and quality assurance",
                                    "Committed to continuous learning and open source contributions"
                                ]
                            },
                            {
                                name: "Christie Stephan RN ODG Certified, Behavioral Health Certified",
                                title: "Insurance Specialist and Contributor",
                                picture: "./images/Christie.jpg",
                                bioPoints: [
                                    "Chris began her career in 1994 in the hospital",
                                    "Staff Nurse: GU, ENT, GYN, Prison ward and intensive care unit for 2 years.",
                                    "Labor and Delivery Nursery RN for 2 years.",
                                    "Field Nurse performing insurance assessments for long term care insurance products, Home Healthcare, and Hospice RN for total 31 years.",
                                    "24 years' experience in workers compensation, Team leader, and came on board with Gallagher in 2020."
                                ]
                            },
                            {
                                name: "Moonshine",
                                title: "Lovable Mascot and Contributor",
                                picture: "./images/moonshine.jpg",
                                bioPoints: [
                                    "Brings smiles and comfort to seniors every day",
                                    "Expert in tail wags and gentle cuddles",
                                    "Loves visiting care homes and making new friends",
                                    "Always ready for a treat or a belly rub",
                                    "Believes everyone deserves a little joy and companionship"
                                ]
                            }
                        ].map((person, idx) => (
                            <div key={idx} style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
                                <img
                                    src={person.picture}
                                    alt={person.name}
                                    style={{ width: 64, height: 64, borderRadius: "50%", marginRight: 20, objectFit: "cover", background: "#eee" }}
                                />
                                <div>
                                    <h1 style={{ margin: 0, fontSize: 24, color: "#000000" }}>{person.name}</h1>
                                    <p style={{ color: "#000000", fontSize: 24 }}>{person.title}</p>
                                    <ul style={{ paddingLeft: 20, margin: "12px 0 0 0", color: "#000000", fontSize: 15 }}>
                                        {person.bioPoints.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                  
                </div>
                <div>
                    <h2 style={{ color: "#000000" }}>Contact</h2>
                    <ul style={{ color: "#000000" }}>
                        <li>Email: moonshineconsulting6@gmail.com</li>
                    </ul>
                </div>
            </div>

           
            <div className=" info-section">
                <div style={{
                  padding: "30px",
                  background: "#ffffff",
                  borderRadius: "16px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                  fontSize: "16px",
                  
                }}>
                
                  <h1 className="" style={{ margin: 0, color: "#000000" }}>Our Mission</h1>
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
        </div>
    </div>


<style>{`
    /* Mobile First - Base styles for mobile devices */
    .bio-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: stretch;
    }

    .bio-section {
        width: 100%;
        padding: 20px;
        border: 1px solid #ddd;
        background: #ffffff;
        border-radius: 16px;
        box-sizing: border-box;
    }

    .team-section {
        color: #000000;
        order: 1;
    }

    .info-section {
        order: 2;
    }

    /* Small mobile phones - max-width: 480px */
    @media (max-width: 480px) {
        .bio-container {
            padding: 10px;
            gap: 15px;
        }

        .bio-section {
            padding: 15px;
        }

        .title {
            font-size: 1.3rem !important;
            text-align: center;
        }

        /* Make team member cards stack vertically on very small screens */
        .bio-section div[style*="display: flex"] {
            flex-direction: column !important;
            text-align: center;
        }

        .bio-section img {
            margin: 0 auto 15px auto !important;
        }
    }

    /* Mobile phones - min-width: 481px */
    @media (min-width: 481px) and (max-width: 767px) {
        .bio-container {
            padding: 15px;
            gap: 18px;
        }

        .bio-section {
            padding: 18px;
        }
    }

    /* Tablets - min-width: 768px */
    @media (min-width: 768px) {
        .bio-container {
            padding: 20px;
            gap: 25px;
        }

        .bio-section {
            padding: 24px;
        }
    }

    /* Small laptops - min-width: 992px */
    @media (min-width: 992px) {
        .bio-container {
            flex-direction: row;
            gap: 30px;
            align-items: flex-start;
        }

        .bio-section {
            flex: 1;
            max-width: 650px;
        }

        .team-section {
            order: 0;
        }

        .info-section {
            order: 0;
            flex: 1;
            max-width: 850px;
        }
    }

    /* Large desktops - min-width: 1200px */
    @media (min-width: 1200px) {
        .bio-container {
            padding: 20px;
        }
    }

    /* Extra large screens - min-width: 1400px */
    @media (min-width: 1400px) {
        .bio-container {
            max-width: 1400px;
        }
    }

    /* Responsive text sizing */
    @media (max-width: 576px) {
        .bio-section h1 {
            font-size: 1.5rem !important;
        }

        .bio-section h2 {
            font-size: 1.3rem !important;
        }

        .bio-section h5 {
            font-size: 1.1rem !important;
        }

        .bio-section p {
            font-size: 14px !important;
        }

        .bio-section li {
            font-size: 13px !important;
        }
    }

    /* Responsive image sizing */
    @media (max-width: 480px) {
        .bio-section img {
            width: 50px !important;
            height: 50px !important;
        }
    }
`}</style>
    </section>    
    );
};

export default BioPage;