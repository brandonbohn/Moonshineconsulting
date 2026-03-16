import React from "react";
import { useWebsiteContent } from "../data/websiteContent";

const TermsAndConditions = () => {
  const websiteContent = useWebsiteContent();
  const content = websiteContent.pages.termsAndConditions;

  return (
    <div className="container-fluid" style={{ fontFamily: "Georgia, serif", fontSize: "21px" }}>
      <div className="hero-section" style={{ padding: "2px 10px" }}>
        <div>
          <div className="container my-5 text-center text-white">
            <h2 style={{ fontSize: "27px", fontFamily: "Open Sans, Arial, sans-serif", marginBottom: "24px" }}>
              {content.title}
            </h2>

            {content.sections.map((section) => (
              <div key={section.title}>
                <h4 style={{ fontSize: "27px", fontFamily: "Open Sans, Arial, sans-serif" }}>{section.title}</h4>
                <p style={{ fontSize: "21px", fontFamily: "Georgia, serif" }}>{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
