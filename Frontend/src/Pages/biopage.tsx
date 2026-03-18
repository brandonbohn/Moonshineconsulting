import React from "react";
import "../css/homepage.css";
import { useWebsiteContent } from "../data/websiteContent";

function BioPage() {
  const websiteContent = useWebsiteContent();
  if (!websiteContent) {
    return null;
  }
  const content = websiteContent.pages.about;

  return (
    <div className="container-fluid" style={{ fontFamily: "Georgia, serif", fontSize: "21px" }}>
      <div className="hero-section" style={{ padding: "2px 10px" }}>
        <section>
          <div>
            <h1 className="title" style={{ fontSize: "27px", fontFamily: "Open Sans, Arial, sans-serif" }}>
              {content.title}
            </h1>
            <div style={{ borderTop: "5px solid #000000", margin: "20px 0" }}></div>

            <div className="bio-container">
              <div className="bio-section team-section">
                <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
                  <div></div>
                  <div>
                    <h1 style={{ margin: 0, color: "#000000" }}>{content.teamTitle}</h1>
                    {content.team.map((person: { name: string; picture: string; title: string; bioPoints: string[] }) => (
                      <div key={person.name} style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
                        <img
                          src={person.picture}
                          alt={person.name}
                          style={{ width: 64, height: 64, borderRadius: "50%", marginRight: 20, objectFit: "cover", background: "#eee" }}
                        />
                        <div>
                          <h3 style={{ margin: 0, fontSize: "27px", color: "#000000", fontWeight: "bold", fontFamily: "Open Sans, Arial, sans-serif" }}>
                            {person.name}
                          </h3>
                          <p style={{ color: "#000000", fontSize: "27px", fontFamily: "Open Sans, Arial, sans-serif" }}>{person.title}</p>
                          <ul style={{ paddingLeft: 20, margin: "12px 0 0 0", color: "#000000", fontSize: "21px", fontFamily: "Georgia, serif" }}>
                            {person.bioPoints.map((point: string) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 style={{ color: "#000000", fontSize: "27px", fontFamily: "Open Sans, Arial, sans-serif" }}>{content.contactTitle}</h2>
                  <ul style={{ color: "#000000", fontSize: "21px", fontFamily: "Georgia, serif" }}>
                    {content.contactItems.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="info-section">
                <div
                  style={{
                    padding: "30px",
                    background: "#ffffff",
                    borderRadius: "16px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                    fontSize: "18px"
                  }}
                >
                  <h1 style={{ margin: 0, color: "#000000", fontSize: "27px", fontFamily: "Open Sans, Arial, sans-serif" }}>{content.mission.title}</h1>
                  <p style={{ fontSize: "21px", fontFamily: "Georgia, serif", lineHeight: "1.6" }}>{content.mission.paragraph}</p>

                  <h5 style={{ fontSize: "27px", fontFamily: "Open Sans, Arial, sans-serif" }}>{content.expertise.title}</h5>
                  <p style={{ fontSize: "21px", fontFamily: "Georgia, serif", lineHeight: "1.6" }}>{content.expertise.intro}</p>
                  <ul style={{ fontSize: "21px", fontFamily: "Georgia, serif" }}>
                    {content.expertise.items.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <h5 style={{ fontSize: "27px", fontFamily: "Open Sans, Arial, sans-serif" }}>{content.professionalBackground.title}</h5>
                  <p style={{ fontSize: "21px", fontFamily: "Georgia, serif", lineHeight: "1.6" }}>{content.professionalBackground.intro}</p>
                  <ul style={{ fontSize: "21px", fontFamily: "Georgia, serif" }}>
                    {content.professionalBackground.items.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <h5 style={{ fontSize: "27px", fontFamily: "Open Sans, Arial, sans-serif" }}>{content.offerings.title}:</h5>
                  <ul style={{ fontSize: "21px", fontFamily: "Georgia, serif" }}>
                    {content.offerings.items.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <h5 style={{ fontSize: "27px", fontFamily: "Open Sans, Arial, sans-serif" }}>{content.approach.title}:</h5>
                  <p style={{ fontSize: "21px", fontFamily: "Georgia, serif", lineHeight: "1.6" }}>
                    {content.approach.paragraph}
                    <br />
                    <strong>{content.approach.differenceLabel}</strong> {content.approach.differenceText}
                    <br />
                    <strong>{content.approach.closing}</strong>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>{`
    .bio-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: stretch;
        box-sizing: border-box;
        width: 100vw;
        overflow-x: hidden;
    }

    .bio-section {
        width: 100%;
        padding: 30px;
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 2px 16px rgba(0,0,0,0.15);
        box-sizing: border-box;
        margin-bottom: 50px;
        max-height: 800px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .team-section {
        color: #000000;
        order: 1;
    }

    .info-section {
        order: 2;
        max-height: 800px;
        overflow-y: auto;
    }

    @media (max-width: 480px) {
        .bio-container {
            padding: 10px;
            gap: 15px;
            width: 100vw;
            overflow-x: hidden;
        }

        .bio-section {
            padding: 15px;
            width: 100vw;
            box-sizing: border-box;
            overflow-x: hidden;
        }

        .title {
            font-size: 1.3rem !important;
            text-align: left;
        }

        .bio-section div[style*="display: flex"] {
            flex-direction: column !important;
            text-align: left;
        }

        .bio-section img {
            margin: 0 auto 15px auto !important;
            max-width: 90vw;
            height: auto !important;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        .bio-container {
            padding: 15px;
            gap: 18px;
        }

        .bio-section {
            padding: 18px;
        }
    }

    @media (min-width: 768px) {
        .bio-container {
            padding: 20px;
            gap: 25px;
        }

        .bio-section {
            padding: 24px;
        }
    }

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
            word-break: break-word;
            overflow-wrap: break-word;
        }

        .bio-section li {
            font-size: 13px !important;
            word-break: break-word;
            overflow-wrap: break-word;
        }
    }

    @media (max-width: 480px) {
        .bio-section img {
            width: 50px !important;
            height: 50px !important;
        }
    }
`}</style>
      </div>
    </div>
  );
}

export default BioPage;
