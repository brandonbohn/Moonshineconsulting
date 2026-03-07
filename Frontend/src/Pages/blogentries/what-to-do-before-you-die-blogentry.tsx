import React from 'react';
import BlogNavigation from '../../components/BlogNavigation.tsx';
import { Helmet } from 'react-helmet';

function WhatToDoBeforeYouDieBlogEntry() {
  return (
    <main>
      <Helmet>
        <title>Estate Preparation: What to Do Before You Die | Moonshine Consulting</title>
        <meta name="description" content="Learn essential estate preparation steps before you die. Protect your family, understand Medicaid rules, and plan your legacy with Moonshine Consulting." />
        <meta name="keywords" content="estate preparation, end of life planning, Medicaid look-back, protect your family, senior care" />
      </Helmet>
      <div>
        <BlogNavigation 
          categoryName="Senior Living Desk" 
          categoryLink="/seniorlivingdesk" 
        />
        <div style={{ backgroundColor: "#08023a", borderRadius: "10px", padding: "32px 0 24px 0", margin: "50px 0 0 0", width: "100%" }}>
          <h1 style={{ color: "#fff", textAlign: "center", fontSize: "2.8rem", fontWeight: "bold", marginBottom: "16px", letterSpacing: "1px", width: "100%" }}>
            Before I Go: What I've Learned About Death, Faith, and Protecting My Family
          </h1>
          <h2 style={{ color: "#fff", fontSize: "1.3rem", fontStyle: "italic", textAlign: "center", margin: "0 0 8px 0", width: "100%" }}>Author: Karen</h2>
          <div style={{ color: "#fff", textAlign: "center", fontSize: "1.2rem", marginBottom: "16px", width: "100%" }}>
            {new Date('2025-09-15').toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <img
            src="/images/death.jpg"
            alt="End of Life Planning"
            style={{ display: "block", margin: "0 auto 12px auto", maxWidth: "400px", width: "100%", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
          />
        </div>
        <div className="content mb-4 box text-dark" style={{ padding: "32px", fontSize: "21px", fontFamily: "Georgia, serif", width: "100%", margin: "30px 0 0 0", background: "#fff", borderRadius: "10px", textAlign: "left", boxSizing: "border-box" }}>
          <div className="row bg-light p-4 rounded shadow">
            <h2 style={{ textAlign: "center", fontSize: "20px", fontFamily: "Open Sans, Arial, sans-serif", fontStyle: "italic", color: "#08023a", marginTop: "10px" }}>Author: Karen</h2>
            <p>People go through life not even considering their death. I've recently looked back on my life and realized I believe I will be with Jesus when I die. That brings me peace, but I also realized I had a couple of important things I needed to do first.</p>
            <h2>The Missouri Wake-Up Call</h2>
            <p>Did you know that Missouri recently increased the Medicaid look-back period to seven years before you can qualify for nursing home assistance? If your finances aren't protected in a trust at least seven years before you enter a nursing home, Medicaid can claim your home and property. They will sell everything to pay for your care.</p>
            <p>Unfortunately, most Americans work our entire lives hoping to leave what we have to our children. What we don't know is that if we go into a nursing home, that property will be sold for our care.</p>
            <p>I keep a secure filing system with fireproof document storage to organize all my important papers. Check your local state government laws to confirm this for your area.</p>
            <h2>Critical Documents</h2>
            <ul>
              <li>A will</li>
              <li>A trust</li>
              <li>Durable power of attorney for finances</li>
              <li>Healthcare power of attorney</li>
            </ul>
            <p>What happens if a husband and wife get into a car wreck? Who will make the decisions if both of you cannot make your own decisions? This is exactly why proper documentation is crucial.</p>
            <p>I recommend using a legal document organizer with tabs for each type of document, making it easy for family members to find what they need during emergencies.</p>
            <h2>Organizing Important Items</h2>
            <ul>
              <li>Insurance policies in a waterproof document case</li>
              <li>Bank account information and passwords in a secure password manager</li>
              <li>Social Security and Medicare cards in protective sleeves</li>
              <li>Contact information for your attorney, financial advisor, and doctor in an emergency contact organizer</li>
            </ul>
            <p>As a nurse, I've seen too many families struggle because their loved ones didn't plan ahead. I've learned that preparing for death isn't morbid — it's one of the most loving things you can do for your family. Having my faith gives me peace about what comes next, but having my affairs in order gives my family peace about what happens here.</p>
            <p>Don't wait until it's too late. The seven-year look-back period means you need to act now to protect your legacy. Please come back — I'll be writing about other important things to consider before you die. Your family's financial security depends on the decisions you make today.</p>
            <h2>Recommended Products</h2>
            <ul>
              <li>SentrySafe Fireproof Document Safe</li>
              <li>Expanding File Organizer with 21 Pockets</li>
              <li>Waterproof Document Bag</li>
              <li>Card Protective Sleeves</li>
              <li>Bathroom Safety Grab Bars</li>
              <li>Shower Bench with Back Support</li>
              <li>Long Handle Shoe Horn</li>
              <li>Sock Aid and Dressing Stick</li>
              <li>Large Display Pill Organizer</li>
              <li>Automatic Blood Pressure Monitor</li>
              <li>Medical Alert System</li>
            </ul>
            <p>As an Amazon Associate, I earn from qualifying purchases. These are products I personally recommend based on my nursing experience and have seen help families maintain independence longer.</p>
            <h2>References</h2>
            <ul>
              <li>Missouri Department of Social Services. Medicaid Estate Recovery Program. <a href="https://dss.mo.gov/mhd/participants/pages/estate-recovery.htm" target="_blank" rel="noopener noreferrer">https://dss.mo.gov/mhd/participants/pages/estate-recovery.htm</a></li>
              <li>Centers for Medicare & Medicaid Services. Medicaid Estate Recovery. <a href="https://www.medicaid.gov/medicaid/eligibility/estate-recovery/index.html" target="_blank" rel="noopener noreferrer">https://www.medicaid.gov/medicaid/eligibility/estate-recovery/index.html</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WhatToDoBeforeYouDieBlogEntry;
