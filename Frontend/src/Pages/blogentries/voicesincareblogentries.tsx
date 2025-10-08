import React from 'react';
import BlogNavigation from '../../components/BlogNavigation.tsx';
import { ProductComponent } from '../../components/productgenerator.tsx';

function Voicesincareblogentry() {
  return (
    <div>
      {/* Blog Navigation */}
      <BlogNavigation 
        categoryName="Voices in Care" 
        categoryLink="/Voicesincare" 
      />
      <div
        className="container"
        style={{ fontFamily: "Georgia, serif", fontSize: "21px", minHeight: "100vh" }}
      >
        <style>
          {`
            .container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 15px;
            }
            .Titles {
              text-align: center;
              padding: 20px;
              background: #ffffff;
              margin-top: 50px;
              border-radius: 8px;
            }
            .content p {
              font-size: 21px;
              line-height: 1.6;
            }
            @media (max-width: 768px) {
              .Titles {
                font-size: 27px;
                padding: 15px;
              }
              .content p {
                font-size: 21px;
              }
            }
          `}
        </style>
        <div>
          <div>
            <div></div>
          </div>
        </div>
        <div style={{ backgroundColor: "#08023a", borderRadius: "10px", padding: "32px 0 24px 0", margin: "50px auto 0 auto", maxWidth: "100%", width: "100%" }}>
          <h1 style={{ color: "#fff", textAlign: "center", fontSize: "27px", fontWeight: "bold", marginBottom: "16px", letterSpacing: "1px", fontFamily: "Open Sans, Arial, sans-serif" }}>
            The Heart of Hospice Nursing: Compassion, Comfort, and Connection
          </h1>
          <h2 style={{ color: "#fff", fontSize: "1.1rem", fontStyle: "italic", textAlign: "left", margin: "0 0 8px 0" }}>Author: Christie Stephan RN ODG</h2>
          <div style={{ color: "#fff", textAlign: "left", fontSize: "1rem", marginBottom: "16px" }}>
            {new Date('2025-09-15').toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <img
            src="/images/hospice.jpg"
            alt="Hospice Nursing"
            style={{ display: "block", margin: "0 auto 12px auto", maxWidth: "300px", width: "100%", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
          />
        </div>
  <div className="content mb-4 box text-dark" style={{ padding: "20px", fontSize: "21px", fontFamily: "Georgia, serif", height: "100%", maxWidth: "100%", width: "100%", margin: "30px auto 0 auto", background: "#fff", borderRadius: "10px", textAlign: "left" }}>
          <p>
            There are so many things I could say about nursing, but one of the most rewarding—and humbling—experiences has been working in hospice home care.
            <br />
            <br />
            Too often, patients come to hospice care much later than they should in their disease journey. It’s heartbreaking to see a patient struggle, yet it is an honor to walk alongside them during this precious, final chapter. When I first assess a patient for hospice, I take time to explain the hospice philosophy — a focus on comfort, dignity, and quality of life — and become their advocate, supporting their decisions and those of their families.
            <br />
            <br />
            There is an instant intimacy that forms between patient and nurse. I remember one patient who, while I was helping ease her severe nausea, looked over and said, “You are here with me, and I feel like we’re close friends, yet we just met.” Moments like that reveal the profound connection and trust built in a short time.
            <br />
            <br />
            As a hospice nurse, I am often the one family members see on weekends when their loved one isn’t feeling well. I pray with families, help them cope with the impending loss of their precious mother, daughter, or grandparent. I give hugs, hold hands, and listen as they share their happiest memories. I make sure to remind them about Jesus and the comfort of faith. And yes, I cry when no one is around and miss my patients when they pass.
            <br />
            <br />
            I’ve witnessed the good, the bad, and the ugly sides of life and death. But I am grateful for an incredible team and a Medical Director who is available 24/7. Above all, I know I have done right by my patients when they are comfortable, pain-free, and surrounded by love.
            <br />
            <br />
            Managing pain is one of the most important aspects of hospice care. In addition to medication and comfort measures, I've seen firsthand how gentle therapies like red light therapy can help my patients feel more comfortable and supported.
          </p>
          <div style={{ display: "flex", justifyContent: "center", margin: "32px 0" }}>
            <ProductComponent productid={8} />
          </div>
          <p>
            As a nurse, I only recommend products I've truly found helpful in my practice, and the Red Light Therapy Device above is one I trust to provide real relief for pain and inflammation. If you or a loved one are looking for extra comfort, I encourage you to consider it as part of your care plan.
          </p>
          <p>
            Every day in hospice care reminds me of the power of compassion, connection, and hope. Whether through a gentle touch, a listening ear, or a thoughtful recommendation, my goal is always to help patients and families find comfort and dignity in every moment. Thank you for allowing me to share these stories and resources with you.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Voicesincareblogentry;