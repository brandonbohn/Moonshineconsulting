import React from 'react';

const BusinessHeader = () => (
  <div className="bg-dark text-white py-3 px-2 text-center" style={{ fontSize: "1rem" }}>
    <div>
      <strong>Location:</strong> Fredricktown, Missouri
    </div>
    <div>
      <strong>All Rights Reserved.|Content Reviewed by licensed healthcare professional with 30+ years home health experience</strong> &copy; {new Date().getFullYear()} BareBohnz Dev & Consulting
    </div>
    <div>
      <a href="https://moonshineconsulting.org" className="text-warning" style={{ textDecoration: "none" }}>
  Moonshine Consulting LLC 
      </a>

<a href="https://moonshineconsulting.org/termsandconditions" className="text-warning" style={{ textDecoration: "none", marginLeft: "10px" }}>
  Terms and Conditions
</a>
     
    </div>
  </div>
);

export default BusinessHeader;
