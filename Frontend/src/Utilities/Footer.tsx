import React from 'react';
import { useWebsiteContent } from '../data/websiteContent';

const BusinessHeader = () => {
  const websiteContent = useWebsiteContent();
  const footer = websiteContent.footer;

  return (
  <div className=" py-3 px-2 text-center" style={{ fontSize: "1rem", backgroundColor: "#08023a", color: "#fff" }}>
    <div>
      <strong>Location:</strong> {footer.location}
    </div>
    <div>
      <strong>{footer.rightsText}</strong> &copy; {new Date().getFullYear()} Moonshine Consulting LLC
    </div>
    <p>{footer.developerCredit}</p>
    <div>
      <a href="./privacypolicy" className="text-warning" style={{ textDecoration: "none" }}>
        {footer.privacyLabel}
      </a>

<a href="./termsandconditions" className="text-warning" style={{ textDecoration: "none", marginLeft: "10px" }}>
  {footer.termsLabel}
</a>
     
    </div>
  </div>
);
};

export default BusinessHeader;
