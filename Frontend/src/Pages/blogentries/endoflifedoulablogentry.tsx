import React from 'react';
import BlogNavigation from '../../components/BlogNavigation.tsx';

function EndOfLifeDoulaBlogEntry() {
  return (
    <div>
      {/* Blog Navigation */}
      <BlogNavigation 
        categoryName="Voices in Care" 
        categoryLink="/Voicesincare" 
      />
      <div style={{ backgroundColor: "#08023a", borderRadius: "10px", padding: "32px 0 24px 0", margin: "50px 0 0 0", width: "100%" }}>
        <h1 style={{ color: "#fff", textAlign: "center", fontSize: "2.8rem", fontWeight: "bold", marginBottom: "16px", letterSpacing: "1px", width: "100%" }}>
          What is an End-of-Life Doula and What Role Do They Have in End of Life Care?
        </h1>
        <h2 style={{ color: "#fff", fontSize: "1.3rem", fontStyle: "italic", textAlign: "left", margin: "0 0 8px 0", width: "100%" }}>Author: Kimberly Dorisio</h2>
        <div style={{ color: "#fff", textAlign: "left", fontSize: "1.2rem", marginBottom: "16px", width: "100%" }}>
          {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <img
          src="/images/endoflifedoula.svg"
          alt="End-of-Life Doula providing compassionate support"
          style={{ display: "block", margin: "0 auto 12px auto", maxWidth: "400px", width: "100%", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
        />
      </div>
      <div className="content mb-4 box text-dark" style={{ padding: "32px", fontSize: "22px", width: "100%", margin: "30px 0 0 0", background: "#fff", borderRadius: "10px", textAlign: "left", boxSizing: "border-box" }}>
        <div className="Text" style={{ fontFamily: "Open Sans, sans-serif", minHeight: "100vh", fontSize: "18px", lineHeight: "1.6" }}>
        <p style={{ fontSize: "22px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.7", marginBottom: "24px" }}>
          As we move through life we plan for many life events. We plan for college, marriage, children, retirement, but very few plan for end of life. Why is that you may ask? We as a society are living longer, there are new treatment modalities, new surgical treatments, and new medications. So we no longer openly talk about death and dying, we have swept this under the rug, and avoid the topic, then all of the sudden you are faced with a life threatening illness or a provider may tell you there is nothing more they can do for you and advise you to go home and "get your affairs in order".
        </p>

        <h2 style={{ fontSize: "28px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "30px", marginBottom: "15px" }}>Why We Avoid End-of-Life Planning</h2>
        <p style={{ fontSize: "22px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.7", marginBottom: "24px" }}>
          You are left in shock, denial, or disbelief. What does this mean? Some people will call their attorney and draft up a will. Yes that is part of end of life planning, but that is only the tip of the iceberg. There is so much more to end of life planning.
        </p>

        {/* Affiliate Ad #1 - Legal/Estate Planning */}
        <div style={{ backgroundColor: "#fff9e6", border: "2px solid #ffc107", borderRadius: "10px", padding: "25px", marginBottom: "30px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontFamily: "Open Sans, sans-serif", color: "#666", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>
            📋 Recommended Resource
          </p>
          <h3 style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginBottom: "15px", marginTop: "0" }}>
            Protect Your Healthcare Wishes Today
          </h3>
          <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px", color: "#2c2c2c" }}>
            Create your Healthcare Directive, Living Will, and Power of Attorney documents in minutes with trusted legal guidance.
          </p>
          <a 
            href="https://www.legalzoom.com" 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            style={{ 
              display: "inline-block",
              backgroundColor: "#08023a", 
              color: "#fff", 
              padding: "14px 30px", 
              borderRadius: "8px", 
              textDecoration: "none", 
              fontSize: "18px", 
              fontWeight: "600",
              fontFamily: "Open Sans, sans-serif",
              transition: "all 0.3s ease"
            }}
          >
            Start Your Healthcare Directive →
          </a>
          <p style={{ fontSize: "14px", color: "#888", marginTop: "15px", marginBottom: "0", fontStyle: "italic" }}>
            Affiliate disclosure: We may earn a commission at no cost to you.
          </p>
        </div>

        <h2 style={{ fontSize: "28px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "30px", marginBottom: "15px" }}>How an End-of-Life Doula Can Help</h2>
        <p style={{ fontSize: "22px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.7", marginBottom: "15px" }}>
          This is where an End-of-Life Doula can help. They can be a support system for you and your loved ones as you navigate end of life. An End-of-Life Doula is a non-medical professional—yes, many are nurses like myself—we provide <strong>emotional, spiritual, and practical support</strong> to people and their families who are nearing end of life.
        </p>
        
        <p style={{ fontSize: "22px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.7", marginBottom: "24px" }}>
          I encourage everyone to plan early. Please do not wait until you are sick and possibly struggling.
        </p>

        <h2 style={{ fontSize: "28px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "30px", marginBottom: "15px" }}>Three Essential Questions to Start Your End-of-Life Planning</h2>
        <p style={{ fontSize: "22px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.7", marginBottom: "15px" }}>
          When I meet with a client and their families I try and help them with a foundation for their planning. I ask 3 questions to start off:
        </p>

        <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px", marginBottom: "24px" }}>
          <h3 style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginBottom: "15px" }}>#1. What Matters to You?</h3>
          <p style={{ fontSize: "22px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.7", marginBottom: "0" }}>
            Understanding what truly matters to you helps guide all other decisions about your end-of-life care.
          </p>
        </div>

        <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px", marginBottom: "24px" }}>
          <h3 style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginBottom: "15px" }}>#2. Have You Had a Conversation About Your Wants and Wishes with Your Loved Ones?</h3>
          <p style={{ fontSize: "22px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.7", marginBottom: "0" }}>
            Open communication with family members ensures everyone understands your preferences and can honor your wishes.
          </p>
        </div>

        <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px", marginBottom: "24px" }}>
          <h3 style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginBottom: "15px" }}>#3. Have You Named Your Person to Carry Out Your Wishes? (AKA Health Care Proxy)</h3>
          <p style={{ fontSize: "22px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.7", marginBottom: "0" }}>
            Designating someone you trust to make medical decisions on your behalf is crucial for ensuring your wishes are followed.
          </p>
        </div>

        {/* Affiliate Ad #2 - End-of-Life Doula Directory */}
        <div style={{ backgroundColor: "#f0f8ff", border: "2px solid #08023a", borderRadius: "10px", padding: "25px", marginBottom: "30px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontFamily: "Open Sans, sans-serif", color: "#666", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>
            🤝 Find Support Near You
          </p>
          <h3 style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginBottom: "15px", marginTop: "0" }}>
            Connect with a Certified End-of-Life Doula
          </h3>
          <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px", color: "#2c2c2c" }}>
            Find compassionate, professional end-of-life support in your area. Browse profiles, read reviews, and schedule consultations.
          </p>
          <a 
            href="https://www.caring.com" 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            style={{ 
              display: "inline-block",
              backgroundColor: "#08023a", 
              color: "#fff", 
              padding: "14px 30px", 
              borderRadius: "8px", 
              textDecoration: "none", 
              fontSize: "18px", 
              fontWeight: "600",
              fontFamily: "Open Sans, sans-serif",
              transition: "all 0.3s ease"
            }}
          >
            Search Local Doulas →
          </a>
          <p style={{ fontSize: "14px", color: "#888", marginTop: "15px", marginBottom: "0", fontStyle: "italic" }}>
            Affiliate disclosure: We may earn a commission at no cost to you.
          </p>

        {/* Affiliate Ad #3 - Medical Alert Systems */}
        <div style={{ backgroundColor: "#ffe6e6", border: "2px solid #ff6b6b", borderRadius: "10px", padding: "25px", marginTop: "30px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontFamily: "Open Sans, sans-serif", color: "#666", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>
            🚨 Peace of Mind for Seniors
          </p>
          <h3 style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginBottom: "15px", marginTop: "0" }}>
            24/7 Emergency Response Protection
          </h3>
          <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.6", marginBottom: "20px", color: "#2c2c2c" }}>
            Help is just a button press away. Medical alert systems with fall detection, GPS tracking, and professional monitoring.
          </p>
          <a 
            href="https://www.medicalguardian.com" 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            style={{ 
              display: "inline-block",
              backgroundColor: "#ff6b6b", 
              color: "#fff", 
              padding: "14px 30px", 
              borderRadius: "8px", 
              textDecoration: "none", 
              fontSize: "18px", 
              fontWeight: "600",
              fontFamily: "Open Sans, sans-serif",
              transition: "all 0.3s ease"
            }}
          >
            Get Free Quote →
          </a>
          <p style={{ fontSize: "14px", color: "#888", marginTop: "15px", marginBottom: "0", fontStyle: "italic" }}>
            Affiliate disclosure: We may earn a commission at no cost to you.
          </p>
        </div>

        {/* Affiliate Ad #4 - Amazon Products */}
        <div style={{ backgroundColor: "#e8f5e9", border: "2px solid #4caf50", borderRadius: "10px", padding: "25px", marginTop: "30px" }}>
          <p style={{ fontSize: "16px", fontFamily: "Open Sans, sans-serif", color: "#666", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600", textAlign: "center" }}>
            📚 Recommended Reading
          </p>
          <h3 style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginBottom: "20px", marginTop: "0", textAlign: "center" }}>
            Essential Resources for End-of-Life Planning
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", fontWeight: "600", marginBottom: "10px" }}>📖 "Being Mortal"</p>
              <p style={{ fontSize: "16px", marginBottom: "15px" }}>by Atul Gawande</p>
              <a 
                href="https://www.amazon.com/dp/0805095152?tag=youraffid" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                style={{ 
                  display: "inline-block",
                  backgroundColor: "#4caf50", 
                  color: "#fff", 
                  padding: "10px 20px", 
                  borderRadius: "6px", 
                  textDecoration: "none", 
                  fontSize: "16px", 
                  fontWeight: "600",
                  fontFamily: "Open Sans, sans-serif"
                }}
              >
                View on Amazon
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "18px", fontFamily: "Open Sans, sans-serif", fontWeight: "600", marginBottom: "10px" }}>📝 Medical Organizer</p>
              <p style={{ fontSize: "16px", marginBottom: "15px" }}>for Health Records</p>
              <a 
                href="https://www.amazon.com/dp/B07QXXX" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                style={{ 
                  display: "inline-block",
                  backgroundColor: "#4caf50", 
                  color: "#fff", 
                  padding: "10px 20px", 
                  borderRadius: "6px", 
                  textDecoration: "none", 
                  fontSize: "16px", 
                  fontWeight: "600",
                  fontFamily: "Open Sans, sans-serif"
                }}
              >
                View on Amazon
              </a>
            </div>
          </div>
          <p style={{ fontSize: "14px", color: "#888", marginTop: "20px", marginBottom: "0", fontStyle: "italic", textAlign: "center" }}>
            As Amazon Associates, we earn from qualifying purchases.
          </p>
        </div>
        </div>

        <h2 style={{ fontSize: "28px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginTop: "30px", marginBottom: "15px" }}>A Helpful Resource: The Conversation Project</h2>
        <p style={{ fontSize: "22px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.7", marginBottom: "15px" }}>
          I want to leave you with those 3 thoughts and encourage you to use a wonderful resource called <a href="https://theconversationproject.org" target="_blank" rel="noopener noreferrer" style={{ color: "#08023a", fontWeight: "600", textDecoration: "underline" }}><strong>The Conversation Project</strong></a>. They have a wonderful library of free pamphlets to help you get started with your conversation.
        </p>

        <div style={{ backgroundColor: "#08023a", padding: "20px", borderRadius: "8px", marginTop: "30px", marginBottom: "30px" }}>
          <p style={{ fontSize: "22px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.7", marginBottom: "15px", color: "#fff" }}>
            <strong>Coming Next:</strong> In my next blog we will break down the first topic—what matters to you. We will discuss:
          </p>
          <ul style={{ fontSize: "22px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.7", color: "#fff", paddingLeft: "30px" }}>
            <li style={{ marginBottom: "10px" }}>Care needs</li>
            <li style={{ marginBottom: "10px" }}>What is too much care</li>
            <li style={{ marginBottom: "10px" }}>What is not enough care</li>
            <li style={{ marginBottom: "10px" }}>What is the right amount of care for you</li>
            <li style={{ marginBottom: "10px" }}>Care settings: hospice, palliative care, home setting vs alternative care settings</li>
          </ul>
        </div>

        <p style={{ fontSize: "22px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.7", marginBottom: "24px", fontStyle: "italic", textAlign: "center", color: "#08023a", fontWeight: "600" }}>
          Until next time, let's create clarity and connection through starting your conversation.
        </p>

        <p style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.7", marginBottom: "0", textAlign: "center", color: "#08023a", fontWeight: "bold" }}>
          — Kimberly Dorisio
        </p>

        {/* Author Bio Section */}
        <div style={{ backgroundColor: "#f8f9fa", padding: "30px", borderRadius: "8px", marginTop: "40px", borderLeft: "4px solid #08023a" }}>
          <h3 style={{ fontSize: "24px", fontFamily: "Open Sans, sans-serif", color: "#08023a", marginBottom: "15px", marginTop: "0" }}>About the Author</h3>
          <p style={{ fontSize: "20px", fontFamily: "Open Sans, sans-serif", lineHeight: "1.7", marginBottom: "0" }}>
            <strong>Kimberly Dorisio</strong> is a certified End-of-Life Doula with a nursing background, dedicated to helping individuals and families navigate end-of-life planning with compassion and clarity. She provides non-medical support focusing on emotional, spiritual, and practical guidance during life's most profound transition. Through her work, Kimberly empowers families to have meaningful conversations about what matters most, ensuring dignity and peace at the end of life.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default EndOfLifeDoulaBlogEntry;
