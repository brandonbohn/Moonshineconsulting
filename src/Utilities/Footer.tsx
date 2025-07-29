import React from 'react';

const BusinessHeader = () => (
  <div className=" py-3 px-2 text-center" style={{ fontSize: "1rem", backgroundColor: "#08023a", color: "#fff" }}>
    <div>
      <strong>Location:</strong> Fredricktown, Missouri
    </div>
    <div>
      <strong>All Rights Reserved.|Content Reviewed by licensed healthcare professional with 30+ years home health experience</strong> &copy; {new Date().getFullYear()} BareBohnz Dev & Consulting
    </div>
    <p>Moonshine Consulting LLC</p>
    <div>
      <a href="./privacypolicy" className="text-warning" style={{ textDecoration: "none" }}>
  Privacy Policy
      </a>

<a href="./termsandconditions" className="text-warning" style={{ textDecoration: "none", marginLeft: "10px" }}>
  Terms and Conditions
</a>
     
    </div>
  </div>
);

export default BusinessHeader;
