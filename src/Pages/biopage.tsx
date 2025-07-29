import React from "react";

function BioPage() {
    return (
        <div style={{ maxWidth: 800, margin: "40px auto", padding: 24, border: "1px solid #ddd",  color: "#fff", background: "#000000" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
                <div />
                <div>
                    <h1 style={{ margin: 0, color: "#fff" }}>Our Team</h1>
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
                            picture: "./images/christie.jpg",
                            bioPoints: [
                                "Chris began her career in 1994 in the hospital",
                                "Staff Nurse: GU, ENT, GYN, Prison ward and intensive care unit for 2 years.",
                                "Labor and Delivery Nursery RN for 2 years.",
                                "Field Nurse performing insurance assessments for long term care insurance products, Home Healthcare, and Hospice RN for total 31 years.",
                                "24 years’ experience in workers compensation, Team leader, and came on board with Gallagher in 2020."
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
                                <h1 style={{ margin: 0, fontSize: 24, color: "#fff" }}>{person.name}</h1>
                                <p style={{ color: "#fff", fontSize: 24 }}>{person.title}</p>
                                <ul style={{ paddingLeft: 20, margin: "12px 0 0 0", color: "#fff", fontSize: 15 }}>
                                    {person.bioPoints.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <section>
                <h2 style={{ color: "#fff" }}>Our Mission</h2>
                <p style={{ color: "#fff" }}>
                   At Moonshine Consulting, we empower seniors and their families to navigate the complex world of long-term healthcare with confidence and clarity. We believe every senior deserves compassionate care and informed choices about their health and wellbeing.
                </p>
            </section>
            <section>
                <h2 style={{ color: "#fff" }}>Contact</h2>
                <ul style={{ color: "#fff" }}>
                    <li>Email: moonshineconsulting6@gmail.com</li>
                
                </ul>
            </section>
        </div>
    );
};

export default BioPage;