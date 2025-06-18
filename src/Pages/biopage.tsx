import React from "react";

function BioPage() {
    return (
        <div style={{ maxWidth: 800, margin: "40px auto", padding: 24, border: "1px solid #ddd", borderRadius: 8, color: "#fff", background: "#222" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
                <div style={{ width: 120, height: 120, background: "#eee", borderRadius: "50%", marginRight: 32 }} />
                <div>
                    <h1 style={{ margin: 0, color: "#fff" }}>Our Team</h1>
                    {[
                        {
                            name: "Karen Underwood Rn BSN",
                            title: "CEO & Founder",
                            picture: "./images/nurse.jpg",
                            bioPoints: [
                                "experienced Homeheealth Surveyor with a passion for healthcare",
                                "30+ years in nursing and healthcare management",
                                "10 years as a Home Health Nurse",
                                "Enjoys mentoring and training new nurses",
                                "Advocate for patient-centered care and quality improvement",
                                "Skilled in regulatory compliance and quality assurance",
                                "Committed to continuous learning and open source contributions"
                            ]
                        },
                        {
                            name: "Ashley ",
                            title: "OT asistant",
                            picture: "https://randomuser.me/api/portraits/men/32.jpg",
                            bioPoints: [
                                "Experienced in both frontend and backend development",
                                "Specializes in Node.js, GraphQL, and microservices",
                                "Advocate for clean code and best practices",
                                "Contributor to several open source projects",
                                "Loves solving complex technical challenges"
                            ]
                        },
                        {
                            name: "Christie Stephen",
                            title: "UI/UX Designer & Developer",
                            picture: "https://randomuser.me/api/portraits/women/65.jpg",
                            bioPoints: [
                                "Blends design and development for seamless user experiences",
                                "Skilled in Figma, CSS-in-JS, and accessibility standards",
                                "Focuses on mobile-first and responsive design",
                                "Enjoys collaborating with cross-functional teams",
                                "Active in the design systems community"
                            ]
                        },
                        {
                            name: "David Kim",
                            title: "DevOps Engineer",
                            picture: "https://randomuser.me/api/portraits/men/76.jpg",
                            bioPoints: [
                                "Expert in CI/CD pipelines and cloud infrastructure",
                                "Automates deployments and monitors system health",
                                "Works with AWS, Docker, and Kubernetes",
                                "Promotes DevOps culture and agile methodologies",
                                "Enjoys optimizing performance and reliability"
                            ]
                        },
                        {
                            name: "Emily Chen",
                            title: "Frontend Developer",
                            picture: "https://randomuser.me/api/portraits/women/22.jpg",
                            bioPoints: [
                                "Specializes in React and TypeScript",
                                "Focuses on building accessible and performant UIs",
                                "Enjoys working with design systems and component libraries",
                                "Active in local tech meetups and workshops",
                                "Passionate about teaching and documentation"
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
                    <li>Email: your.email@example.com</li>
                    <li>LinkedIn: linkedin.com/in/yourprofile</li>
                </ul>
            </section>
        </div>
    );
};

export default BioPage;