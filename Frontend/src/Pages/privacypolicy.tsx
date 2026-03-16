import React from "react";
import { useWebsiteContent } from "../data/websiteContent";

function PrivacyPolicy() {
  const websiteContent = useWebsiteContent();
  const content = websiteContent.pages.privacyPolicy;

  return (
    <div className="container-fluid" style={{ fontFamily: "Georgia, serif", fontSize: "21px" }}>
      <div className="hero-section" style={{ padding: "2px 10px" }}>
        <div className="text-white">
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
            <h1 style={{ fontSize: "27px", fontFamily: "Open Sans, Arial, sans-serif" }}>{content.title}</h1>
            <p>
              <strong>Effective Date:</strong> {content.effectiveDate}
            </p>
            <p>{content.intro}</p>

            {content.sections.map((section) => (
              <div key={section.title}>
                <h2 style={{ fontSize: "27px", fontFamily: "Open Sans, Arial, sans-serif" }}>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul style={{ fontSize: "21px", fontFamily: "Georgia, serif" }}>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <h2 style={{ fontSize: "27px", fontFamily: "Open Sans, Arial, sans-serif" }}>{content.contactTitle}</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href={`mailto:${content.contactEmail}`}>{content.contactEmail}</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
